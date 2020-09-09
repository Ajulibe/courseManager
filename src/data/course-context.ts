import React from "react";

//an interface is a blueprint for an object in typescript.
//it makes the code cleaner
//here we are just describong whate the data will look like
//based off the COURSE_DATA we a;ready have.
//{}[] - means an array of objects

interface Goal {
  id: string;
  text: string;
}

export interface Course {
  id: string;
  title: string;
  enrolled: Date;
  goals: Goal[];
}

interface Context {
  //means an array of Courses which is a object of structure Course
  //simply means an Array of object
  courses: Course[];
  addCourse: () => void;
  addGoal: () => void;
  deleteGoal: () => void;
  updateGoal: () => void;
}

//This is the basic React Context Setup. Above is Typescript
//doing its thing
//This is the initial State and the actions to be dispatched
const CoursesContext = React.createContext<Context>({
  courses: [], //Initial state
  addCourse: () => {},
  addGoal: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
});

export default CoursesContext;
