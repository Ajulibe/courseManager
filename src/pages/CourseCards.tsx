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
  dateEnrolled: Date;
  courseID: string;
}> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.courseTitle}</IonCardTitle>
        <IonCardSubtitle>
          Enrolled on{" "}
          {props.dateEnrolled.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </IonCardSubtitle>
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
