import React from 'react';
import s from './task.module.css'
// {id,title,completed}
const Task:React.FC = ()=>{
  return (
    <li className={s.task}>
      {/* onChange={()=>completedTodo(id)} checked={completed} */}
      <input 
        type='checkbox'
        
        className={s.taskCheckbox}
        
      />
      {/* {title} */}
      <span className={s.taskName}>Сходить в магазин</span>
      {/* onClick={()=>removeTodo(id)} */}
      <button type='button' className={s.taskButton}  >Удалить</button>
    </li>
  );
}

export default Task;