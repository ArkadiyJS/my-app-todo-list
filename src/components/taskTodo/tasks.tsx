import React from 'react';
import Task from './task';

type TasksProps = {
  filtered:{
    id: string;
    title: string;
    completed: boolean;
}[],
completedOneTask:Function,
removeOneTask:Function,
}

const Tasks:React.FC<TasksProps> = ({filtered,completedOneTask,removeOneTask})=> {

  return (
    <ul className='tasks'>
      {
        filtered.map((t)=><Task key={t.id} id={t.id} title={t.title} completed={t.completed} removeOneTask={removeOneTask}  completedOneTask={completedOneTask}/>)
      }
      
    </ul>
  );
}

export default Tasks;