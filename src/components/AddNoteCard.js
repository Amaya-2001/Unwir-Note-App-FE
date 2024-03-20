import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styled from "styled-components";
import NoteModal from "./NoteModal";

const AddNewIcon = styled.div`
  position: absolute;
  right: 180px;
  top: 15px;
  cursor: pointer;
`;
const AddNoteCard = () => {
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  const handleNoteModal = () => {
    setIsNoteModalOpen(true);
  };
  const handleCloseNoteModal = () => {
    setIsNoteModalOpen(true);
  };
  return (
    <>
      <AddNewIcon>
        <AiOutlinePlusCircle
          size={60}
          style={{ color: "#040414" }}
          onClick={handleNoteModal}
        />
      </AddNewIcon>
      {isNoteModalOpen && (
        <NoteModal onClose={handleCloseNoteModal}></NoteModal>
      )}
    </>
  );
};

export default AddNoteCard;
