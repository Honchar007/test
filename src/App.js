import man from "./images/man.png";
import woman from "./images/woman.png";

import "./App.css";
import "@ionic/react/css/ionic.bundle.css";
import { IonSlides, IonSlide, IonContent } from "@ionic/react";
import DatePicker from "./components/DatePicker";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import DateSlider from "./components/DateSlider";
import TimeSlider from "./components/TimeSlider";
import CardReg from "./components/CardReg";
import React from "react";
import { util } from "./components/util";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
  shadowOffset: 20,
  spaceBetween: 0,
};

class App extends React.Component {
  state = {
    index: 1,
    date: util[1].freeDate[0].date,
    time: util[1].time[0],
  };

  add = (value) => {
    this.setState({
      index: value,
    });
  };
  render() {
    const getIndex = async (event) => {
      let index = 0;
      await event.target.getActiveIndex().then((value) => (index = value));
      this.setState({
        index: index,
        date: util[index].freeDate[0].date,
        time: util[index].time[0],
      });
      console.log(this.state);
    };
    const getTime = async (currTime) => {
      this.setState({ time: currTime });
      console.log(this.state);
    };
    const getDate = async (currDate) => {
      this.setState({ date: currDate });
      console.log(this.state);
    };
    return (
      <div className="App">
        <IonPage>
          <IonContent>
            <IonSlides
              options={slideOpts}
              onIonSlideDidChange={(event) => getIndex(event)}
            >
              <IonSlide>
                <IonCard className="cardBlock">
                  <IonCardHeader>
                    <IonCardTitle>Andrey</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          <img className="avatar" src={man} alt="man" />
                        </IonCol>
                        <IonCol className="ion-align-self-center">
                          <div className="durationConsultText">
                            Длительность консультации
                          </div>
                          <IonCardTitle className="durationConsultMinutes">
                            50 минут
                          </IonCardTitle>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonSlide>
              <IonSlide>
                <IonCard className="cardBlock">
                  <IonCardHeader>
                    <IonCardTitle>Елена Шимановская</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          <img className="avatar" src={woman} alt="man" />
                        </IonCol>
                        <IonCol className="ion-align-self-center">
                          <div className="durationConsultText">
                            Длительность консультации
                          </div>
                          <IonCardTitle className="durationConsultMinutes">
                            50 минут
                          </IonCardTitle>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            </IonSlides>

            <DatePicker></DatePicker>
            <DateSlider
              updateDate={getDate}
              proffesor={this.state.index}
            ></DateSlider>
            <div className="durationConsultText">Свободное время</div>
            <TimeSlider
              updateTime={getTime}
              proffesor={this.state.index}
            ></TimeSlider>
            <CardReg time={this.state.time} date={this.state.date}></CardReg>
          </IonContent>
        </IonPage>
      </div>
    );
  }
}

export default App;
