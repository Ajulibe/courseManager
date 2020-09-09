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
  IonDatetime,
  IonText,
} from "@ionic/react";

const CoursesEditModal: React.FC<{
  show: boolean;
  cancelEditCoursesHandler: () => void;
  onSave: (title: string, date: Date) => void;
}> = (props) => {
  const [error, setError] = useState<string>("");

  const titleRef = useRef<HTMLIonInputElement>(null);
  const dateRef = useRef<HTMLIonDatetimeElement>(null);

  const saveHandler = () => {
    const enteredTitle = titleRef.current!.value;
    const selectedDate = dateRef.current!.value;

    if (
      !enteredTitle ||
      !selectedDate ||
      enteredTitle.toString().trim().length === 0 ||
      selectedDate.trim().length === 0
    ) {
      setError("Please enter a valid title and select a valid date");
      return;
    }

    setError("");
    props.onSave(enteredTitle.toString(), new Date(selectedDate));
  };

  return (
    <>
      {/* MODAL */}
      <IonModal isOpen={props.show} cssClass="my-custom-class" swipeToClose>
        <IonHeader>
          <IonToolbar>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Course Title</IonLabel>
                  <IonInput type="text" value="" ref={titleRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel>Enrollment Date</IonLabel>
                  <IonDatetime displayFormat="MM DD YY" ref={dateRef} />
                </IonItem>
              </IonCol>
            </IonRow>
            {error && (
              <IonRow className="ion-text-center">
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
                  onClick={props.cancelEditCoursesHandler}
                  color="dark"
                  fill="clear"
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

export default CoursesEditModal;
