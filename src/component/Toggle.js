import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [switchButton, setswitchButton] = useState(false);

  return (
    <Container>
      <ToogleBtn
        type="checkbox"
        checked={switchButton}
        value={switchButton}
        onChange={(value) => {
          setswitchButton((e) => !e);
        }}
        id="switch-etc"
      />
      <Label htmlFor="switch-etc" className="switchLabel">
        <ToogleBall className="ball"></ToogleBall>
      </Label>
      <SwitchOnOff>
        {switchButton ? "Toggle Switch On" : "Toggle Switch Off"}
      </SwitchOnOff>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToogleBtn = styled.input`
  display: none;
  &:checked + .switchLabel .ball {
    transform: translateX(52px);
  }
  &:checked + .switchLabel {
    background-color: #7b68ee;
  }
`;
const Label = styled.label`
  position: relative;
  display: block;
  margin-top: 60px;
  margin-left: 20px;
  width: 100px;
  height: 38px;
  border-radius: 50px;
  background-color: gray;
  cursor: pointer;
`;
const ToogleBall = styled.div`
  position: absolute;
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 16px;
  top: 5px;
  left: 10px;
  transition: transform 0.2s linear;
  background-color: #eee;
`;
const SwitchOnOff = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  font-weight: bold;
  font-size: 18px;
`;

export default Toggle;
