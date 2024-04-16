import React, { useState } from 'react';
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


const [changeTitleTask,setChangeTitleTask] = useState(title)
const [editInput, showEditInput] = useState<boolean>(false)


const editModeTask = ()=>{
showEditInput(!editInput)
}

 return (
    <li onDoubleClick={()=>editModeTask()} className={`${s.task} ${completed ? s.completed : ''}`}>
      
      <input 
        type='checkbox'
        checked={completed} 
        className={s.taskCheckbox}
        onChange={()=>completedOneTask(id)}
      />
      
      <span className={s.taskName} >{editInput ? <input onChange={(e) => { setChangeTitleTask(e.target.value)}} value={changeTitleTask} className={s.inputEditMode}/> : changeTitleTask  }</span>

      <button type='button' className={s.taskButton} onClick={()=>editModeTask()} >Изменить</button>
      <button type='button' className={s.taskButton} onClick={()=>removeTodo(id)} >Удалить</button>
    </li>
  );
}

export default Task;