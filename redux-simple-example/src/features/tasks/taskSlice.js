import { createSlice } from "@reduxjs/toolkit"
const initialState = [
  { id: "1", title: "Task title 1 ", description: "Task 1", completed: false },
  { id: "2", title: "Task title 2", description: "Task 2", completed: false },
  { id: "3", title: "Task title 3", description: "Task 3", completed: false },
]
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      //const taskFound=state.find(task=>task.id===action.payload.id)
      // if (taskFound) {
      //  state.splice(state.indexOf(taskFound), 1)
      //}
      return state.filter((task) => task.id !== action.payload)
    },
    updateTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload.id)
      if (foundTask) {
        foundTask.title = action.payload.title
        foundTask.description = action.payload.description
      }
    },
  },
})
export const { addTask, deleteTask, updateTask } = taskSlice.actions
export default taskSlice.reducer
