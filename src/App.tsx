import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { Route, Redirect } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

import Filter from "./pages/Filter";
import CourseTabs from "./pages/CourseTabs";
import SideDrawer from "./pages/SideDrawer";
import CoursesContextProvider from "./data/CoursesContextProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/theme.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* MENU BAR */}
      {/* the menu bar is just a component and according to the 
documentation it shouldnt be wrapped in a routeroutlet */}
      <SideDrawer />
      {/* {The whole Toolbar navigation was here previously. But it has been moved to the 
      CourseTab file and imported into this as a component to make the file neat} */}
      {/* This is the main routing for the project */}

      {/* BELOW IS THE MAIN ROUTER FLOW */}
      <CoursesContextProvider>
        <IonRouterOutlet id="main">
          <Route path="/Register" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/filter" exact>
            <Filter />
          </Route>
          <Route path="/courses">
            <CourseTabs />
          </Route>
          <Redirect path="/" to="/login" exact />
        </IonRouterOutlet>
      </CoursesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
