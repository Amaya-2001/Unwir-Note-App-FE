import React from "react";
import styled from "styled-components";

const ModalBodyStyled = styled.div`
  background-color: #14b8a6;

  @media (max-width: 600px) {
    width: 275px;
    height: 125px;
  }
`;
const ModalTextStyled = styled.div`
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
const BtnContainer = styled.button`
  cursor: pointer;
  top: 40px;
  background-color: #040414;
  color: #ffff;
  width: 85px;
  height: 45px;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 15px;
  font-size: 12px;

  @media (max-width: 600px) {
    width: 50px;
    height: 30px;
    margin-top: 10px;
  }
`;

const DeleteModal = ({ setDeleteModalOpen, deleteModalOpen, handleDelete }) => {
  return (
    <div>
      {deleteModalOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <ModalBodyStyled className="rounded-lg shadow-lg p-6 w-96">
            <ModalTextStyled className="font-semibold">
              Are you sure you want to delete this note?
            </ModalTextStyled>
            <div className="flex justify-end">
              <BtnContainer onClick={() => handleDelete()}>Yes</BtnContainer>
              <BtnContainer
                onClick={() => {
                  setDeleteModalOpen(false);
                }}
              >
                No
              </BtnContainer>
            </div>
          </ModalBodyStyled>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;
