import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { addTask, completeTask, removeTask } from './store/slice/todoSlice';
import FormAddTask from './components/formTodo/formAddTask';
import Tasks from './components/taskTodo/tasks';
import './App.css';


const App:React.FC = ()=> {

  const dispatch = useAppDispatch()
  const todos = useAppSelector((state)=> state.todoSlice.todos)

  const onSubmit = (newTask:{id:string, title:string, completed:boolean}) => {
    dispatch(addTask(newTask))
  }
  useEffect(()=>{
    console.log('render')
  },[todos])

  const completedOneTask = (id:string) => {
    dispatch(completeTask(id))
  }
  const removeOneTask = (id:string)=>{
    dispatch(removeTask(id))
  }


  return (
    <div className="container">
      <div className='content'>
        <h1> Todo List </h1>
          <FormAddTask  onSubmit={onSubmit} />

          <Tasks todos={todos}  completedOneTask={completedOneTask} removeOneTask={removeOneTask}/>

          <footer className='footer'>
            <h6>
              Всего задач:
              <span>{todos.length}</span>
            </h6>
            
            <h6>
              Кол-во выполненных задач:
              <span>{todos.filter((sumCompleted:any) => sumCompleted.completed === true).length}</span>
              
            </h6>

          </footer>

      </div>
      
    </div>
  );
}

export default App;
