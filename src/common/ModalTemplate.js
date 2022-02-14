import React from "react";
import styled from "styled-components";

const ModalTemplate = ({ children, hide }) => {
  return (
    <StyledModalTemplate>
      <WhiteBox onClick={hide}>
        <DeleteModalButton>x</DeleteModalButton>
        {children}
      </WhiteBox>
    </StyledModalTemplate>
  );
};

const StyledModalTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 140px;
  border: none;
  border-radius: 8px;
  background: #ffffff;
  color: #5504bf;
  font-size: 19px;
  z-index: 1200;
`;

const DeleteModalButton = styled.button`
  position: absolute;
  border: none;
  background: white;
  font-size: 20px;
  top: 0;
  left: 47%;
  cursor: pointer;
`;
export default ModalTemplate;
