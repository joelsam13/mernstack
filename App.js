import React,{useState} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './App.css';

function App(){
  const[todos , setTodos]=useState([]);

  const addTodo=text=>{
    const newTodo={id:Date.now(),text:text,isCompleted:false};
    setTodos([...todos,newTodo]);
  };

  const removeTodo=id=>{
    setTodos(todos.filter(todo=>todo.id!==id));
  };
return(
  <div className="App">
    <hi>Todo App</hi>
    <AddTodo onAddTodo={addTodo}/>
    <TodoList todos={todos} onRemoveTodo={removeTodo}/>
  </div>
);


  }
  export default App;