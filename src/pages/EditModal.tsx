import React, { useRef, useState } from "react";
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
  IonText,
} from "@ionic/react";

const EditModal: React.FC<{
  cancelEditGoalHandler: () => void;
  onSave: (goalText: string) => void;
  show: boolean;
  editedGoal: { id: string; text: string } | null;
}> = (props) => {
  const [error, setError] = useState<string>("");

  const textRef = useRef<HTMLIonInputElement>(null);

  const saveHandler = () => {
    const enteredText = textRef.current?.value;

    if (!enteredText || enteredText.toString().trim().length === 0) {
      setError("Please enter a valid text!");
      return;
    }

    props.onSave(enteredText.toString());
  };
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
                    ref={textRef}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            {error && (
              <IonRow>
                <IonCol>
                  <IonText color="danger">
                    <p>{error}</p>
                  </IonText>
                </IonCol>
              </IonRow>
            )}
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
                <IonButton
                  color="secondary"
                  expand="block"
                  onClick={saveHandler}
                >
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
