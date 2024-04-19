import { useEffect, useState } from 'react';
import { fetchArcticles } from '../../arcticles-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';

export default function App() {
  const [images, getImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getArticles() {
      try {
        const data = await fetchArcticles("dog");
        getImages(data)
        
      } catch (error) {
        setError(true)
      }
    }

    getArticles();
  }), [];

  const handleSearch = (newQuery) => {
    console.log(newQuery)
  }
  
  return (
    <>
      <SearchBar onSearch={handleSearch}/>

      {error && <b>Opps, there is error...</b>}

      {isLoading && <b>Please wait, loading images...</b>}

      {images.length > 0 && <ImageGallery images={images}/>}
      
    </>
  )
}

