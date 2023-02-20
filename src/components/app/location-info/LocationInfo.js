import React from "react";
import { connect } from "react-redux";
import styles from "./style.module.scss";

const LocationInfo = (props) => {
  return (
    <div className={`${styles["location-info"]}`}>
      <h5>Ayarlar </h5>
      <span>
        Yatay Pencere Değerleri:{" "}
        {props.panel1.height > 0 &&
          `%${props.panel1.height} %${props.panel1.width}`}
      </span>
      <span>
        Üst Dikey Pencere Değerleri{" "}
        {props.panel2.height > 0 &&
          `%${props.panel2.height} %${props.panel2.width}`}
      </span>
      <span>
        Alt Dikey Pencere Değerleri{" "}
        {props.panel3.height > 0 &&
          `%${props.panel3.height} %${props.panel3.width}`}
      </span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(LocationInfo);
