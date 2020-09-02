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
import { useParams, useLocation } from "react-router-dom";
import { COURSE_DATA } from "./Courses";

const CourseGoals: React.FC = () => {
  //we are using useParams here. First set the rout in the router of this component to /:id
  //where id is the query string. Then go to the file you want to make use of that query
  //and import useParams and extract the required value like below.
  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  //USING HISTORY OBJECT
  // const location = useLocation<{name: string}>().state.name;

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* slot is a positioning property in ionic react */}
          <IonButtons slot="start">
            <IonBackButton defaultHref="/courses/list" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse?.title : "NO COURSE FOUND"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent> This works - courses goals page</IonContent>
    </IonPage>
  );
};
export default CourseGoals;
