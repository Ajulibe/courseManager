import React from "react";
import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
} from "@ionic/react";

import Courses from "./Courses";
import CourseGoals from "./CourseGoals";
import AllGoals from "./AllGoals";

import { Route, Redirect, Switch } from "react-router-dom";
import { list, trophyOutline } from "ionicons/icons";

const CourseTabs: React.FC = () => {
  return (
    <IonTabs>
      {/* ROUTEROUTLET */}
      <IonRouterOutlet>
        {/* when the page first loads, it is redirected from the /course route 
          present in App.js to /courses/list because we are using nested routes */}
        <Redirect path="/courses" to="/courses/list" exact />
        <Switch>
          <Route path="/courses/list" exact>
            <Courses />
          </Route>
          <Route path="/courses/all-goals" exact>
            <AllGoals />
          </Route>
          <Route path="/courses/:courseId" exact>
            <CourseGoals />
          </Route>
        </Switch>
      </IonRouterOutlet>
      {/* TAB BAR */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="all-goals" href="/courses/all-goals">
          <IonIcon icon={list} />
          <IonLabel>All Goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab="courses" href="/courses/list">
          <IonIcon icon={trophyOutline} />
          <IonLabel>Courses</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
