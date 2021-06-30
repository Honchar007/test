import "@ionic/react/css/ionic.bundle.css";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import disableIcon from "../images/disable.svg";
import calendarIcon from "../images/calendar.svg";

function DatePicker() {
  return (
    <div className="datePickerMain">
      <IonGrid>
        <IonRow className="textAccessDate">
          <IonCol className="ion-text-start">Возможная дата</IonCol>
          <IonCol className="ion-text-end">
            <img className="disableIco" src={disableIcon} alt="disableIcon" />
            <img
              className="calendarIco"
              src={calendarIcon}
              alt="calendarIcon"
            />
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
}
export default DatePicker;
