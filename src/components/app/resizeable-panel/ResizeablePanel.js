import React, { useEffect, useState } from "react";
import SplitPane from "react-split";
import List from "../../shared/list/List";
import Table from "../../shared/table/Table";
import LocationInfo from "../location-info/LocationInfo";
import "./style.scss";
const ResizeablePanel = () => {
  const [pane1Size, setPane1Size] = useState([]);
  const [pane2Size, setPane2Size] = useState([]);
  const [pane3Size, setPane3Size] = useState([]);

  const handlePane1Size = (newSize) => {
    console.log(newSize);
    setPane1Size(newSize);
  };

  const handlePane2Size = (newSize) => {
    console.log(newSize);
    setPane2Size(newSize);
  };

  const handlePane3Size = (newSize) => {
    console.log(newSize);
    setPane3Size(newSize);
  };
  useEffect(() => {
    localStorage.setItem("panel1Size", pane1Size);
    localStorage.setItem("panel2Size", pane2Size);
    localStorage.setItem("panel3Size", pane3Size);
  }, [pane1Size, pane2Size, pane3Size]);
  return (
    <>
      <div
        className="split"
        style={{ width: "100vw", height: "calc(100vh - 100px)" }}
      >
        <SplitPane
          id="1"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
          sizes={[50, 50]}
          gutterSize={10}
          direction="vertical"
          onDragEnd={handlePane1Size}
        >
          <SplitPane
            id="2"
            style={{ display: "flex", height: "calc(100vh - 32px)" }}
            sizes={[70, 30]}
            gutterSize={10}
            direction="horizontal"
            onDragEnd={handlePane2Size}
          >
            <div className="SplitPane">
              <SplitPane
                id="3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                sizes={[100, 100]}
                gutterSize={10}
                direction="vertical"
              >
                <div className="SplitPane content">
                  <Table />
                </div>
              </SplitPane>
            </div>
            <div className="SplitPane">
              <SplitPane
                id="4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                sizes={[100, 100]}
                gutterSize={10}
                direction="vertical"
              >
                <div className="SplitPane content">
                  <LocationInfo
                    pane1Size={pane1Size}
                    pane2Size={pane2Size}
                    pane3Size={pane3Size}
                  />
                </div>
              </SplitPane>
            </div>
          </SplitPane>

          <SplitPane
            id="5"
            style={{ display: "flex", height: "calc(100vh - 32px)" }}
            sizes={[60, 40]}
            gutterSize={10}
            direction="horizontal"
            onDragEnd={handlePane3Size}
          >
            <div className="SplitPane">
              <SplitPane
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                sizes={[100, 100]} // use width state variable
                gutterSize={10}
                direction="vertical"
              >
                <div className="SplitPane content">
                  <List />
                </div>
              </SplitPane>
            </div>
            <div className="SplitPane">
              <SplitPane
                id="6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                sizes={[100, 100]} // use width state variable
                gutterSize={10}
                direction="vertical"
              >
                <div className="SplitPane content">**Lorem Ipsum</div>
              </SplitPane>
            </div>
          </SplitPane>
        </SplitPane>
      </div>
    </>
  );
};

export default ResizeablePanel;
