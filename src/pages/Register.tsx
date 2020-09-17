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
  pencilOutline,
  mailOutline,
  lockOpenOutline,
  lockClosedOutline,
} from "ionicons/icons";
import "./LoginStyle.css";
import { Link } from "react-router-dom";
import { toast } from "./toast";
import { registerUser } from "../firebase/FirebaseAuth";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";

const Register: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [busy, setBusy] = useState<boolean>(false);

  const register = async () => {
    setBusy(true);
    if (password !== cpassword) {
      return toast("Passwords do not match");
    }
    if (email.trim() === "" || password.trim() === "") {
      return toast("Email and password is required");
    }

    const res = await registerUser(email, password);

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
      toast("Registration Successful");
      history.push({
        pathname: "/courses/all-goals",
      });
    } else {
      return;
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
                <IonRow style={{ marginBottom: "5%" }}>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">
                        <IonIcon slot="end" icon={lockClosedOutline} />
                      </IonLabel>
                      <IonInput
                        className="ionInput"
                        type="password"
                        placeholder="**********"
                        required
                        value={cpassword}
                        onIonChange={(e: any) => {
                          setCpassword(e.target.value);
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
                      onClick={register}
                      className="ionbuttonStyle"
                    >
                      Register{" "}
                      <IonIcon slot="end" icon={pencilOutline} size="7px" />
                    </IonButton>
                    <br />
                    <p>
                      Already have an Account? <br />
                      <IonText>
                        <Link to="/login">Login</Link>
                      </IonText>
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

export default Register;
