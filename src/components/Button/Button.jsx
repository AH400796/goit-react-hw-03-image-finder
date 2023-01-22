import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
// import PropTypes from 'prop-types';
import { LoadButton, ButtonWrapper } from './Button.styled';

export default function Button({ onClick, isLoading }) {
  return (
    <ButtonWrapper>
      {isLoading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#314588"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <LoadButton type="submit" onClick={onClick}>
          Load more
        </LoadButton>
      )}
    </ButtonWrapper>
  );
}

// ContactForm.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onSubmitForm: PropTypes.func.isRequired,
// };
