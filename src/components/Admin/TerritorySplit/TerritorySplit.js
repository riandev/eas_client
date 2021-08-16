import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TerritorySplit = () => {
  const [splitData, setSplitData] = useState([]);
  console.log(splitData);
  useEffect(() => {
    fetch("http://localhost:5004/splitReport")
      .then((res) => res.json())
      .then((data) => setSplitData(data));
  }, []);
  const handleSplit = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      {splitData.map((d) => (
        <Link
          to={{
            pathname: `/admin/split-data/`,
            state: {
              instructor_id: ["abc", "bcd"],
            },
          }}
        >
          {d.userId}
        </Link>
      ))}
    </div>
  );
};

export default TerritorySplit;
