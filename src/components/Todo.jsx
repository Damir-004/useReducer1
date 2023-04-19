import React, { useState, useReducer } from "react";
import reducer from "./reducer";
const Todo = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [todoTitle, setTodoTitle] = useState("");
  const addTodo = () => {
    if (todoTitle.trim() !== "") {
      dispatch({
        type: "add",
        payload: todoTitle,
      });
      setTodoTitle("");
    }
  };

  return (
    <div className="container">
      <div className="boxtop">
        <p>New task</p>
        <div className="boxtop_input">
          <input
            type="text"
            placeholder="Something neat"
            onChange={(event) => setTodoTitle(event.target.value)}
            value={todoTitle}
          />
          <button className="todo-btn" onClick={addTodo}>ADD</button>
        </div>
      </div>
      <div className="boxbottom">
        <ul>
          {state.length ? (
            state.map(({ title }, index) => (
              <li key={index}>
                <p>{title}</p>
                <button className='btn todo-btn'
                  onClick={() => dispatch({ type: "remove", payload: title })}
                >Remove</button>
              </li>
            ))
          ) : (
            <li className="none">None</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
