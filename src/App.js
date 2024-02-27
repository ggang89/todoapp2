import "./App.css";
import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("리액트 배우기");

  return (
    <div className="wrap">
      <h1 className="tytle">To Do App (version.2)</h1>
      <div className="inputBox">
        <input
          className="inputAdd"
          type="text"
          placeholder="할 일을 입력하세요"
        ></input>
        <button>추가 </button>
      </div>
      <ul>
        <li className="todoList">
          <p className="listText">{todo}</p>
          <button className="btn">수정</button>
          <button>삭제</button>
        </li>
        <li className="todoList">
          <p className="listText">노마드 강의 듣기</p>
          <button className="btn">수정</button>
          <button>삭제</button>
        </li>
        <li className="todoList">
          <input className="updateTodo" value={todo}></input>
        </li>
      </ul>
    </div>
  );
}

export default App;
