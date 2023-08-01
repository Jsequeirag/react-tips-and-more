import { useState, React, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom"
function TaskForm() {
  const navigate = useNavigate()
  const [task, setTask] = useState({})
  const dispatch = useDispatch()

  const taskList = useSelector((state) => state.tasks)
  const params = useParams()
  function handleChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (params.id) {
      dispatch(updateTask(task))
      navigate("/")
    } else {
      dispatch(addTask({ ...task, id: uuid() }))
      navigate("/")
    }
  }
  useEffect(() => {
    if (params.id) {
      setTask(taskList.find((task) => task.id === params.id))
    }
  }, [params.id, taskList])
  return (
    <>
      <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 mb-2">
        <label htmlFor="title" className="block text-xs font-bold">
          Task: {taskList.length}
        </label>
        <input
          value={task.title}
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        />
        <label htmlFor="title" className="block text-xs font-bold">
          Description
        </label>
        <textarea
          value={task.description}
          name="description"
          placeholder="description"
          cols="30"
          rows="10"
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        ></textarea>
        <button className="bg-indigo-600 px-2 py-1">Save</button>
      </form>
    </>
  )
}

export default TaskForm
