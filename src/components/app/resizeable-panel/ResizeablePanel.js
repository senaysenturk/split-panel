import React, { useEffect, useState } from "react";
import SplitPane from "react-split";
import List from "../../shared/list/List";
import Table from "../../shared/table/Table";
import LocationInfo from "../location-info/LocationInfo";
import "./style.scss";

import { updatePanel1 } from "../../../actions/panel1-actions";
import { updatePanel2 } from "../../../actions/panel2-actions";
import { updatePanel3 } from "../../../actions/panel3-actions";
import { connect } from "react-redux";
import { useDashboard } from "../../../contexts/dashboardContext";

const ResizeablePanel = (props) => {
  const [pane1Size, setPane1Size] = useState(() => {
    return localStorage.getItem("pane1Size")?.split(",") || [70, 30];
  });
  const [pane2Size, setPane2Size] = useState(() => {
    return localStorage.getItem("pane1Size")?.split(",") || [60, 40];
  });
  const [pane3Size, setPane3Size] = useState(() => {
    return localStorage.getItem("pane1Size")?.split(",") || [50, 50];
  });

  const handlePane1Size = (newSize) => {
    // console.log(newSize);
    // setPane1Size(newSize);
    setPane1Size(newSize);
    localStorage.setItem("pane1Size", JSON.stringify(newSize));
    setIsSave(true);
    props.handlePane1Size(newSize);
  };

  const handlePane2Size = (newSize) => {
    // console.log(newSize);
    // setPane2Size(newSize);
    setPane2Size(newSize);
    localStorage.setItem("pane2Size", JSON.stringify(newSize));
    setIsSave(true);
    props.handlePane2Size(newSize);
  };

  const handlePane3Size = (newSize) => {
    // console.log(newSize);
    // setPane3Size(newSize);
    localStorage.setItem("pane3Size", JSON.stringify(newSize));
    setPane3Size(newSize);
    setIsSave(true);
    props.handlePane3Size(newSize);
  };

  const { setIsSave } = useDashboard();

  useEffect(() => {
    const savedPane1Size = localStorage.getItem("pane1Size");
    if (savedPane1Size) {
      setPane1Size(JSON.parse(savedPane1Size));
    }
    const savedPane2Size = localStorage.getItem("pane2Size");
    if (savedPane2Size) {
      setPane2Size(JSON.parse(savedPane2Size));
    }
    const savedPane3Size = localStorage.getItem("pane3Size");

    if (savedPane3Size) {
      setPane3Size(JSON.parse(savedPane3Size));
    }

    // console.log(pane1Size, pane2Size, pane3Size);
  }, []);

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
          sizes={pane1Size}
          gutterSize={10}
          direction="vertical"
          onDragEnd={handlePane1Size}
        >
          <SplitPane
            id="2"
            style={{ display: "flex", height: "calc(100vh - 32px)" }}
            sizes={pane2Size}
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
                  // pane1Size={pane1Size}
                  // pane2Size={pane2Size}
                  // pane3Size={pane3Size}
                  />
                </div>
              </SplitPane>
            </div>
          </SplitPane>

          <SplitPane
            id="5"
            style={{ display: "flex", height: "calc(100vh - 32px)" }}
            sizes={pane3Size}
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
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = {
  handlePane1Size: updatePanel1,
  handlePane2Size: updatePanel2,
  handlePane3Size: updatePanel3,
};
export default connect(mapStateToProps, mapDispatchToProps)(ResizeablePanel);
