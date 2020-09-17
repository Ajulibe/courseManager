import React, { useState } from "react";
import CoursesContext, { Course, Goal } from "./course-context";

const CoursesContextProvider: React.FC = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "React - The Complete Guide",
      enrolled: new Date(),
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
      included: true,
    },
  ]);

  //INITIAL STATE.
  //The above is the initial state which is sent to the provider.

  //ACTIONS
  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(),
      title: title,
      enrolled: date,
      goals: [],
      included: true,
    };

    //if the newstate depends on the old state then we shoul use a function in setState
    //here the new state has all values from the previous course so it depends on
    //the previous course
    setCourses((curCourses) => {
      return curCourses.concat(newCourse);
    });
  };

  //ADDING NEW GOALS
  const addGoal = (courseId: string, text: string) => {
    const newGoal: Goal = { id: Math.random().toString(), text: text };

    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );

      //find the particular course index
      const updatedCourseGoals = updatedCourses[
        updatedCourseIndex
      ].goals.concat(newGoal);

      //get the particular course that has been updated
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };

      //replace that particular course goal with the new goals from concatenation
      updatedCourse.goals = updatedCourseGoals;

      //select the particualr course from the main array and replace it
      //with this new course that has been worked on
      updatedCourses[updatedCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  //DELETING GOALS
  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      //find the particular course index
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      //get the goal in the course and filter out the one to be deleted
      const updatedCourseGoals = updatedCourses[
        updatedCourseIndex
      ].goals.filter((goal) => goal.id !== goalId);

      //get the particular course that has been updated
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };

      //replace that particular course goal with the new goals from filteration
      updatedCourse.goals = updatedCourseGoals;

      //select the particualr course from the main array and replace it
      //with this new course that hass been worked on
      updatedCourses[updatedCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  //UPDATE GOALS
  const updateGoal = (courseId: string, goalId: string, newText: string) => {
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      //find the particular course index
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      //get the goal in the course and slice it. which basically returns the same
      // array but removes a specified part. You dodnt need to add any argument.
      //in that way, slice will return the exact replica of the initial array.
      const updatedCourseGoals = updatedCourses[
        updatedCourseIndex
      ].goals.slice();
      //find the goal with the id and change its text
      const updatedCourseGoalIndex = updatedCourseGoals.findIndex(
        (goal) => goal.id === goalId
      );
      //the updated goal with a new text
      const updatedGoal = {
        ...updatedCourseGoals[updatedCourseGoalIndex],
        text: newText,
      };
      //This old goal will be replaced with the new goal
      updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;
      //get the particular course that has been updated
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      //replace that particular course goal with the new goals from filteration
      updatedCourse.goals = updatedCourseGoals;
      //select the particualr course from the main array and replace it
      //with this new course that hass been worked on
      updatedCourses[updatedCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  //FILTERING GOALS
  const changeCourseFilter = (courseId: string, isIncluded: boolean) => {
    setCourses((curCourses) => {
      //get all the courses
      const updatedCourses = [...curCourses];

      //find where the courses in te original array match the
      //courses we are looking for
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );

      //get the particular course that needs to be updated and added an extra feild
      const updatedCourse = {
        ...updatedCourses[updatedCourseIndex],
        included: isIncluded,
      };

      //select the particualr course from the main array and replace it
      //with this new course that has been worked on
      updatedCourses[updatedCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  //BREAK DOWN
  //This is simply the state and dispatched actions for the provider
  //Note that thaat the context has nothing to do here in terms of State.
  //its basically to initiate the context then we import the context file here to link it
  //to the provider. Remember its the provider that carries the state and the action function.
  //when the action function is called the respective file, it triggers a stae update
  //this then sets the state and returns the value.

  return (
    <CoursesContext.Provider
      value={{
        courses: courses,
        addGoal: addGoal,
        addCourse: addCourse,
        deleteGoal: deleteGoal,
        updateGoal: updateGoal,
        changeCourseFilter: changeCourseFilter,
      }}
    >
      {children}{" "}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
