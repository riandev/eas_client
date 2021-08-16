import React from "react";

const SplitData = (props) => {
  return <div>{props.history.location.state.instructor_id}</div>;
};

export default SplitData;
