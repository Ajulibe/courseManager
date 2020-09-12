import React from "react";
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonSlides,
  IonSlide,
  IonButton,
  IonText,
} from "@ionic/react";
import "./LoginStyle.css";
import image1 from "./image1.svg";
import image2 from "./image2.svg";
import image3 from "./image3.svg";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Intro: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="back">
        <IonGrid className="ion-margin-top back">
          <IonRow className="headerColor">
            <IonCol className="ion-text-center">
              <IonText>
                <h2 className="headerStyle">COURSES TRACKER</h2>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="slider">
            <IonCol>
              <IonSlides pager={true} options={slideOpts}>
                <IonSlide>
                  <img src={image1} alt="image1" style={{ maxWidth: "80%" }} />
                </IonSlide>
                <IonSlide>
                  <img src={image2} alt="image2" style={{ maxWidth: "80%" }} />
                </IonSlide>
                <IonSlide>
                  <img
                    src={image3}
                    alt="image3"
                    style={{ maxWidth: "80%", marginBottom: "20%" }}
                  />
                </IonSlide>
              </IonSlides>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton expand="block" type="submit" routerLink="/login">
                <p className="txt">Login </p>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton
                expand="block"
                type="submit"
                routerLink="/Register"
                fill="outline"
              >
                <p className="txtStyle">Register </p>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Intro;
