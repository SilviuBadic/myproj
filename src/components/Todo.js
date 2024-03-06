import React from 'react';

const Todo = ({text, todo, todos, setTodos }) => {
  const deleteTodo = () => {
    console.log(todo)
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeTodo = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id){
        return{
          ...item, completed:!item.completed
        };
       
      }
      return item;
    }))
  };

  return (
    <div className='list_box'>
      <li className={`todo_list_li ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeTodo} className='complete_btn'><i className='fas fa-check'></i></button>
      <button onClick={deleteTodo} className='trash_btn'><i className='fas fa-trash'></i></button> 
    </div>
  );
};

export default Todo;