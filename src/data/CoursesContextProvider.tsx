import React, { useState } from "react";
import CoursesContext, { Course } from "./course-context";

const CoursesContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([]);

  const addCourse = () => {};
  const addGoal = () => {};
  const deleteGoal = () => {};
  const updateGoal = () => {};

  return (
    <CoursesContext.Provider
      value={{
        courses: courses,
        addGoal: addGoal,
        addCourse: addCourse,
        deleteGoal: deleteGoal,
        updateGoal: updateGoal,
      }}
    >
      {props.children}{" "}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
