export const ADD_TASK = "task/addTask";
export const GET_TASKS = "task/getTasks";

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const getTask = () => ({ type: GET_TASKS });
