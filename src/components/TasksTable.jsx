import React from 'react'

const TasksTable = ({tasks, editTask, deleteTask}) => {
  return (
    <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Details</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
             <th scope="row">{task.id}</th>
             <td>{task.title}</td>
             <td>{task.detail}</td>
             <td>{task.date}</td>
             <td>
               <button className="btn btn-warning m-2" onClick={() => editTask(task)}>Edit</button>
               <button className="btn btn-danger"onClick={() => deleteTask(task)}>Delete</button>
             </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default TasksTable