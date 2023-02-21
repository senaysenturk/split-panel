import React, { useState } from "react";
import { useDashboard } from "../../../contexts/dashboardContext";
import styles from "./style.module.scss";

const Header = () => {
  const { isSave } = useDashboard();
  const name = "Ayhan Yanbul";
  // console.log("isSave", isSave);
  return (
    <header className={`${styles["header"]}`}>
      <div className={`${styles["logo"]}`}>
        <a>
          <img
            src="https://www.epias.com.tr/wp-content/themes/epias/images/epias-beyaz.svg"
            alt="Epiaş"
          />
        </a>
      </div>
      <nav className={`${styles["menu"]}`}>
        <ul>
          <li>
            <a>
              {isSave ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                </svg>
              )}
              Çalışma Alanı
            </a>
          </li>
          <li>
            <a
              data-letters={`${name
                .split(" ")[0]
                .charAt(0)
                .toLocaleUpperCase()}${name
                .split(" ")[1]
                .charAt(0)
                .toLocaleUpperCase()}`}
            >
              {name}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
