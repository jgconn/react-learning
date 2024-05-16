import './ImageList.css';
import ImageShow from './ImageShow';

// takes array of image objects
function ImageList({ images }) {
  // renderedImages uses map to take each individual image as a prop to ImageShow using image id and image array itself
  const renderedImages = images.map((image) => {
    // key is used to unqiue identify child in div in return
    return <ImageShow key={image.id} image={image} />;
  });

  // returns a div with all imageShow img src
  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
