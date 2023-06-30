import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from './Servises/pixabayApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { toast } from 'react-toastify';
import { Loader } from './Loader/Loader';
import PropTypes from 'prop-types';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    try {
      getImages(query, page).then(({ hits, totalHits }) => {
        setImages(prev => [...prev, ...hits]);
        setShowBtn(page < Math.ceil(totalHits / 12));

        if (hits.length === 0) {
          return toast.info(
            'Sorry, there are no images matching your search query.'
          );
        }
      });
    } catch (error) {
      toast.error('Ops... something wrong');
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  const handleSubmit = query => {
    if (query.trim() === '') {
      return toast.info(
        'Sorry, but the search field cannot be empty, please enter your query'
      );
    }

    setQuery(query);
    setPage(1);
    setImages([]);
    setShowBtn(false);
    setLoading(true);
  };
  const onButtonLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {loading ? <Loader /> : <ImageGallery images={images} />}
      {showBtn && <Button onButtonLoadMore={onButtonLoadMore} />}
    </>
  );
};

App.propTypes = {
  page: PropTypes.number,
  images: PropTypes.string,
  showBtn: PropTypes.bool,
  loading: PropTypes.bool,
  photosLoaded: PropTypes.bool,
};
