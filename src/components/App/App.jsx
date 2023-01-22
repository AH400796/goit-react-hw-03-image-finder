import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';

import { fetchImges } from '../../services/axios-api';
import ImageGallery from 'components/ImageGallery';

import Searchbar from 'components/Searchbar';
import Modal from 'components/Modal';
import Button from 'components/Button';

import { Wrapper, Image } from './App.styled';

export default class App extends Component {
  state = {
    searchQuery: null,
    images: null,
    modalUrl: null,
    showModal: false,
    isLoading: false,
    page: 1,
    lastPage: null,
  };

  handleSearchSubmit = searchQuery => {
    this.setState({
      page: 1,
      lastPage: null,
      images: null,
      isLoading: true,
      searchQuery: searchQuery,
    });
    const { page } = this.state;

    fetchImges(page, searchQuery)
      .then(response => {
        this.setState(prevState => ({
          images: response.data.hits,
          lastPage: Math.ceil(response.data.totalHits / 12),
          page: prevState.page + 1,
        }));
      })
      .finally(this.setState({ isLoading: false }));
  };

  handleClickOnLoadMoreButton = event => {
    event.preventDefault();
    const { page, searchQuery } = this.state;
    this.setState({ isLoading: true });

    fetchImges(page, searchQuery)
      .then(response =>
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }))
      )
      .finally(this.setState({ isLoading: false }));
  };

  componentDidUpdate(_, prevState) {
    if (this.state.page > prevState.page) {
      setTimeout(this.smoothImagesScroll, 500);
    }
  }

  smoothImagesScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = url => {
    this.setState({ modalUrl: url });
    this.toggleModal();
  };

  render() {
    const { images, showModal, modalUrl, isLoading, page, lastPage } =
      this.state;
    return (
      <Wrapper>
        <Toaster />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Image src={modalUrl} alt="" />
          </Modal>
        )}
        <Searchbar onSubmitForm={this.handleSearchSubmit} />
        {images && images.length !== 0 && (
          <ImageGallery
            images={images}
            handleOnClickImage={this.openModal}
            isLoading={isLoading}
          />
        )}
        {images && images.length !== 0 && page !== lastPage && (
          <Button
            onClick={this.handleClickOnLoadMoreButton}
            isLoading={isLoading}
          />
        )}
      </Wrapper>
    );
  }
}
