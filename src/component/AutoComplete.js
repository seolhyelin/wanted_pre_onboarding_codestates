import React, { useState } from "react";
import styled from "styled-components";
import keywordList from "../data/keywordList.json";

const AutoComplete = () => {
  const [result, setResult] = useState([]);

  const search = (e) => {
    const keyword = e.target.value;

    if (keyword === "") {
      setResult("");
      return;
    }

    const { message } = keywordList;

    const newResult = message.filter(
      (word) =>
        word.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1
    );
    setResult(newResult);
  };

  return (
    <Container>
      <Input onChange={search} type="text" />
      {result.length > 0 && (
        <ResultBox>
          {result.map((word) => {
            return <li>{word}</li>;
          })}
        </ResultBox>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 260px;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  margin-top: 50px;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 11px;
  font-size: 19px;
`;

const ResultBox = styled.ul`
  padding: 10px;
  margin-bottom: 50px;
  border: 1px solid lightgray;
  border-top: none;
  font-size: 19px;
  border-radius: 11px;
  li {
    &:hover {
      background: #f2f2f2;
    }
  }
`;

export default AutoComplete;
