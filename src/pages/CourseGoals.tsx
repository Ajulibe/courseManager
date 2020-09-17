import React, { useState, useRef, useContext } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
  IonList,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
  isPlatform,
  IonAlert,
  IonToast,
} from "@ionic/react";
import { useParams, useLocation } from "react-router-dom";
import { COURSE_DATA } from "./Courses";
import { addOutline, add } from "ionicons/icons";

import EditModal from "./EditModal";
import EditableGoalSliding from "./EditableGoalSliding";
import { db } from "../firebase/FirebaseAuth";
import CoursesContext from "../data/course-context";

const CourseGoals: React.FC = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  // const [showToast1, setShowToast1] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<any>();
  const [toastmessage, setToastMessage] = useState<string>("");

  const coursesCtx = useContext(CoursesContext);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  //refs are also used as data storages. They dont loose their value when the component
  //re-renders
  const selectedGoalidRef = useRef<string | null>(null);

  //we are using useParams here. First set the rout in the router of this component to /:id
  //where id is the query string. Then go to the file you want to make use of that query
  //and import useParams and extract the required value like below.
  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  //USING HISTORY OBJECT
  // const location = useLocation<{name: string}>().state.name;

  // const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);
  const selectedCourse = coursesCtx.courses.find(
    (c) => c.id === selectedCourseId
  );

  const startDeleteItemHandler = (goalId: string, event: React.MouseEvent) => {
    setToastMessage("");
    event.stopPropagation();
    //delete from firebase
    //make use of the ID as passed using the params above
    //the id here is the selectedCourseId above
    // db.collection("courses").doc("id").delete();

    //remember to set the type to a string or null because we are using this as a
    //data storage
    selectedGoalidRef.current = goalId;
    setShowAlert1(true);

    console.log("Agreed to Delete...");
  };

  const deleteGoalHandler = () => {
    setShowAlert1(true);
    coursesCtx.deleteGoal(selectedCourseId, selectedGoalidRef.current!);
    // setShowToast1(true);
    setToastMessage("Goal has been deleted");
  };

  const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("edited...");
    const goal = selectedCourse?.goals.find((g) => g.id === goalId);
    //? means this will not be called if it has bot be assigned to anything
    slidingOptionsRef.current?.closeOpened();
    if (!goal) {
      return;
    }
    setShowModal(true);
    setSelectedGoal(goal);
  };

  const startAddGoalHandler = () => {
    setShowModal(true);
    console.log("ADDING GOAL..");
  };

  const cancelEditGoalHandler = () => {
    setShowModal(false);
    setSelectedGoal(null);
  };

  const saveGoalHandler = (text: string) => {
    if (selectedGoal) {
      coursesCtx.updateGoal(selectedCourseId, selectedGoal.id, text);
    } else {
      coursesCtx.addGoal(selectedCourseId, text);
    }

    setShowModal(false);
  };

  return (
    <>
      {/* MAIN PAGE */}
      <EditModal
        editedGoal={selectedGoal}
        show={showModal}
        cancelEditGoalHandler={cancelEditGoalHandler}
        onSave={saveGoalHandler}
      />
      {/* ALERT  */}
      <IonAlert
        animated
        translucent
        isOpen={showAlert1}
        onDidDismiss={() => {
          setShowAlert1(false);
        }}
        cssClass="my-custom-class"
        header={"Delete"}
        subHeader={"Remove goals"}
        message={"Are you sure you want to delete this?"}
        buttons={[
          {
            text: "No",
            role: "cancel",
            cssClass: "primary",
            handler: (blah) => {
              console.log("Confirm Cancel: blah");
            },
          },
          {
            text: "Yes",
            cssClass: "secondary",
            handler: deleteGoalHandler,
          },
        ]}
      />
      {/* TOAST MESSAGE */}
      <IonToast
        color="secondary"
        isOpen={!!toastmessage}
        message={toastmessage}
        duration={1000}
      />
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
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddGoalHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {selectedCourse && (
            <IonList lines="full">
              {selectedCourse?.goals.map((goal) => (
                //FOR CLICKING
                // <IonItem key={goal.id} button onClick={deleteItemHandler}>
                //   {" "}
                //   <IonLabel>{goal.text}</IonLabel>
                //   <IonButton
                //     fill="clear"
                //     color="dark"
                //     slot="end"
                //     onClick={startEditGoalHandler}
                //   >
                //     <IonIcon slot="icon-only" icon={create} color="secondary" />
                //   </IonButton>
                // </IonItem>
                <EditableGoalSliding
                  key={goal.id}
                  startDeleteItemHandler={startDeleteItemHandler.bind(
                    null,
                    goal.id
                  )}
                  slidingOptionsRef={slidingOptionsRef}
                  goalText={goal.text}
                  startEditGoalHandler={startEditGoalHandler.bind(
                    null,
                    goal.id
                  )}
                />
              ))}
            </IonList>
          )}

          {/* FLOATING BUTTON */}
          {isPlatform("android") && (
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton onClick={startAddGoalHandler} color="secondary">
                <IonIcon icon={add} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};
export default CourseGoals;
