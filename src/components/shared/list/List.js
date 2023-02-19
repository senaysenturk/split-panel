import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

const List = () => {
  const [showNewDataInputs, setShowNewDataInputs] = useState("none");
  const [data, setData] = useState({});
  const [list, setList] = useState([
    { id: "", contract: "2019", offer: "100", data: "Satış" },
    { id: "", contract: "2018", offer: "200", data: "Alış" },
  ]);
  const addData = () => {
    console.log("data", data);
    console.log("list", list);
    setList((prevList) => [...prevList, { ...data }]);
  };

  return (
    <>
      <table>
        <tbody>
          {list.map((element, index) => (
            <tr key={index}>
              <td>{element.contract}</td>
              <td>{element.offer}</td>
              <td>{element.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className={`${styles["new-data"]}`}
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
    </>
  );
};

export default List;
