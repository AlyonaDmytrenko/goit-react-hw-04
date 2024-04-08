// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import ImageModal from "./components/ImageModal/ImageModal";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState("null");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");

  const requestImage = async () => {
    const { data } = await axios.get;
    "https://unsplash.com/documentation#search-photos"();
    return data;
  };

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true);
        const data = await requestImage();
        setImages(data.images);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, []);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };
  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} />}
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
    </>
  );
}

export default App;
