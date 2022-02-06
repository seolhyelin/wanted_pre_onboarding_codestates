import React from "react";
import styled from "styled-components";

const BoardTemplate = ({ name, children }) => {
  return (
    <Container>
      <AppNameContainer>{name}</AppNameContainer>
      {children}
    </Container>
  );
};

const Container = styled.div`
  margin: 40px 0;
  padding: 10px;
  border: solid lightgray 1px;
  border-radius: 4px;
`;

const AppNameContainer = styled.div`
  padding: 10px;
  font-size: 17px;
  font-weight: 700;
`;

export default BoardTemplate;
