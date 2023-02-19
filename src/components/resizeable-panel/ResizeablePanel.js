import React, { useState } from "react";
import SplitGrid from "react-split-grid";
import Split from "react-split";

import ResizeablePanelHorizontal from "./horizontal/ResizeablePanelHorizontal";
import ResizeablePanelVertical from "./vertical/ResizeablePanelVertical";
import "./style.scss";
const ResizeablePanel = () => {
  return (
    <div className="">
      {/* <ResizeablePanelHorizontal /> */}
      {/* <ResizeablePanelVertical /> */}
      {/* <ResizeablePanelHorizontal /> */}

      <Split
        style={{ display: "flex", height: "calc(100vh - 32px)" }}
        sizes={[100, 100]}
        gutterSize={8}
        direction="horizontal"
      >
        <div className="split">
          <Split
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
            sizes={[100, 100]}
            gutterSize={8}
            direction="vertical"
          >
            <Split
              style={{ display: "flex", height: "calc(100vh - 32px)" }}
              sizes={[50, 50]}
              gutterSize={8}
              direction="horizontal"
            >
              <div className="split">
                <Split
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                  sizes={[100, 100]}
                  gutterSize={8}
                  direction="vertical"
                >
                  <div className="split content">1</div>
                </Split>
              </div>
              <div className="split">
                <Split
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                  sizes={[100, 100]}
                  gutterSize={8}
                  direction="vertical"
                >
                  <div className="split content">2</div>
                </Split>
              </div>
            </Split>

            <Split
              style={{ display: "flex", height: "calc(100vh - 32px)" }}
              sizes={[50, 50]}
              gutterSize={8}
              direction="horizontal"
            >
              <div className="split">
                <Split
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                  sizes={[100, 100]}
                  gutterSize={8}
                  direction="vertical"
                >
                  <div className="split content">1</div>
                </Split>
              </div>
              <div className="split">
                <Split
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                  sizes={[100, 100]}
                  gutterSize={8}
                  direction="vertical"
                >
                  <div className="split content">2</div>
                </Split>
              </div>
            </Split>
          </Split>
        </div>
      </Split>
    </div>
  );
};

export default ResizeablePanel;
