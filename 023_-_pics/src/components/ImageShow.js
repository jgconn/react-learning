
// since we only need specific propr we use { image } to de structure props
function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
