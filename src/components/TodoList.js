import React from "react";
import { useState } from "react";
import Todo from "./Todo";

function TodoList() {
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
    <ul>
      <Todo
        edit={edit}
        handleText={handleText}
        isEditing={todo.isEditing}
        todoTitle={todo.todoTitle}
      />

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
  );
}

export default TodoList;
