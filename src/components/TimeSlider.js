import React from "react";
import { util } from "./util";
function TimeSlider({ proffesor, updateTime }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleOnClick = (index, freeTime) => {
    setActiveIndex(index);
    console.log(index + " " + freeTime);
    updateTime(freeTime);
    // remove the curly braces
  };
  const cards = util[proffesor].time.map((freeTime, index) => {
    return (
      <div className="timeBlock">
        <a
          key={index}
          href="#"
          onClick={() => handleOnClick(index, freeTime)} // pass the index
          className={activeIndex == index ? "timeLinkChecked" : "timeLink"}
        >
          {freeTime}
        </a>
      </div>
    );
  });
  return <div className="scrollTime">{cards}</div>;
}

export default TimeSlider;
