import React from "react";
import Connect from "./components/Connect";
import Todo from "./components/Todo";
import './App.css'

const App = () => {
  return (
    <div>
      <Todo />
      <Connect />
    </div>
  );
};

export default App;