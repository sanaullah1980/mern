
import './App.css';
import React, {useState} from 'react';
import { Button, TextField, Checkbox } from '@mui/material';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("")

  const addTask = () => {
    if(task.length === 0){
      alert("Enter a task first")
    }else{
      setTodoList([
        ...todoList, {task: task, status:false}
      ]
      )
    }
    
    setTask("");
  }

  const checkTodo = (idx) => {
    const updatedTodo = todoList.map((data, i)=>{
      if(i == idx){
        return {...data, status :!data.status } 
      }
      return data;
    })
    setTodoList(updatedTodo);
  }

  const showTask = () => {
    const test = todoList.map((data, i)=> {
      return (
        <div className='task' key={i}>
          <h1>{data.task}</h1>
          <Checkbox checked={data.status} size="small" onClick={()=> checkTodo(i)}/>
          <Button variant="contained" onClick={() => deletetask(i)}>Delete</Button>
        </div>
      )
    })
    return test;
  }

  const deletetask = (idx) => {
      const upadtedTask = todoList.filter((obj, i)=> {
        return     idx != i
  })
      setTodoList(upadtedTask);
  }

  return (
    <div className="App">
         <TextField variant="standard" t
                    type="text" 
                    name="task" 
                    helperText="Type to-do task"
                    onChange={(e)=> setTask(e.target.value)}
                    value={task}
          />
         <br />
         <br />
        <Button variant="contained" onClick={addTask}>Add</Button>
        <p>
           {showTask()}
        </p>
       
    </div>
  );
}

export default App;
