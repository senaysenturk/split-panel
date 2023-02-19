import React from "react";
import styles from "./style.module.scss";

const LocationInfo = ({ pane1Size, pane2Size, pane3Size }) => {
  return (
    <div className={`${styles["location-info"]}`}>
      <h5>Ayarlar </h5>
      <span>
        Yatay Pencere Değerleri: %{pane1Size[0]} %{pane1Size[1]}
      </span>
      <span>
        Üst Dikey Pencere Değerleri %{pane2Size[0]} %{pane2Size[1]}
      </span>
      <span>
        Alt Dikey Pencere Değerleri %{pane3Size[0]} %{pane3Size[1]}
      </span>
    </div>
  );
};

export default LocationInfo;
