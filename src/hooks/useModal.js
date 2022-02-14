import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const setModalVisible = () => {
    console.log("d");
    setIsShowing(!isShowing);
  };

  return { isShowing, setModalVisible };
};

export default useModal;
