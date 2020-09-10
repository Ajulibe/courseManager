import React from "react";
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
} from "@ionic/react";
import {
  arrowForwardCircleOutline,
  mailOutline,
  lockOpenOutline,
} from "ionicons/icons";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid style={{ marginTop: "35%" }}>
          <IonCard>
            <IonCardContent>
              <IonRow style={{ marginBottom: "5%" }}>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">
                      <IonIcon slot="end" icon={mailOutline} />
                    </IonLabel>
                    <IonInput
                      type="text"
                      placeholder="johnjane@example.com"
                      required
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
                    <IonInput type="text" placeholder="**********" required />
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-text-center">
                  <IonButton expand="block" size="small" type="submit">
                    Login{" "}
                    <IonIcon slot="end" icon={arrowForwardCircleOutline} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
