import React, { useEffect, useState } from "react";
import NoteImg from "../assets/noteImg.png";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import NoteModal from "./NoteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CardContainer = styled.div`
  background-color: #c9eee9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ButtonsContainer = styled.div`
  cursor: pointer;
`;

const NoteCard = ({ note }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   getNote();
  // });

  // const getNote = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8000/get/note/${note._id}`
  //     );
  //     setNoteTitle(response.data.title);
  //     setDescription(response.data.description);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const hadleModalClose = () => {
  //   const modalDiv = document.getElementById("noteModal");
  //   if (modalDiv != null) {
  //     modalDiv.style.display = "block";
  //   }
  // };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/delete/note/${note._id}`);
      toast.success("Delete Successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CardContainer className="card w-64 rounded-xl overflow-hidden shadow-lg">
      <img className="w-full" src={NoteImg} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{note.title}</div>
        <p className="text-gray-700 text-base">{note.description}</p>
      </div>
      <div className="flex justify-between px-6 pt-4 pb-2">
        <ButtonsContainer>
          <FaEdit
            size={20}
            style={{ color: "#040414" }}
            onClick={() => setModalOpen(true)}
          />
        </ButtonsContainer>
        <ButtonsContainer>
          <FaTrash
            size={20}
            style={{ color: "#040414" }}
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
        setModalOpen={setModalOpen}
        // modalClose={hadleModalClose}
      ></NoteModal>
    </CardContainer>
  );
};

export default NoteCard;
