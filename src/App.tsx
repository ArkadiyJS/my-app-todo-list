
import './App.css';
import FormAddTask from './components/formTodo/formAddTask';
import Tasks from './components/taskTodo/tasks';

const App:React.FC = ()=> {

  const onSubmit = (newTask:{id:string,title:string,completed:boolean}) => {
// dispatch(action(newTask))
  }


  return (
    <div className="container">
      <div className='content'>
        <h1> Todo List </h1>
          <FormAddTask  onSubmit={onSubmit} />

          <Tasks  />

          <footer className='footer'>
            <h6>
              Всего задач:
              <span>{ }3</span>
            </h6>
            
            <h6>
              Кол-во выполненных задач:
              <span>{}3</span>
            </h6>

          </footer>

      </div>
      
    </div>
  );
}

export default App;
