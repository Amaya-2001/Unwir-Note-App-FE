import React, { useState } from "react";
import styled from "styled-components";
import NoteModal from "./NoteModal";

const AddNewIcon = styled.div`
  position: absolute;
  right: 180px;
  top: 45px;
  cursor: pointer;
`;

const AddNewBtn = styled.button`
  text-transform: uppercase;
  color: #15baa3;
  width: 145px;
  height: 45px;
  border-radius: 5px;
`;
const AddNoteCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const hadleModalClose = () => {
    const modalDiv = document.getElementById("noteModal");
    if (modalDiv != null) {
      modalDiv.style.display = "block";
    }
  };

  return (
    <>
      <AddNewIcon>
        <AddNewBtn onClick={() => setModalOpen(true)}>Add New Note</AddNewBtn>
      </AddNewIcon>
      <NoteModal
        modalOpen={modalOpen}
        topic="ADD"
        setModalOpen={setModalOpen}
        modalClose={hadleModalClose}
      ></NoteModal>
    </>
  );
};

export default AddNoteCard;
