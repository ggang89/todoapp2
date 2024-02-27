import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
