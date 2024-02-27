import "./App.css";
import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState({ todoTitle: "리액트배우기",isEditing:false, });
  // 문자로 넣어준 기본값을 객체로 수정

  //1.리스트 창에서 수정버튼을 누른다. 
  //==>isEditing=true
  //2.삭제버튼이 사라지고 텍스트 입력창이 생긴다
  //==>input창이 생성된다.
  //3.수정 버튼을 다시 누르면 내용이 저장되고 삭제버튼이 생긴다.
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
