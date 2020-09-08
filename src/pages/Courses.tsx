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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  isPlatform,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButtons,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { add, addOutline } from "ionicons/icons";
import CoursesEditModal from "./CoursesEditModal";

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

  const EditCoursesHandler = () => {
    setShow(true);
  };

  const cancelEditCoursesHandler = () => {
    setShow(false);
  };

  return (
    <IonPage>
      <CoursesEditModal
        show={show}
        cancelEditCoursesHandler={cancelEditCoursesHandler}
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
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{course.title}</IonCardTitle>
                    <IonCardSubtitle>
                      Enrolled on{" "}
                      {course.enrolled.toLocaleDateString("en-US", {
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
                        routerLink={`/courses/${course.id}`}
                      >
                        {" "}
                        VIEW COURSE GOALS
                      </IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
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
            <IonFabButton color="secondary" onClick={EditCoursesHandler}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};
export default Courses;
