import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TerritorySplit = () => {
  const [splitData, setSplitData] = useState([]);
  console.log(splitData);
  useEffect(() => {
    fetch("http://192.168.10.11:5004/splitReport")
      .then((res) => res.json())
      .then((data) => setSplitData(data));
  }, []);
  //   const handleSplit = (e) => {
  //     console.log(e.target.value);
  //   };
  return (
    <div>
      {splitData.map((d) => (
        <Link
          target={"_blank"}
          onClick={() =>
            localStorage.setItem("splitData", JSON.stringify(d.consumers))
          }
          to="/admin/split-data"
        >
          <li>{d.userId}</li>
        </Link>
      ))}
    </div>
  );
};

export default TerritorySplit;
