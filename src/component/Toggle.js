import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [productThanksCard, setProductThanksCard] = useState(false);

  return (
    <Container>
      <ToogleBtn
        type="checkbox"
        checked={productThanksCard}
        value={productThanksCard}
        onChange={(value) => {
          setProductThanksCard((e) => !e);
        }}
        id="switch-etc"
      />
      <Label htmlFor="switch-etc" className="switchLabel">
        <ToogleBall className="ball"></ToogleBall>
      </Label>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10px;
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

export default Toggle;
