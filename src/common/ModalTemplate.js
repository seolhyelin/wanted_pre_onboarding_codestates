import React from "react";
import styled from "styled-components";

const ModalTemplate = ({ children, hide }) => {
  return (
    <StyledModalTemplate>
      <WhiteBox onClick={hide}>
        <DeleteModalButton />
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
  width: 200px;
  height: 100px;
  border: none;
  border-radius: 6px;
  background: #ffffff;
  z-index: 1200;
`;

const DeleteModalButton = styled.button`
  position: absolute;
  top: 0;
  left: 47%;
`;
export default ModalTemplate;
