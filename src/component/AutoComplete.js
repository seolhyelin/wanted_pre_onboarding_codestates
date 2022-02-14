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
      <ResultBox>
        {result.length > 0 &&
          result.map((word) => {
            return <li>{word}</li>;
          })}
      </ResultBox>
    </Container>
  );
};

const Container = styled.div``;

const Input = styled.input``;

const ResultBox = styled.ul``;

export default AutoComplete;
