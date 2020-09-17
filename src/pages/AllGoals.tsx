import React, { useContext } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
// import { COURSE_DATA } from "./Courses";
import CoursesContext from "../data/course-context";

//COURSE_DATA is the dummy data we used.

const AllGoals: React.FC = () => {
  const coursesCtx = useContext(CoursesContext);

  //obtaining an array that contains only the goals.
  const goals = coursesCtx.courses
    //this only returns the goals that are true
    .filter((courses) => {
      return courses.included;
    })
    .map((course) => {
      //for every course we extract the goals object and add te course
      //title to that object
      return course.goals.map((goal) => {
        return { ...goal, courseTitle: course.title };

        //HERE WE ARE RETURNING THE BELOW OBJECT
        //because for each of the goals, we are returning and oject
        //that has the courses title and the goal.
        /*  {
          courseTitle: "React - The Complete Guide",
          id: "c1g1",
          text: "Finish the Course!", 
          ]
        }, */
      });
    })
    .reduce((goalArr, nestedGoals) => {
      let updatedGoalArray = goalArr;
      console.log(updatedGoalArray);
      console.log(nestedGoals);
      for (const goal of nestedGoals) {
        updatedGoalArray = updatedGoalArray.concat(goal);
      }
      return updatedGoalArray;
    }, []);

  console.log(goals);
  //The reduce method performs a function on each element in an
  //array and returns a single desired value.Either an array or an object.
  //Note goalArr is the prev. nestedGoals is the next
  //Read this https://ultimatecourses.com/blog/array-reduce-javascript
  //Console.log those values to gain a better understsanding of whats
  //going on. This is simply Saying that for each of the next values, loop through
  //is and add each value tot the updatedGoal Array which initially is an empty array.
  //in Simple Terms, whenever you go to the next value, look into it and take each of the
  //individual objects and add it to my array.

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>AllGoals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {goals.length && <h2 className="ion-text-center">No goals found!</h2>}
        {goals.length > 0 && (
          <IonList>
            {goals.map((goal) => (
              <IonItem key={goal.id}>
                <IonLabel>
                  <h2>{goal.text}</h2>
                  <p>{goal.courseTitle}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};
export default AllGoals;
