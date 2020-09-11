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

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");

  const register = async () => {
    if (password !== cpassword) {
      return toast("Passwords do not match");
    }
    if (email.trim() === "" || password.trim() === "") {
      return toast("Email and password is required");
    }

    const res = await registerUser(email, password);
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol className="ion-text-center">
              <IonText>
                <h2 className="headerStyle">COURSES TRACKER</h2>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow
            className="ion-justify-content-center"
            style={{ marginTop: "10%" }}
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
                        type="text"
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
                        type="text"
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
                        type="text"
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
                    <IonButton expand="block" size="small" type="submit">
                      Register{" "}
                      <IonIcon slot="end" icon={pencilOutline} size="7px" />
                    </IonButton>
                    <br />
                    <p>
                      Already have an Account? <br />
                      <p>
                        New here? <Link to="/login">Login</Link>
                      </p>
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
