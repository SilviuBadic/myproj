import React from 'react';

const Form = ({ setInput, todos, setTodos, input, value,setValues }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos,  
  { text: input,
    completed: false,
    id: Math.random()*5000 }]);
    setInput("");
  }
  
  const valueChosed = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setValues(e.target.value);
  }


  return (
    <>
      <form className="myform">
        <div className = "mainbox">
          <input 
          maxlength="40"
          value = {input}
          onChange = {inputTextHandler} 
          type="text" 
          className="todo_input" 
          placeholder='Type something here..'/>
          <button onClick = {submitTodoHandler} className="todo_btn" type="submit">
            <i className="fa fa-plus"></i>
          </button>
        </div>
        
      </form>
    </>
    
  );
};


export default Form;