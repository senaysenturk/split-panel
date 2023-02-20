import { UPDATE_PANEL3 } from "../actions/panel3-actions";

export default function updatePanel3Reducer(state = [], action) {
  switch (action.type) {
    case UPDATE_PANEL3:
      return action.payload;

    default:
      return state;
  }
}
