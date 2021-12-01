import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cgl", text: "Finish the Course" },
    { id: "cg2", text: "Take in the Main Course Details" },
    { id: "cg3", text: "Help others if asked" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h1>Goals</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
      <h6>Powered by Justice Reskill</h6>
    </div>
  );
};

export default App;
