import React from "react";

//an interface is a blueprint for an object in typescript.
//it makes the code cleaner
//here we are just describong whate the data will look like
//based off the COURSE_DATA we a;ready have.
//{}[] - means an array of objects

export interface Goal {
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
  addCourse: (courseTitle: string, courseDate: Date) => void;
  addGoal: (courseId: string, goalText: string) => void;
  deleteGoal: (courseId: string, goalId: string) => void;
  updateGoal: (courseId: string, goalId: string, newText: string) => void;
}

//This is the basic React Context Setup. Above is Typescript
//doing its thing
//This is the initial State and the actions to be dispatched
//createContext takes in the initial State as the oject as seen below.
//SYNTHAX(REACT WEBSITE)
//const MyContext = React.createContext(defaultValue);
//The defaultvalue is not actually that important but since
//its in the definition based on documentation, lets leave it
//there.
//Always do it like this when working with react typescript
const CoursesContext = React.createContext<Context>({
  courses: [], //Initial state
  addCourse: () => {},
  addGoal: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
});

export default CoursesContext;
