import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the modal is on top */
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.span`
  cursor: pointer;
  font-size: 20px;
  color: #555;
`;

const ModalContent = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;



const Modal = ({ header, message,metaInfo, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalContent>
          {header && <h3 className="btn btn-success position-relative">{header}
          
        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span></h3>}
          
          {message && <p>{message}</p>}
          {metaInfo ? <i>{metaInfo}</i>: <i>Roku Remote v0.1.0</i>}
        </ModalContent>
        <button type="button" class="btn btn-secondary" onClick={onClose}>Close</button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
