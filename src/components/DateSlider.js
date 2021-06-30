import React from "react";
import { IonCard, IonCardTitle } from "@ionic/react";
import { util } from "./util";

function DateSlider({ proffesor, updateDate }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleOnClick = (index, date) => {
    setActiveIndex(index);
    console.log(index + " " + date);
    updateDate(date);
    // remove the curly braces
  };
  const cards = util[proffesor].freeDate.map((date, index) => {
    return (
      <IonCard
        key={index}
        onClick={() => handleOnClick(index, date.date)} // pass the index
        className={activeIndex == index ? "cardDateChecked" : "cardDate"}
      >
        <IonCardTitle
          className={activeIndex == index ? "titleDayChecked" : "titleDay"}
        >
          {date.dateName}
        </IonCardTitle>
        <br></br>
        <IonCardTitle
          className={activeIndex == index ? "titleDateChecked" : "titleDate"}
        >
          {date.date}
        </IonCardTitle>
      </IonCard>
    );
  });

  return <div className="scrollData">{cards}</div>;
}

export default DateSlider;
