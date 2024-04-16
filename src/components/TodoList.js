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
      todoTitle: "리액트 배우기",
      isEditing: false,
    },
    {
      id: "uniqeKey2",
      todoTitle: "자바스크립트 배우기",
      isEditing: false,
    },
  ]);

  const editInList = (id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, isEditing: !t.isEditing };
      } else {
        return t;
      }
      //받은 id값과 일치하는 id의 list 내용을 바꿔준다.
    });
    setTodoList(newArr);
  };
  const handleTextInList = (e, id) => {
    const newText = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, todoTitle: e.target.value };
      } else {
        return t;
      }
    });
    setTodoList(newText);
  };

  return (
    <ul>
      {todoList.map((t) => (
        <Todo
          key={t.id}
          edit={() => editInList(t.id)}
          handleText={(e) => handleTextInList(e, t.id)}
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
