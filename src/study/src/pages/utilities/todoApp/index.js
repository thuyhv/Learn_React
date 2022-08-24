import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
//   const URI_API = "https://learning-spring-boot-api.herokuapp.com/api/v1/user/getalltodo";
  const URI_API = "http://localhost:8081/api/v1/user/getalltodo";
  const callAPI = async () => {
    try {
      const { data: todos} = await axios({
        url: URI_API,
        method: 'GET'
      });
     
      if(todos.status === "OK"){
        console.log(todos);
        setTodos(todos);
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (todos.length <= 0) {
      callAPI();
    }
  }, [todos]);

  return (
    <>
      <h1>List users</h1>
      <ul>
        { todos.data?.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
            )
          )
        }
      </ul>
    </>
  );
};

export default TodoApp;
