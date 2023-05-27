import { useState } from "react";
import { CookiePolicyModal } from ".";

export const useModal = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const Modal = () => {
    if (!show) return null;
    return <CookiePolicyModal show closeModal={closeModal} />;
  };
  return { Modal, openModal, closeModal };
};
