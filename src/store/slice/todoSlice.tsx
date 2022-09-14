import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [{id:'1', title:'Сходить в магазин', completed:false }]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask(state,action){
      state.todos.push(action.payload)
    },
    removeTask(state,action){
      state.todos =  state.todos.filter((t)=>t.id !== action.payload)
    },
    completeTask(state,action){
    state.todos.find((t)=>t.id === action.payload ? t.completed=!t.completed : ''  )
   
}
    
  },
})


export const {addTask, removeTask,completeTask } = todoSlice.actions

export default todoSlice.reducer