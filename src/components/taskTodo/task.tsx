import React from 'react';
import s from './task.module.css'

type taskProps ={
  id:string,
  title:string,
  completed:boolean
}

const Task:React.FC<taskProps> = ({id,title,completed})=>{
  return (
    <li className={s.task}>
      {/* onChange={()=>completedTodo(id)} */}
      <input 
        type='checkbox'
        checked={completed} 
        className={s.taskCheckbox}
        
      />
      
      <span className={s.taskName}>{title}</span>
      {/* onClick={()=>removeTodo(id)} */}
      <button type='button' className={s.taskButton}  >Удалить</button>
    </li>
  );
}

export default Task;