import "./styles.scss";
import React from "react";
import { ButtonWithIconElement } from "./buttons/with-icon-element";
import { ButtonWithIconComponent } from "./buttons/with-icon-component";
import { ButtonWithIconRenderFunc } from "./buttons/with-icon-function";
import AccessAlarmIconGoogle from "@mui/icons-material/AccessAlarm";

const AlarmIconWithHoverForElement = (props) => {
  return (
    <AccessAlarmIconGoogle
      {...props}
      color={props.isHovered ? "primary" : "warning"}
    />
  );
};

const Page = () => {
  return (
    <div className="App">
      <h3>Button with icon as an Element</h3>
      <ButtonWithIconElement icon={<AlarmIconWithHoverForElement />}>
        button here
      </ButtonWithIconElement>

      <h3>Button with icon as a Component</h3>
      <ButtonWithIconComponent Icon={AlarmIconWithHoverForElement}>
        button here
      </ButtonWithIconComponent>

      <h3>Button with icon as a Function</h3>
      <ButtonWithIconRenderFunc
        renderIcon={(settings) => (
          <AccessAlarmIconGoogle
            fontSize={settings.fontSize}
            color={settings.isHovered ? "primary" : "warning"}
          />
        )}
      >
        button here
      </ButtonWithIconRenderFunc>
    </div>
  );
};

export default function App() {
  return <Page />;
}
