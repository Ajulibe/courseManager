import React, { useState } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
  isPlatform,
  IonAlert,
  IonToast,
} from "@ionic/react";
import { useParams, useLocation } from "react-router-dom";
import { COURSE_DATA } from "./Courses";
import { golfSharp, create, trash, addOutline, add } from "ionicons/icons";
import EditModal from "./EditModal";

const CourseGoals: React.FC = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showToast1, setShowToast1] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<any>();
  //we are using useParams here. First set the rout in the router of this component to /:id
  //where id is the query string. Then go to the file you want to make use of that query
  //and import useParams and extract the required value like below.
  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  //USING HISTORY OBJECT
  // const location = useLocation<{name: string}>().state.name;

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  const startDeleteItemHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowAlert1(true);

    console.log("Agreed to Delete...");
  };

  const deleteGoalHandler = () => {
    setShowAlert1(true);
    setShowToast1(true);
    console.log("Deleted...");
  };

  const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("edited...");
    const goal = selectedCourse?.goals.find((g) => g.id === goalId);
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

  return (
    <>
      {/* MAIN PAGE */}
      <EditModal
        editedGoal={selectedGoal}
        show={showModal}
        cancelEditGoalHandler={cancelEditGoalHandler}
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

                //FOR SWIPING
                <IonItemSliding key={goal.id}>
                  <IonItemOptions side="end">
                    {/* here we are binding these arguments to this function when the function is called */}
                    <IonItemOption
                      onClick={startEditGoalHandler.bind(null, goal.id)}
                    >
                      <IonIcon slot="icon-only" icon={create} />
                    </IonItemOption>
                  </IonItemOptions>
                  <IonItemOptions side="start">
                    <IonItemOption
                      color="danger"
                      onClick={startDeleteItemHandler}
                    >
                      {/* slot here makes sure that the icons are 
                    presented in the best possible way */}
                      <IonIcon slot="icon-only" icon={trash} />
                    </IonItemOption>
                  </IonItemOptions>
                  {/* ALERT  */}
                  <IonAlert
                    animated
                    translucent
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
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
                        handler: () => {
                          deleteGoalHandler();
                        },
                      },
                    ]}
                  />
                  {/* TOAST MESSAGE */}
                  <IonToast
                    color="secondary"
                    isOpen={showToast1}
                    onDidDismiss={() => setShowToast1(false)}
                    message="Goal has been deleted"
                    duration={1000}
                  />

                  <IonItem lines="full">
                    {" "}
                    <IonLabel>{goal.text}</IonLabel>
                  </IonItem>
                </IonItemSliding>
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
