import React, { useState } from "react";
import NoteImg from "../assets/noteImg.png";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import NoteModal from "./NoteModal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const CardContainer = styled.div`
  background-color: #040414;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border: 3px solid #0c5f5e;
  color: #ffff;

  @media (max-width: 600px) {
    display: flex;
    align-item: center;
    justify-content: center;
    margin-left: 20px;
  }
`;

const ButtonsContainer = styled.div`
  cursor: pointer;
`;

const NoteCard = ({ note, onDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/delete/note/${note._id}`);
      toast.success("Delete Successfully!");
      onDelete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CardContainer className="card w-64 rounded-xl overflow-hidden shadow-lg">
      {/* <img className="w-full" src={NoteImg} alt="Sunset in the mountains" /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{note.title}</div>
        <p className="text-700 text-base" style={{ color: "#ffff" }}>
          {note.description}
        </p>
      </div>
      <div className="flex justify-between px-6 pt-4 pb-2">
        <ButtonsContainer>
          <FaEdit
            size={20}
            style={{ color: "#14B8A6" }}
            onClick={() => setModalOpen(true)}
          />
        </ButtonsContainer>
        <ButtonsContainer>
          <FaTrash
            size={20}
            style={{ color: "#14B8A6" }}
            onClick={handleDelete}
          />
          <ToastContainer theme="dark" />
        </ButtonsContainer>
      </div>
      <NoteModal
        note={note}
        modalOpen={modalOpen}
        title={note.title}
        noteDescription={note.description}
        topic="UPDATE"
        fetchNotes={onDelete}
        setModalOpen={setModalOpen}
      ></NoteModal>
    </CardContainer>
  );
};

export default NoteCard;
