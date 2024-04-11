import "./App.css";
import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState({
    todoTitle: "리액트 공부",
    isEditing: false,
  });

  const edit = () => {
    setTodo({ ...todo, isEditing: !todo.isEditing });
  };
  const handleText = (e) => {
    setTodo({ ...todo, todoTitle: e.target.value });
  };
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

      <ul>
        <li className="todoList">
          {todo.isEditing ? (
            <>
              <input value={todo.todoTitle} onChange={handleText} />
              <button onClick={edit}>수정</button>
            </>
          ) : (
            <>
              <p className="listText">{todo.todoTitle}</p>
              <button className="btn" onClick={edit}>
                수정
              </button>
              <button>삭제</button>
            </>
          )}
        </li>

        {/* <li className="todoList">
          {todo.isEditing ? (
            <>
            <input/>
            <button onClick={edit}>수정</button>
            </>
          ) : (
            <>
              <p className="listText">노마드 강의 듣기</p>
              <button className="btn" onClick={edit}>
                수정
              </button>
              <button>삭제</button>
            </>
          )}
        </li> */}
        <li className="todoList">
          <input className="updateTodo" value={todo.todoTitle}></input>
        </li>
      </ul>
    </div>
  );
}

export default App;
