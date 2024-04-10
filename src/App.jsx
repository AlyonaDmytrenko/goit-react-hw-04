import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import { requestPhoto } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import { requestPhoto, requestPhotoByQuery } from "./services/api";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true);
        const data = await requestPhoto();
        setPhotos(data);
        console.log(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  useEffect(() => {
    if (query.length === 0) return;
    async function fetchPhotosByQuery() {
      try {
        setIsLoading(true);
        const data = await requestPhotoByQuery(query);
        setPhotos(data.photos);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotosByQuery();
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
    </>
  );
};

export default App;
