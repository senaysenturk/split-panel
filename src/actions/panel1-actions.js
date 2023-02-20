export const UPDATE_PANEL1 = "UPDATE_PANEL1";

export function updatePanel1(newData) {
  //   console.log("updatePanel1", newData);
  return {
    type: UPDATE_PANEL1,
    payload: {
      height: newData[0],
      width: newData[1],
    },
  };
}
