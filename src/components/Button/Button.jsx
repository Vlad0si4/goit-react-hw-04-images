import React from 'react';
import { StyledBtn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onButtonLoadMore }) => {
  return (
    <StyledBtn onClick={onButtonLoadMore} type="button">
      Load More
    </StyledBtn>
  );
};
Button.propTypes = {
  onButtonLoadMore: PropTypes.func.isRequired,
};
