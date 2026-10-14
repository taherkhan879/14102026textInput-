import {useState} from 'react'
import './index.css'

const EditableTextInput = () => {
  const [text, setText] = useState('') // input value
  const [savedText, setSavedText] = useState('') // saved value
  const [isEditing, setIsEditing] = useState(true)

  const handleChange = event => {
    setText(event.target.value)
  }

  const handleClick = () => {
    if (isEditing) {
      setSavedText(text) // store input value when saving
    }
    setIsEditing(prev => !prev)
  }

  return (
    <div className="container">
      <div className="cont">
        <h1 className="heading">Editable Text Input</h1>

        {isEditing ? (
          <input
            type="text"
            className="inp"
            value={text}
            onChange={handleChange}
          />
        ) : (
          <p className="saved-text">{savedText}</p>
        )}

        <button type="button" className="button" onClick={handleClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  )
}

export default EditableTextInput
