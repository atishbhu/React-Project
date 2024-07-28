import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoRender = () => {
  const [id, setId] = useState("1");

  const handleId = (id) => {
    setId(id);
  };
  return (
    <>
      <button onClick={() => handleId("1")}>1</button>
      <button onClick={() => handleId("2")}>2</button>
      <button onClick={() => handleId("3")}>3</button>
      <button onClick={() => handleId("4")}>4</button>
      <button onClick={() => handleId("5")}>5</button>
      <Todo id={id} />
    </>
  );
};

function Todo({ id }) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((res) => setTodo(res.data.todo));
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default TodoRender;
