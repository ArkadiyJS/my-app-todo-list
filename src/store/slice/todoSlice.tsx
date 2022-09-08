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
      state.todos.filter((t)=>t.id!== action.payload.id)
    },
    completeTask(state,action){
      state.todos.map((t)=>(action.payload.id === t.id) ? {...t, completed:!t.completed} : '')
    }
    
  },
})


export const {addTask, removeTask,completeTask } = todoSlice.actions

export default todoSlice.reducer