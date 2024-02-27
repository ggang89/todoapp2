import "./App.css";
import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState({ todoTitle: "리액트배우기" });
  // 문자로 넣어준 기본값을 객체로 수정
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
          <p className="listText">{todo.todoTitle}</p>
          {/* 연결된 변수를 객체의 키값으로 변경해줌 */}
          <button className="btn">수정</button>
          <button>삭제</button>
        </li>
        <li className="todoList">
          <p className="listText">노마드 강의 듣기</p>
          <button className="btn">수정</button>
          <button>삭제</button>
        </li>
        <li className="todoList">
          <input className="updateTodo" value={todo.todoTitle}></input>
        </li>
      </ul>
    </div>
  );
}

export default App;
