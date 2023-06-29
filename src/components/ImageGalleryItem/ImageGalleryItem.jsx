import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    const { showModal } = this.state;
    return (
      <>
        <li>
          <Img src={webformatURL} alt={tags} onClick={this.toggleModal} />
        </li>
        {showModal && <Modal onClose={this.toggleModal} src={largeImageURL} />}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  showModal: PropTypes.bool,
};
