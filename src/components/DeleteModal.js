import React from "react";
import styled from "styled-components";

const ModalBodyStyled = styled.div`
  background-color: #14b8a6;
  // width: 650px;
  // border-radius: 10px;
  // position: fixed;
  // top: 40px;
  // left: 50%;
  // transform: translateX(-50%);

  @media (max-width: 600px) {
    display: flex;
    align-item: center;
    justify-content: center;
    width: 275px;
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

  @media (max-width: 600px) {
    width: 60px;
    height: 40px;
    margin-top: 40px;
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
            <div className="text-red-xl font-semibold mb-4">
              Are you sure you want to delete this product?
            </div>
            <div className="flex justify-end">
              <BtnContainer
                onClick={() => handleDelete()}
                className="bg-red-600 text-white px-4 py-2 rounded-md mr-4"
              >
                Yes
              </BtnContainer>
              <BtnContainer
                onClick={() => {
                  setDeleteModalOpen(false);
                }}
                className="bg-green-600 text-white px-4 py-2 rounded-md"
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
