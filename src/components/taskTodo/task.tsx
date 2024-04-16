import React from 'react';
import s from './task.module.css'

type taskProps ={
  id:string,
  title:string,
  completed:boolean,
  completedOneTask:Function,
  removeOneTask:Function
}

const Task:React.FC<taskProps> = ({id,title,completed,completedOneTask,removeOneTask})=>{

const removeTodo = (id:string) =>{
  removeOneTask(id)
}




 return (
    <li className={`${s.task} ${completed ? s.completed : ''}`}>
      
      <input 
        type='checkbox'
        checked={completed} 
        className={s.taskCheckbox}
        onChange={()=>completedOneTask(id)}
      />
      
      <span className={s.taskName} > {title}</span>

       
      <button type='button' className={s.taskButton} onClick={()=>removeTodo(id)} >Удалить</button>
    </li>
  );
}

export default Task;