import React from "react";
import {
  IonModal,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";

const EditModal: React.FC<{
  cancelEditGoalHandler: () => void;
  show: boolean;
  editedGoal: { id: string; text: string } | null;
}> = (props) => {
  return (
    <>
      {/* MODAL */}
      <IonModal isOpen={props.show} cssClass="my-custom-class" swipeToClose>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{props.editedGoal ? "Edited" : "Add"}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Goal</IonLabel>
                  <IonInput
                    type="text"
                    value={props.editedGoal?.text}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol>
                <IonButton
                  color="dark"
                  fill="clear"
                  onClick={props.cancelEditGoalHandler}
                >
                  Cancel
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton color="secondary" expand="block">
                  Save
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </>
  );
};

export default EditModal;
