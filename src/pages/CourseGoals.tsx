import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

const CourseGoals: React.FC = () => {
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
