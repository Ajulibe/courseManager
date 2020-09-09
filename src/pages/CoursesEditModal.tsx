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
  IonDatetime,
} from "@ionic/react";

const CoursesEditModal: React.FC<{
  show: boolean;
  cancelEditCoursesHandler: () => void;
}> = (props) => {
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
                  <IonInput type="text" value=""></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel>Enrollment Date</IonLabel>
                  <IonDatetime displayFormat="MM DD YY" />
                </IonItem>
              </IonCol>
            </IonRow>
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

export default CoursesEditModal;
