import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { addTask, completeTask, removeTask } from './store/slice/todoSlice';
import FilterButton from './components/filteredButtonTodo/filterButton';
import FormAddTask from './components/formTodo/formAddTask';
import Tasks from './components/taskTodo/tasks';
import './App.css';
import Search from './components/searchTodo/search';


const App:React.FC = ()=> {

  const dispatch = useAppDispatch()
  const todos = useAppSelector((state)=> state.todoSlice.todos)

  const [filtered, setFiltered] = useState<{id:string, title:string, completed:boolean}[]>(todos)

  const [searchValue, setSearchValue]= useState<string>('')

  const onSubmit = (newTask:{id:string, title:string, completed:boolean}) => {
    dispatch(addTask(newTask))
  }

  useEffect(()=>{
    setFiltered(todos)
   
  },[todos])

  const todoFilter = (status:boolean|string)=>{
    if (status === 'all'){
      setFiltered(todos)
    } else {
      let changeTodos = [...todos].filter((t)=> t.completed === status)
      setFiltered(changeTodos)
    }

}


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

          <Search setSearchValue={setSearchValue}/>

          <FilterButton todoFilter={todoFilter}/>

          <Tasks searchValue={searchValue} filtered={filtered}  completedOneTask={completedOneTask} removeOneTask={removeOneTask}/>

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
