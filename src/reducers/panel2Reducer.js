import { UPDATE_PANEL2 } from "../actions/panel2-actions";

export default function updatePanel2Reducer(state = [], action) {
  switch (action.type) {
    case UPDATE_PANEL2:
      return action.payload;

    default:
      return state;
  }
}
