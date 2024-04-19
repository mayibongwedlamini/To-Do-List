import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import EditToDoItem from "./EditToDoItem"; // Import the new component
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // handle click to cross out item
  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  // handle edit button click
  function handleEditClick() {
    setIsEditing(true);
  }

  // handle save button click
  function handleSaveClick(id, newText) {
    setIsEditing(false);
    props.onEdit(id, newText);
  }

  return (
    <div className={`todo-item ${isDone ? "done" : ""}`}>
      {isEditing ? (
        <div>
          <EditToDoItem
            id={props.id}
            text={props.text}
            onSave={handleSaveClick}
          />
        </div>
      ) : (
        <div className="item">
          <button onClick={() => props.onChecked(props.id)}>
            <CheckBoxOutlineBlankIcon />
          </button>
          <p
            onClick={handleClick}
            style={{ textDecoration: isDone ? "line-through" : "none" }}
          >
            {props.text}
          </p>
          <div>
            <button onClick={() => props.onMoveUp(props.id)}>
              <ArrowUpwardIcon fontSize="small" />
            </button>
            <button onClick={() => props.onMoveDown(props.id)}>
              <ArrowDownwardIcon fontSize="small" />
            </button>
            <button onClick={handleEditClick}>
              <EditIcon fontSize="small" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDoItem;
