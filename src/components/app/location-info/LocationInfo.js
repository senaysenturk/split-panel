import React from "react";
import styles from "./style.module.scss";

const LocationInfo = ({ contentSize }) => {
  return (
    <div className={`${styles["location-info"]}`}>
      <h5>Ayarlar </h5>
      <span>Yatay Pencere Değerleri</span>
      <span>Üst Dikey Pencere Değerleri</span>
      <span>Alt Dikey Pencere Değerleri</span>
    </div>
  );
};

export default LocationInfo;
