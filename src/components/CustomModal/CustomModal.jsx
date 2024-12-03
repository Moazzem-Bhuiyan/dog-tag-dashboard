import React from "react";
import { Modal } from "antd";

const CustomModal = ({ title, content, isopen, onClose }) => {
  return (
    <Modal title={title} centered open={isopen} onCancel={onClose} footer={null}>
      {content}
      
    </Modal>
  );
};

export default CustomModal;
