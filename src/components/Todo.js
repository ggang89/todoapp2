import React from "react";

function Todo({ edit, handleText, todoTitle, isEditing }) {
  //왜 갑자기 todo.isEditing에서 그냥 isEditing이 됐지?
  //=>props이름이라서!
  return (
    <li className="todoList">
      {isEditing ? (
        <>
          <input value={todoTitle} onChange={handleText} />
          <button onClick={edit}>수정</button>
        </>
      ) : (
        <>
          <p className="listText">{todoTitle}</p>
          <button className="btn" onClick={edit}>
            수정
          </button>
          <button>삭제</button>
        </>
      )}
    </li>
  );
}

export default Todo;
