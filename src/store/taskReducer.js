import * as actions from "./taskActions";
const initialState = {
  isLoading: false,
  tasks: [
    {
      id: 1,
      title: "plain redux 1",
      detail: "write the technical post on redux",
      date: "",
      isDueDate: false,
    },
    {
      id: 2,
      title: "plain redux 2",
      detail: "write the technical post on redux",
      date: "",
      isDueDate: false,
    },
  ],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { ...action.payload, id: state.tasks.length + 1 },
        ],
      };
    case actions.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, ...action.payload };
          } else {
            return task;
          }
        }),
      };

    case actions.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}
export default taskReducer;
