import React, { useState } from "react";
import NoteImg from "../assets/noteImg.png";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import NoteModal from "./NoteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const NoteCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const hadleModalClose = () => {
    const modalDiv = document.getElementById("noteModal");
    if (modalDiv != null) {
      modalDiv.style.display = "block";
    }
  };

  const notify = () => toast("Note Delete Successfully!");

  return (
    <CardContainer className="card w-64 rounded-xl overflow-hidden shadow-lg">
      <img className="w-full" src={NoteImg} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
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
          <FaTrash size={20} style={{ color: "#040414" }} onClick={notify} />
          <ToastContainer theme="dark" />
        </ButtonsContainer>
      </div>
      <NoteModal
        modalOpen={modalOpen}
        title="UPDATE"
        setModalOpen={setModalOpen}
        modalClose={hadleModalClose}
      ></NoteModal>
    </CardContainer>
  );
};

export default NoteCard;
