export const UPDATE_PANEL2 = "UPDATE_PANEL2";

export function updatePanel2(newData) {
  // console.log("updatePanel2", newData);
  return {
    type: UPDATE_PANEL2,
    payload: {
      height: newData[0],
      width: newData[1],
    },
  };
}
