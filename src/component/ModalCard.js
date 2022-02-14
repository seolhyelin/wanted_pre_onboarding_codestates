import React from "react";
import styled from "styled-components";
import useModal from "../hooks/useModal";
import Modal from "../common/Modal";
import ModalTemplate from "../common/ModalTemplate";

const ModalCard = () => {
  const { isShowing, setModalVisible } = useModal();
  return (
    <Container>
      <Modal isShowing={isShowing} hide={setModalVisible}>
        <ModalTemplate hide={setModalVisible}>HELLO CODESTATES!</ModalTemplate>
      </Modal>
      <Button onClick={setModalVisible}>Open Modal</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  background-color: #5504bf;
  border: none;
  border-radius: 70px;
  color: white;
  padding: 20px 20px;
  margin: 60px;
  cursor: pointer;
`;

export default ModalCard;
