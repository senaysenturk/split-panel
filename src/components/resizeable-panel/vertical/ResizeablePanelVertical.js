import React, { useState } from "react";
import Split from "react-split";

import styles from "./style.module.scss";
import ResizeablePanelHorizontal from "../horizontal/ResizeablePanelHorizontal";

const ResizeablePanelVertical = () => {
  return (
    <Split className="split" direction="vertical">
      <div className="">
        <ResizeablePanelHorizontal />
      </div>
      <div className="">
        <ResizeablePanelHorizontal />
      </div>
    </Split>
  );
};

export default ResizeablePanelVertical;
