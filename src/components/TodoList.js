import React from "react";
import { useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const [todo, setTodo] = useState({
    todoTitle: "리액트 공부",
    isEditing: false,
  });
  const [todoList, setTodoList] = useState([
    {
      id: "uniqeKey",
      //id값에 쓸 수 있는거?
      todoTitle: "리액트 배우기",
      isEditing: false,
    },
    {
      id: "uniqeKey2",
      todoTitle: "자바스크립트 배우기",
      isEditing: false,
    },
  ]);

  const edit = () => {
    setTodo({ ...todo, isEditing: !todo.isEditing });
  };
  const handleText = (e) => {
    setTodo({ ...todo, todoTitle: e.target.value });
  };

  return (
    <ul>
      {todoList.map((t)=>(
        <Todo
        key={t.id}
        edit={edit}
        handleText={handleText}
        isEditing={t.isEditing}
        todoTitle={t.todoTitle}
      />
      ))}
      

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
