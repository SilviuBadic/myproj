import React from 'react';
import Todo from './Todo';



const ToDoList = ({todos, setTodos, filteredTodos}) => {
  return (
    <div className = "main_container">
      <ul className='todo_list'>
        {todos.map((todo) => (

          <Todo 
          setTodos={setTodos}
          todo={todo}
          todos={todos} 
          key={todo.id} 
          text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;