import React, { useState } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  isPlatform,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButtons,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { add, addOutline } from "ionicons/icons";
import CoursesEditModal from "./CoursesEditModal";
import CourseCards from "./CourseCards";

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic + React - The practical Guide",
    enrolled: new Date("03/22/2019"),
    goals: [
      {
        id: "c1g1",
        text: "Finish the Course!",
      },
      {
        id: "c1g2",
        text: "Learn A lot",
      },
    ],
  },
  {
    id: "c2",
    title: "React.js - The Complete Guide",
    enrolled: new Date("15/02/2019"),
    goals: [
      {
        id: "c2g1",
        text: "Finish the Course!",
      },
      {
        id: "c2g2",
        text: "Learn A lot",
      },
    ],
  },
  {
    id: "c3",
    title: "Javascript - The Complete Guide",
    enrolled: new Date("10/17/2020"),
    goals: [
      {
        id: "c3g1",
        text: "Finish the Course!",
      },
      {
        id: "c3g2",
        text: "Learn A lot",
      },
    ],
  },
];

const Courses: React.FC = (props) => {
  const history = useHistory();
  const [show, setShow] = useState<boolean>(false);

  // const changePageHandler = () => {
  //   history.push({
  //     pathname: "/course-goals",
  //     state: "akachukwu",
  //   });
  // };

  const startAddCoursesHandler = () => {
    setShow(true);
  };

  const cancelAddCoursesHandler = () => {
    setShow(false);
  };

  const courseAddHandler = (title: string, date: Date) => {};

  return (
    <IonPage>
      <CoursesEditModal
        show={show}
        cancelEditCoursesHandler={cancelAddCoursesHandler}
        onSave={courseAddHandler}
      />
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
          {!isPlatform("android") && (
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={addOutline} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map((course) => (
            <IonRow key={course.id}>
              <IonCol size-md="4" offset-md="4">
                <CourseCards
                  courseTitle={course.title}
                  dateEnrolled={course.enrolled}
                  courseID={course.id}
                />
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
        <div className="ion-text-center">
          {/* <IonButton routerLink="/course-goals">To Course Goals</IonButton> */}
          {/* <IonButton onClick={changePageHandler}>To Course Goals</IonButton> */}
        </div>
        {/* FLOATING BUTTON */}
        {isPlatform("android") && (
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="secondary" onClick={startAddCoursesHandler}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};
export default Courses;
