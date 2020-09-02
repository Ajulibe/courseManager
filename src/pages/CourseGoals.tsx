import React from "react";
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
} from "@ionic/react";
import { useParams, useLocation } from "react-router-dom";
import { COURSE_DATA } from "./Courses";
import { golfSharp, create, trash } from "ionicons/icons";

const CourseGoals: React.FC = () => {
  //we are using useParams here. First set the rout in the router of this component to /:id
  //where id is the query string. Then go to the file you want to make use of that query
  //and import useParams and extract the required value like below.
  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  //USING HISTORY OBJECT
  // const location = useLocation<{name: string}>().state.name;

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  const deleteItemHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("Deleted...");
  };
  const startEditGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("edited...");
  };

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
                  <IonItemOption onClick={startEditGoalHandler}>
                    <IonIcon slot="icon-only" icon={create} />
                  </IonItemOption>
                </IonItemOptions>
                <IonItemOptions side="start">
                  <IonItemOption color="danger" onClick={deleteItemHandler}>
                    {/* slot here makes sure that the icons are 
                    presented in the best possible way */}
                    <IonIcon slot="icon-only" icon={trash} />
                  </IonItemOption>
                </IonItemOptions>
                <IonItem lines="full">
                  {" "}
                  <IonLabel>{goal.text}</IonLabel>
                </IonItem>
              </IonItemSliding>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};
export default CourseGoals;
