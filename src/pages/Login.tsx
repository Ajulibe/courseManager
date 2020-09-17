import React, { useState } from "react";
import {
  IonContent,
  IonButton,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonIcon,
  IonCard,
  IonCardContent,
  IonText,
  IonLoading,
} from "@ionic/react";
import {
  arrowForwardCircleOutline,
  mailOutline,
  lockOpenOutline,
} from "ionicons/icons";
import { loginUser } from "../firebase/FirebaseAuth";
import { Link } from "react-router-dom";
import { toast } from "./toast";
import { useHistory } from "react-router-dom";
import "./LoginStyle.css";
import * as firebase from "firebase/app";
import "firebase/auth";

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [busy, setBusy] = useState<boolean>(false);

  const login = async () => {
    setBusy(true);
    const res = await loginUser(email, password);
    console.log(res);

    if (res) {
      //FETCHING THE USER TOKEN
      await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user); // It shows the Firebase user

          user.getIdToken().then(function (idToken) {
            console.log(idToken);
            sessionStorage.setItem("jwtToken", idToken);
          });
        }
      });
      toast("Successful");
      history.push({
        pathname: "/courses/all-goals",
      });
    }
    setBusy(false);
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid className="ion-margin-top">
          <IonLoading message="Please wait..." duration={0} isOpen={busy} />
          <IonRow className="headerColor">
            <IonCol className="ion-text-center">
              <IonText>
                <h2 className="headerStyle">COURSES TRACKER</h2>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow
            className="ion-justify-content-center"
            style={{ marginTop: "30%" }}
          >
            <IonCard style={{ backgoundColor: "#ffffff" }}>
              <IonCardContent>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">
                        <IonIcon slot="end" icon={mailOutline} />
                      </IonLabel>
                      <IonInput
                        autocomplete="email"
                        className="ionInput"
                        type="email"
                        placeholder="johnjane@example.com"
                        required
                        value={email}
                        onIonChange={(e: any) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow style={{ marginBottom: "5%" }}>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">
                        <IonIcon slot="end" icon={lockOpenOutline} />
                      </IonLabel>
                      <IonInput
                        className="ionInput"
                        type="password"
                        placeholder="**********"
                        required
                        value={password}
                        onIonChange={(e: any) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="ion-text-center">
                    <IonButton
                      expand="block"
                      size="small"
                      type="submit"
                      onClick={login}
                      className="ionbuttonStyle"
                    >
                      Login{" "}
                      <IonIcon slot="end" icon={arrowForwardCircleOutline} />
                    </IonButton>
                    <br />
                    <p>
                      New here? <Link to="/Register">Register</Link>
                    </p>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
