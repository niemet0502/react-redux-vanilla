import * as actions from "./taskActions";
const initialState = {
  isLoading: false,
  tasks: [
    {
      id: 1,
      title: "plain redux 1",
      detail: "write the technical post on redux",
    },
    {
      id: 2,
      title: "plain redux 2",
      detail: "write the technical post on redux",
    },
  ],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
}
export default taskReducer;
