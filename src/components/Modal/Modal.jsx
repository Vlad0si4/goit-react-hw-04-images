import React, { useEffect } from 'react';
import { ModalStyled, Overlay, StyledImg } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ onClose, src }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClose}>
      <ModalStyled>
        <StyledImg src={src} alt="larges photo" />
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
