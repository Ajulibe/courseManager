import React, { useState, useEffect } from "react";
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
import { add, addOutline, returnDownBackOutline } from "ionicons/icons";
import CoursesEditModal from "./CoursesEditModal";
import CourseCards from "./CourseCards";
import { db } from "../firebase/FirebaseAuth";
import firebase, { firestore } from "firebase";

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
  const [courses, setCourses] = useState<string>("");

  //firebaseConfig
  useEffect(() => {
    //GET REQUEST
    // this snapshot constanly watches for any changes to our collection
    // and updates us.
    db.collection("courses").onSnapshot((snapshot) => {
      //database object with ID
      // snapshot gets called anytie the results oof the query changes
      //over time
      console.log(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });

    // ORDERING BY TIMESTAMP
    //remember that timestamp is a field in the collection
    // db.collection("courses")
    //   .orderBy("timestamp", "desc")
    //   .onSnapshot((snapshot) => {
    //     //database object with ID
    //     // console.log(snapshot);
    //     console.log(
    //       snapshot.docs.map((doc) => {
    //         return { ...doc.data(), id: doc.id };
    //       })
    //     );
    //   });

    //Remove the listener
    // return () => {
    //   unsubscribe();
    // };

    //DELETE from firebase
    //make use of the ID as passed using the params above
    //the id here is the selectedCourseId above
    db.collection("courses").doc("id").delete();
  }, []);

  const startAddCoursesHandler = () => {
    setShow(true);
  };

  const cancelAddCoursesHandler = () => {
    setShow(false);
  };

  const courseAddHandler = (title: string, date: Date) => {
    //POST REQUEST IN FIREBASE
    db.collection("courses")
      .add({
        title: "aka",
        date: "20/12/19",
        timestamp: firestore.FieldValue.serverTimestamp(),
      })
      .then((res) => {
        // console.log(res.id);
        setShow(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
