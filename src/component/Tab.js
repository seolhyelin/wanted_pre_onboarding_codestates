import React, { useState } from "react";
import styled from "styled-components";

const Tab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabContArr = [
    {
      tabTitle: (
        <div
          className={`tab ${activeIndex === 0 ? "is-active" : ""}`}
          onClick={() => tabClickHandler(0)}
        >
          Tab1
        </div>
      ),
      tabCont: <div>Tab menu ONE</div>,
    },
    {
      tabTitle: (
        <div
          className={`tab ${activeIndex === 1 ? "is-active" : ""}`}
          onClick={() => tabClickHandler(1)}
        >
          Tab2
        </div>
      ),
      tabCont: <div>Tab menu TWO</div>,
    },
    {
      tabTitle: (
        <div
          className={`tab ${activeIndex === 2 ? "is-active" : ""}`}
          onClick={() => tabClickHandler(2)}
        >
          Tab3
        </div>
      ),
      tabCont: <div>Tab menu THREE</div>,
    },
  ];

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <TabMenu>
        {tabContArr.map((section, index) => {
          return <div key={index}>{section.tabTitle}</div>;
        })}
      </TabMenu>
      <TabContent>{tabContArr[activeIndex].tabCont}</TabContent>
    </Container>
  );
};

const Container = styled.div``;

const TabMenu = styled.button`
  display: flex;
  border: none;
  color: gray;
  font-size: 20px;
  cursor: pointer;

  div {
    line-height: 50px;
  }

  & .tab {
    height: 50px;
    padding-left: 10px;
    padding-right: 200px;
  }

  & .tab.is-active {
    background-color: #5504bf;
    color: white;
  }
`;
const TabContent = styled.div`
  margin: 90px 0;
  text-align: center;
  font-size: 18px;
`;

export default Tab;
