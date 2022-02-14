import React from "react";
import styled from "styled-components";
import BoardTemplate from "./component/BoardTemplate";
import Toggle from "./component/Toggle";
import Tab from "./component/Tab";
import ModalCard from "./component/ModalCard";
import ClickToEdit from "./component/ClickToEdit";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";

const App = () => {
  return (
    <Container>
      <BoardTemplate name="Toggle">
        <Toggle />
      </BoardTemplate>
      <BoardTemplate name="Modal">
        <ModalCard />
      </BoardTemplate>
      <BoardTemplate name="AutoComplete">
        <AutoComplete />
      </BoardTemplate>
      <BoardTemplate name="ClickToEdit">
        <ClickToEdit />
      </BoardTemplate>
      <BoardTemplate name="Tab">
        <Tab />
      </BoardTemplate>
      <BoardTemplate name="Tag">
        <Tag />
      </BoardTemplate>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
