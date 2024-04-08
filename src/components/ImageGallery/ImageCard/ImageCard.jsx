const ImageCard = ({ image }) => {
  return (
    <li>
      <img width={300} src={image.urls.small} alt={image.alt_description} />
    </li>
  );
};

export default ImageCard;
