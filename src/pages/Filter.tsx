import React, { useContext } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonItem,
  IonList,
  IonLabel,
  IonToggle,
} from "@ionic/react";

// import { COURSE_DATA } from "./Courses";
import CoursesContext from "../data/course-context";

const Filter: React.FC = () => {
  const coursesCtx = useContext(CoursesContext);

  const courseFilterChangeHandler = (event: CustomEvent) => {
    //getting the value off the event
    //event.detail contains different properties we can use
    console.log(event);
    coursesCtx.changeCourseFilter(event.detail.value, event.detail.checked);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {coursesCtx.courses.map((course) => (
            <IonItem key={course.id}>
              <IonLabel>{course.title}</IonLabel>
              <IonToggle
                checked={course.included}
                value={course.id}
                onIonChange={courseFilterChangeHandler}
              />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Filter;
