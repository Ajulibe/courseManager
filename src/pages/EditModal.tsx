import React, { useState } from "react";
import {
  IonModal,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButton,
} from "@ionic/react";

const EditModal: React.FC<{
  cancelEditGoalHandler: () => void;
  show: boolean;
}> = (props) => {
  return (
    <>
      {/* MODAL */}
      <IonModal isOpen={props.show} cssClass="my-custom-class" swipeToClose>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>This is modal content</p>
          <IonButton onClick={props.cancelEditGoalHandler}>
            Close Modal
          </IonButton>
          <IonButton>save</IonButton>
        </IonContent>
      </IonModal>
    </>
  );
};

export default EditModal;
