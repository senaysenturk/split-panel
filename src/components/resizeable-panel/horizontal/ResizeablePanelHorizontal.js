import React, { useState } from "react";
import SplitGrid from "react-split-grid";
import Split from "react-split";
import styles from "./style.module.scss";

const ResizeablePanelHorizontal = () => {
  return (
    <Split className={`${styles["split"]}`}>
      <div>1</div>
      <div>2</div>
    </Split>
  );
};

export default ResizeablePanelHorizontal;
