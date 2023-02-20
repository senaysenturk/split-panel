export const UPDATE_PANEL3 = "UPDATE_PANEL3";

export function updatePanel3(newData) {
  // console.log("updatePanel3", newData);
  return {
    type: UPDATE_PANEL3,
    payload: {
      height: newData[0],
      width: newData[1],
    },
  };
}
