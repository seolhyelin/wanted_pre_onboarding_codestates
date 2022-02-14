import React, { useState } from "react";
import styled from "styled-components";

const Tag = () => {
  const [keyword, setKeyword] = useState("");
  const [tagList, setTagList] = useState([]);

  const test = (e) => {
    const keyword = e.target.value;
    setKeyword(keyword);
  };

  const test2 = (e) => {
    const keyCode = e.code;

    if (keyCode === "Enter") {
      if (keyword !== "") {
        const newTagList = tagList.concat(keyword);
        setTagList(newTagList);
        setKeyword("");
      } else return;
    }
  };

  const test3 = (e) => {
    const id = e.target.id;
    const newTagList = tagList.filter((tag, index) => index !== Number(id));

    setTagList(newTagList);
  };

  return (
    <Container>
      <TagList>
        {tagList &&
          tagList.map((tag, index) => {
            return (
              <TagContainer key={index}>
                <Content>{tag}</Content>
                <DeleteButton id={index} onClick={test3}>
                  x
                </DeleteButton>
              </TagContainer>
            );
          })}
      </TagList>
      <Input
        value={keyword}
        onChange={test}
        onKeyPress={test2}
        placeholder="Press enter to add tags"
        type="text"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const TagList = styled.ul`
  display: flex;
`;

const TagContainer = styled.li`
  display: flex;
  margin-right: 10px;
  padding: 10px 6px;
  background-color: #5504bf;
  border-radius: 9px;
`;

const Content = styled.div`
  line-height: 30px;
  color: white;
`;

const DeleteButton = styled.button`
  height: 22px;
  margin-left: 15px;
  margin-top: 3px;
  border: none;
  border-radius: 70%;
  background-color: white;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  font-weight: 400;
  border: none;

  &:focus {
    outline: none;
  }
`;

export default Tag;
