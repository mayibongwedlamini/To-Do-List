import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

// handles to do item editing
function EditToDoItem(props) {
  const [editText, setEditText] = useState(props.text);

  // handle save button click after editing
  function handleSaveClick() {
    props.onSave(props.id, editText);
  }

  // handle edit text change
  function handleEditTextChange(event) {
    setEditText(event.target.value);
  }

  return (
    <div className="form">
      <input type="text" value={editText} onChange={handleEditTextChange} />
      <button className="edit" onClick={handleSaveClick}>
        <DoneIcon />
      </button>
    </div>
  );
}

export default EditToDoItem;
