import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <li>
        <Img src={webformatURL} alt={tags} onClick={toggleModal} />
      </li>
      {showModal && <Modal onClose={toggleModal} src={largeImageURL} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  showModal: PropTypes.bool,
};
