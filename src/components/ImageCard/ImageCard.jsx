const imageCard = ({ photo }) => {
  return (
    <div>
      <img width={250} src={photo.urls.thumb} alt={photo.description} />
    </div>
  );
};

export default imageCard;
