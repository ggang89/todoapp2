import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [addText, setAddText] = useState("");

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
  const removeInList = (id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...!t, isEditing: undefined };
        //list에서 없애기
        //수정,삭제버튼이 안 사라진다...
        //버튼까지가 t값 아닌가?
      } else {
        return t;
      }
    });
    setTodoList(newArr);
  };

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
  const handleForm = (e) => {
    setAddText(e.target.value);
  };

  const handleAdd = () => {
    const newArr = {
      todoTitle: addText,
      id: uuidv4(),
      isEditing: false,
    };
    setTodoList([...todoList, newArr]);
  };
  return (
    <>
      <h1 className="title">To Do App (version.2)</h1>

      <div className="inputBox">
        <input
          className="inputAdd"
          type="text"
          value={addText}
          placeholder="할 일을 입력하세요"
          onChange={handleForm}
        ></input>
        <button onClick={handleAdd}>추가 </button>
      </div>
      <ul>
        {todoList.map((t) => (
          <Todo
            key={t.id}
            edit={() => editInList(t.id)}
            remove={() => removeInList(t.id)}
            handleText={(e) => handleTextInList(e, t.id)}
            isEditing={t.isEditing}
            todoTitle={t.todoTitle}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
