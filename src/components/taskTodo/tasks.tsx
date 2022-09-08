import React from 'react';
import Task from './task';
type TasksProps = {
  todos:{
    id: string;
    title: string;
    completed: boolean;
}[]
}

const Tasks:React.FC<TasksProps> = ({todos})=> {

  return (
    <ul className='tasks'>
      {
        todos.map((t)=><Task id={t.id} title={t.title} completed={t.completed} />)
      }
      
    </ul>
  );
}

export default Tasks;