import React, { Fragment, useState } from "react";
import styles from "./style.module.scss";

const MenuItem = ({ icon, options, setSelectedOptions }) => {
  const handleSetChecked = (event) => {
    setSelectedOptions((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.checked },
    }));
  };
  return (
    <div className={`${styles["dropdown"]}`}>
      {icon}
      {options.length > 0 && (
        <div className={`${styles["dropdown-content"]}`}>
          {options.map((option, index) => (
            <div className={`${styles["menu-item"]}`} key={index}>
              <input
                type="checkbox"
                name={option}
                id={option}
                defaultChecked
                onChange={handleSetChecked}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
