import React from "react";
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, inconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${inconName} icon`}></i>
      <i className={`icon-top massive`}>It is {props.date}</i>

      <h1>{text}</h1>
      <i className={`icon-right massive ${inconName} icon`}></i>
    </div>
  );
};

const seasonConfig = {
  Summer: {
    text: "Let is the beach",
    inconName: "sun",
  },
  Winter: {
    text: "Burr, It is chilly",
    inconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

export default SeasonDisplay;
