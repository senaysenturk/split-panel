import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

const List = () => {
  const [showNewDataInputs, setShowNewDataInputs] = useState("none");
  const [data, setData] = useState({});
  const [list, setList] = useState([
    { id: "1", contract: "2019", offer: "100", data: "Satış" },
    { id: "2", contract: "2018", offer: "200", data: "Alış" },
  ]);
  const addData = () => {
    setList((prevList) => [...prevList, { ...data }]);
  };

  return (
    <>
      <table>
        <tbody>
          {list.map((element, index) => (
            <tr key={index}>
              <td>{element.id}</td>
              <td>{element.contract}</td>
              <td>{element.offer}</td>
              <td>{element.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={`${styles["new-data"]}`}>
        <div
          className={`${styles["inputs"]}`}
          style={{ display: showNewDataInputs }}
        >
          <input
            type="text"
            name="id"
            placeholder="no giriniz"
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                ...{ [event.target.name]: event.target.value },
              }))
            }
          />
          <input
            type="text"
            name="contract"
            placeholder="kontrat giriniz"
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                ...{ [event.target.name]: event.target.value },
              }))
            }
          />
          <input
            type="text"
            name="offer"
            placeholder="teklif giriniz"
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                ...{ [event.target.name]: event.target.value },
              }))
            }
          />
          <input
            type="text"
            name="data"
            placeholder="data giriniz"
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                ...{ [event.target.name]: event.target.value },
              }))
            }
          />
          <input
            type="button"
            value="Kaydet"
            onClick={addData}
            onChange={(event) =>
              setData((prevData) => ({
                ...prevData,
                ...{ [event.target.name]: event.target.value },
              }))
            }
          />
        </div>
        <input
          type="button"
          value="Yeni Ekle"
          onClick={() => setShowNewDataInputs("flex")}
        />
      </div>
    </>
  );
};

export default List;
