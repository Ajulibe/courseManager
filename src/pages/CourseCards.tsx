import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";

const CourseCards: React.FC<{
  courseTitle: string;
  courseEnrolled: string;
  courseID: string;
}> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.courseTitle}</IonCardTitle>
        <IonCardSubtitle>Enrolled on {props.courseEnrolled}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <div className="ion-text-right">
          <IonButton
            fill="clear"
            color="secondary"
            routerLink={`/courses/${props.courseID}`}
          >
            {" "}
            VIEW COURSE GOALS
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default CourseCards;
