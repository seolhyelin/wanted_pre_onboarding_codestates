import React from "react";
import styled from "styled-components";
import BoardTemplate from "./component/BoardTemplate";
import Toggle from "./component/Toggle";
import Tab from "./component/Tab";

const App = () => {
  return (
    <Container>
      <BoardTemplate name="Toggle">
        <Toggle />
      </BoardTemplate>
      <BoardTemplate name="Tab">
        <Tab />
      </BoardTemplate>
      {/* <BoardTemplate>
        <Tag />
      </BoardTemplate>
      <BoardTemplate>
        <AutoComplete />
      </BoardTemplate>
      <BoardTemplate>
        <ClickToEdit />
      </BoardTemplate> */}
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
