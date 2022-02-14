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
  border: solid lightgray 2px;
  border-radius: 6px;
`;

const AppNameContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap");
  padding: 10px;
  font-family: "Raleway";
  font-size: 19px;
  font-weight: 700;
`;

export default BoardTemplate;
