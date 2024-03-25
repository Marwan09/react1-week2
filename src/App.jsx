import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState([
    {
      id: Date.now() + 5,
      name: "first task",
      completed: false,
    },
    {
      id: Date.now() + 7,
      name: "seconed task",
      completed: false,
    },
    {
      id: Date.now(),
      name: "thired task",
      completed: false,
    },
  ]);
  const inputRef = useRef();

  const handleDelete = (id) => {
    const newTodos = todos.filter((e) => e.id !== id);
    setTodos(newTodos);
  };
  const handlecomleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const handleAdd = () => {
    const text = inputRef.current.value;
    const newElement = {
      id: Date.now(),
      name: text,
      completed: false,
    };
    console.log(inputRef.current.value);
    setTodos([...todos, newElement]);
  };
  useEffect(() => {
    const timer = setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <div className="box">
        <div>You have used: {counter} seconeds on this side </div>
        <h2>MY Todo List</h2>
        <div className="add">
          <input type="text" className="inputAdd" ref={inputRef} />
          <button onClick={handleAdd}>Add</button>
        </div>
        <ul>
          {todos.map((e, index) => (
            <div key={e.id}>
              <li>
                <div className="todo">
                  <div>
                    <input
                      onClick={() => handlecomleted(index)}
                      type="checkbox"
                      name=""
                      id={e.name}
                      // checked={() => e.completed}
                    />
                    <label
                      className={e.completed ? "done" : ""}
                      htmlFor={e.name}
                      onClick={() => {
                        // e.completed != e.completed;
                      }}
                    >
                      {e.name}
                    </label>{" "}
                  </div>
                  <button onClick={() => handleDelete(e.id)}>Delete</button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
