import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TasksTable from "./components/TasksTable";
import { addTask, deleteTask, getTask, updateTask } from "./store/taskActions";
import { tasksSelector } from "./store/taskSelectors";

function App() {
  const initialFormState = { id: null, title: '', detail: '', date: '', isDueDate: false }
  const [task, setTask] = useState(initialFormState)
  const dispatch = useDispatch()
  const {tasks} = useSelector(tasksSelector)
  
  const isDisabled = useMemo(() => task.title !== '' && task.detail !== '' ? false : true, [task])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setTask({ ...task, [name]: value })
  }

  useEffect(() => {
    dispatch(getTask())
  }, [dispatch])

  const submit = (e) => {
      e.preventDefault()
      if (!task.title || !task.detail) return
      dispatch(addTask(task))  
      setTask(initialFormState)
  }

  const edit = (e) => {
    e.preventDefault()
    if (!task.title || !task.detail) return
    dispatch(updateTask(task))
    setTask(initialFormState)
  }


  return <div className="App pt-5">
    <h2 className="text-center text-underline">Create new Task</h2>
    <div className="form col-md-6 offset-3">
      <form onSubmit={task.id ? edit: submit}>
      <div className="form-group">
        <label htmlFor="task">Task</label>
        <input type="text" name="title" value={task.title} onChange={handleInputChange} className="form-control mt-2" id="task" aria-describedby="taskHelp" />
      </div>

      <div className="form-group mt-4">
        <label htmlFor="sdetails">Details</label>
        <textarea className="form-control mt-2" value={task.detail} name="detail" onChange={handleInputChange} id="details" rows="3">
          
        </textarea>
      </div>
      <div className="form-check m-2">
        <input type="checkbox" checked={task.isDueDate} name="isDueDate" onChange={(e) => setTask({...task, isDueDate: !task.isDueDate })} className="form-check-input" id="isDueDate" />
        <label className="form-check-label" htmlFor="isDueDate">This task have due date ?? </label>
      </div>

      {task.isDueDate && (
        <div className="form-group">
          <label htmlFor="task">Date</label>
          <input type="date" value={task.date} name="date" onChange={handleInputChange} className="form-control mt-2" id="task" aria-describedby="taskHelp" />
        </div>
      )}

      <div className="d-flex justify-content-center pt-4">
        <button type="submit" value={task.detail} disabled={isDisabled}  className="btn btn-primary col-md-3">
          {task.id ? 'Edit': 'Submit'}
        </button>
      </div>
      </form>
    </div>

    <h2 className="text-center text-underline mt-5">Tasks List</h2>

    <div className="col-md-8 offset-2">
      <TasksTable tasks={tasks} editTask={setTask} deleteTask={(task) => dispatch(deleteTask(task))}/>
    </div>
  </div>;
}

export default App;
