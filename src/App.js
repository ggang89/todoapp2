import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="wrap">
      <h1 className="title">To Do App (version.2)</h1>

      <div className="inputBox">
        <input
          className="inputAdd"
          type="text"
          placeholder="할 일을 입력하세요"
        ></input>
        <button>추가 </button>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
