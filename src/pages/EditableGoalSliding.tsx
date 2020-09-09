import React, { useRef } from "react";
import {
  IonItem,
  IonLabel,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonAlert,
  IonToast,
} from "@ionic/react";
import { create, trash } from "ionicons/icons";

const EditableGoalSliding: React.FC<{
  startDeleteItemHandler: (event: React.MouseEvent) => void;
  startEditGoalHandler: (event: React.MouseEvent) => void;
  slidingOptionsRef: React.Ref<HTMLIonItemSlidingElement>;
  goalText: string;
}> = (props) => {
  return (
    //FOR SWIPING
    <IonItemSliding ref={props.slidingOptionsRef}>
      <IonItemOptions side="end">
        {/* here we are binding these arguments to this function when the function is called */}
        <IonItemOption onClick={props.startEditGoalHandler}>
          <IonIcon slot="icon-only" icon={create} />
        </IonItemOption>
      </IonItemOptions>
      <IonItemOptions side="start">
        <IonItemOption color="danger" onClick={props.startDeleteItemHandler}>
          {/* slot here makes sure that the icons are 
                    presented in the best possible way */}
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>

      <IonItem lines="full">
        {" "}
        <IonLabel>{props.goalText}</IonLabel>
      </IonItem>
    </IonItemSliding>
  );
};

export default EditableGoalSliding;
