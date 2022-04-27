export const ADD_TASK = "task/addTask";
export const GET_TASKS = "task/getTasks";
export const UPDATE_TASK = "task/updateTask";
export const DELETE_TASK = "task/deleteTask";

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const updateTask = (task) => ({ type: UPDATE_TASK, payload: task });
export const getTask = () => ({ type: GET_TASKS });
export const deleteTask = (task) => ({ type: DELETE_TASK, payload: task.id });
