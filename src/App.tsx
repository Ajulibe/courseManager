import React from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonIcon,
  IonLabel,
  IonMenu,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
} from "@ionic/react";
import { Route, Redirect } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { list, options } from "ionicons/icons";

import Filter from "./pages/Filter";
import CourseTabs from "./pages/CourseTabs";

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
      <IonMenu contentId="main">
        {/* menu is used to link this menu item to the component it will work with */}
        <IonHeader>
          <IonToolbar>
            <IonTitle>Course Goals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {/* MENU TOGGLE */}
            <IonMenuToggle>
              <IonItem
                button
                routerLink="/courses/all-goals"
                routerDirection="none"
              >
                <IonIcon slot="start" icon={list} />
                <IonLabel>All Goals</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink="/filter" routerDirection="none">
                <IonIcon slot="start" icon={options} />
                <IonLabel>Filter</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      {/* {The whole Toolbar navigation was here previously. But it has been moved to the 
      CourseTab file and imported into this as a component to make the file neat} */}
      {/* This is the main routing for the project */}
      <IonRouterOutlet id="main">
        <Route path="/filter" exact>
          <Filter />
        </Route>
        <Route path="/courses">
          <CourseTabs />
        </Route>
        <Redirect path="/" to="/courses/list" exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
