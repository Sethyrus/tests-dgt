import React from 'react';
import { Modal as ModalRN } from 'react-native';

interface Props {
  children?: React.ReactNode;
  visible?: boolean;
  onRequestClose?: () => void;
}

const Modal = (props: Props) => {
  return (
    <ModalRN animationType='slide' visible={props.visible} onRequestClose={props.onRequestClose}>
      {props.children}
    </ModalRN>
  );
};

export default Modal;
