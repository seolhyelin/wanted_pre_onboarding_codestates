import React, { useState } from "react";
import styled from "styled-components";

const ClickToEdit = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  const { name, age } = form;

  const changeInputValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const changeViewStatus = () => {};

  return (
    <Container onClick={changeViewStatus}>
      <InputContainer>
        이름 <Input type="text" name="name" onChange={changeInputValue} />
      </InputContainer>
      <InputContainer>
        나이 <Input type="text" name="age" onChange={changeInputValue} />
      </InputContainer>
      <ResultContainer>
        이름 {`${name}`} 나이 {`${age}`}
      </ResultContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-bottom: 40px;
`;

const Input = styled.input`
  margin-left: 10px;
  padding: 9px 15px;
  border: 1px solid lightgray;
  text-align: center;
`;

const ResultContainer = styled.p`
  margin-bottom: 50px;
`;

export default ClickToEdit;
