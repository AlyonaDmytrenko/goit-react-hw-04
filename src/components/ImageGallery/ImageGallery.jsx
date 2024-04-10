import ImageCard from "../ImageCard/ImageCard/";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {Array.isArray(photos) &&
        photos.map((photo) => {
          return (
            <li key={photo.id}>
              <ImageCard photo={photo} />
              <h2>Description:{photo.description}</h2>
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
