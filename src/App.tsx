
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import FormAddTask from './components/formTodo/formAddTask';
import Tasks from './components/taskTodo/tasks';
import { addTask } from './store/slice/todoSlice';

const App:React.FC = ()=> {
  const dispatch = useDispatch()
  const todos = useSelector((state:any)=> state.todoSlice.todos)

  const onSubmit = (newTask:{id:string, title:string, completed:boolean}) => {
    dispatch(addTask(newTask))
  }


  return (
    <div className="container">
      <div className='content'>
        <h1> Todo List </h1>
          <FormAddTask  onSubmit={onSubmit} />

          <Tasks todos={todos} />

          <footer className='footer'>
            <h6>
              Всего задач:
              <span>{todos.length}</span>
            </h6>
            
            <h6>
              Кол-во выполненных задач:
              <span>{3}</span>
              {/* todos.filter(t => t.completed === true).length */}
            </h6>

          </footer>

      </div>
      
    </div>
  );
}

export default App;
