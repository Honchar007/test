import {
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";

function CardReg({ time, date }) {
  return (
    <div>
      <IonCard>
        <IonCardContent>
          <IonGrid>
            <IonRow>
              <IonCol className="columnDivider">
                <div className="durationConsultText">Дата</div>
                <IonCardTitle className="durationConsultMinutes">
                  {date} мая
                </IonCardTitle>
              </IonCol>
              <IonCol className="ion-align-self-center">
                <div className="durationConsultText">Время</div>
                <IonCardTitle className="durationConsultMinutes">
                  {time}
                </IonCardTitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  className="buttonReg"
                  color="secondary"
                  expand="block"
                >
                  ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </div>
  );
}

export default CardReg;
