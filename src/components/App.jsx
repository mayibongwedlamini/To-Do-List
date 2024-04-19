import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);

  // add to do item into array from user input
  function addItem(inputText) {
    // call addItem fucntion and pass over inpuText that it can add to items array
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  // passed to child to do item to delete item
  function deleteItem(id) {
    setItems((prevItems) => {
      // filter through array and get rid of item with maching id that was passed over.
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // passed to child to do item to edit item
  function editItem(id, newText) {
    setItems((prevItems) => {
      return prevItems.map((item, index) => {
        if (index === id) {
          return newText;
        }
        return item;
      });
    });
  }

  // move items in the to do list upwards
  function moveItemUp(id) {
    if (id === 0) return; // If the item is already at the top, do nothing
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const temp = newItems[id - 1];
      newItems[id - 1] = newItems[id];
      newItems[id] = temp;
      return newItems;
    });
  }
  // move items in the to do list downwards
  function moveItemDown(id) {
    if (id === items.length - 1) return; // If the item is already at the bottom, do nothing
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const temp = newItems[id + 1];
      newItems[id + 1] = newItems[id];
      newItems[id] = temp;
      return newItems;
    });
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addItem} />
        {/* call inputArea and passover the prop for addItem function*/}
        <div>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index} // set key as the index of array
              id={index}
              text={todoItem}
              onChecked={deleteItem} // Pass deleteItem function
              onEdit={editItem} // Pass editItem function
              onMoveUp={moveItemUp} // Pass the moveItemUp function as a prop
              onMoveDown={moveItemDown} // Pass the moveItemDown function as a prop
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
