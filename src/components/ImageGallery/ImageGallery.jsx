import ImageCard from "./components/ImageGallery/ImageGallery";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images &&
          images.map((image) => {
            return <ImageCard key={image.id} photo={image} />;
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
