import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

const AllGoals: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>AllGoals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {" "}
        <h2>This works! - AllGoals page</h2>
      </IonContent>
    </IonPage>
  );
};
export default AllGoals;