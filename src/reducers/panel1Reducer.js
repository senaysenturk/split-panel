import { UPDATE_PANEL1 } from "../actions/panel1-actions";

export default function updatePanel1Reducer(state = [], action) {
  switch (action.type) {
    case UPDATE_PANEL1:
      return action.payload;

    default:
      return state;
  }
}
