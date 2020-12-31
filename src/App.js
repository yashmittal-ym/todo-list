import React, { useState } from "react"
import ToDoList from './ToDoList'

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const ListOfItems = () => {
    setItems((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItem) => {
      return oldItem.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="centre_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={ListOfItems}>+</button>
          <ol>
            {
              Items.map((itemVal, index) => {
                //if string is size we won't add anything
                if (itemVal.length > 0) {
                  return <ToDoList
                    key={index}
                    id={index}
                    text={itemVal}
                    del={deleteItems} />;
                }
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
