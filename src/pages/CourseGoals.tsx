import React, { useEffect } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useLocation } from "react-router-dom";

const CourseGoals: React.FC = () => {
  //   const location = useLocation();

  //   useEffect(() => {
  //     console.log(location.state);
  //   }, [location]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* slot is a positioning property in ionic react */}
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Courses Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent> This works - courses goals page</IonContent>
    </IonPage>
  );
};
export default CourseGoals;
