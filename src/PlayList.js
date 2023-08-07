import {AiOutlineDelete} from 'react-icons/ai'
import './App.css'

const PlayList = props => {
  const {detailsList, onDelete} = props

  const {imageUrl, name, genre, duration, id} = detailsList

  const deleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="list-item-container">
      <div className="img-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="time-container">
        <p className="time">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={deleteButton}
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default PlayList
