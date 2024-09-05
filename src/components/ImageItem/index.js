import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImage} = props
  const {thumbnailUrl, id} = imageDetails

  const clickedImage = () => {
    onClickImage(id)
  }

  return (
    <li>
      <button className="btn-image" type="button" onClick={clickedImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageItem
