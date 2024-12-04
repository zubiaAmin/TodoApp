import React, { useState } from "react";

export default function TodoList(props) {
  const [isEditing, setEditing] = useState(false);
  const [editText, setEditText] = useState(props.item);

  const handleSaveEdit = () => {
    props.editItem(props.index, editText);
    setEditing(false);
  };

  return (
    <li className="list-item">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        props.item
      )}

      {/* {props.item} */}
      <span className="icons">
        <i
          className="fa-solid fa-trash icon-delete"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        ></i>

        {/* button to edit */}

        {isEditing ? (
          <button onClick={handleSaveEdit}>Save</button>
        ) : (
          <i class="fa-solid fa-pen" onClick={() => setEditing(true)}></i>
        )}
      </span>
    </li>
  );
}
