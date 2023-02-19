import React, { useState } from "react";
import Split from "react-split";
import List from "../../shared/list/List";
import Table from "../../shared/table/Table";
import LocationInfo from "../location-info/LocationInfo";
import "./style.scss";
const ResizeablePanel = () => {
  const [sizes, setSizes] = useState([100, 100, 100, 100]); // initialize sizes state with default values

  const handleOnChange = (newSizes) => {
    setSizes(newSizes);
  };
  return (
    <>
      <Split
        style={{ display: "flex", height: "calc(100vh - 100px)" }}
        sizes={[100, 100]}
        gutterSize={10}
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
            gutterSize={10}
            direction="vertical"
            onChange={handleOnChange}
          >
            <Split
              style={{ display: "flex", height: "calc(100vh - 32px)" }}
              sizes={[70, 30]}
              gutterSize={10}
              direction="horizontal"
              onChange={handleOnChange}
            >
              <div className="split">
                <Split
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                  sizes={[100, 100]}
                  gutterSize={10}
                  direction="vertical"
                  onChange={handleOnChange}
                >
                  <div className="split content">
                    <Table />
                  </div>
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
                  gutterSize={10}
                  direction="vertical"
                >
                  <div className="split content">
                    <LocationInfo />
                  </div>
                </Split>
              </div>
            </Split>

            <Split
              style={{ display: "flex", height: "calc(100vh - 32px)" }}
              sizes={[60, 40]}
              gutterSize={10}
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
                  gutterSize={10}
                  direction="vertical"
                >
                  <div className="split content">
                    <List />
                  </div>
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
                  gutterSize={10}
                  direction="vertical"
                >
                  <div className="split content">**Lorem Ipsum</div>
                </Split>
              </div>
            </Split>
          </Split>
        </div>
      </Split>
    </>
  );
};

export default ResizeablePanel;
