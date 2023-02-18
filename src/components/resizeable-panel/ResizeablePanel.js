import React, { useState } from "react";
import Split from "react-split-grid";

import "./style.scss";
const ResizeablePanel = () => {
  return (
    <>
      <Split
        // minSize={5}
        // columnMinSize={200}
        // columnMinSizes={[1,2,3]}
        columnCursor="col-resize"
        rowCursor="row-resize"
        render={({ getGridProps, getGutterProps }) => {
          return (
            <div className={"grid-container"} {...getGridProps()}>
              <div className={"grid-item item1"}>Row 1 Column 1</div>
              <div
                className={"grid-gutter item2 gutter-horizontal"}
                {...getGutterProps("column", 1)}
              />
              <div className={"grid-item item3"}>Row 1 Column Two</div>

              <div
                className={"grid-gutter item4 gutter-vertical"}
                {...getGutterProps("row", 1)}
              />
              <div className={"grid-item item5"}>Row 2 Column One</div>
              <div
                className={"grid-gutter item6 gutter-horizontal"}
                {...getGutterProps("column", 3)}
              />
              <div className={"grid-item item7"}>Row 2 Column Two</div>
            </div>
          );
        }}
      />
    </>
  );
};

export default ResizeablePanel;
