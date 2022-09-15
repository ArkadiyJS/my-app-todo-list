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
searchValue:string,
}

const Tasks:React.FC<TasksProps> = ({searchValue,filtered,completedOneTask,removeOneTask})=> {

  return (
    <ul className='tasks'>
      {
        filtered
          .filter(obj =>{ 
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
              return true 
            } else {return false}
          })

          .map((t)=> <Task 
            key={t.id} id={t.id} title={t.title}
            completed={t.completed} removeOneTask={removeOneTask}
            completedOneTask={completedOneTask}
             />)

      }
      
    </ul>
  );
}

export default Tasks;