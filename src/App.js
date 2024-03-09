import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import ToDoList from "./components/Todolist";
import Todo from "./components/Todo";
import { HashRouter } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [value, setValues] = useState("all");

 

  return (
    <div className ="App">
      <header >
        <h1 className="header">To do list</h1>
      </header>
      <Form input = {input} setInput = {setInput} todos = {todos} setTodos = {setTodos} setValues={setValues} />
      <ToDoList value = {value} setValues = {setValues} setTodos={setTodos} todos={todos}/>
    </div>
  );
  }

export default App;
