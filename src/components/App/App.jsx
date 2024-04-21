import { useEffect, useState } from 'react';
import { fetchArticles } from '../../articles-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const [modal, setModal] = useState(false);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setImgUrl(null);
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getArticles() {
      try {
        setIsLoading(true)
        const data = await fetchArticles(query, page);
        setImages((prevArticles) => {
          return [...prevArticles, ...data]
        })
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getArticles();
  }, [query, page]);
  
  const showModal = (url) => {
    setImgUrl(url);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <b>Opps, there is error...</b>}
      {images.length > 0 && <ImageGallery images={images} onClick={showModal}/>}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
      <LoadMoreBtn addArticle={handleLoadMore}/>
      )}
      <ImageModal image={imgUrl} state={modal} close={closeModal} />
    </>
  )
}
