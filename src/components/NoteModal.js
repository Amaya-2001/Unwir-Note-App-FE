import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: #ffff;
  width: 650px;
  border-radius: 10px;
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`;
const ModalTitle = styled.div`
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #15baa3;
  margin-top: 10px;
`;

const ModalBody = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  height: 300px;
`;

const BtnContainer = styled.button`
  cursor: pointer;
  top: 40px;
  background-color: #040414;
  color: #ffff;
  width: 85px;
  height: 45px;
  border-radius: 5px;
  margin-top: 60px;
  margin-right: 15px;
`;

const ModelFooter = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;
const NoteModal = ({
  modalOpen,
  setModalOpen,
  topic,
  note,
  title,
  noteDescription,
}) => {
  const [noteTitle, setNoteTitle] = useState(title ? title : "");
  const [description, setDescription] = useState(
    noteDescription ? noteDescription : ""
  );

  const handleSaveNote = async () => {
    if (topic === "ADD") {
      try {
        await axios.post("http://localhost:8000/create/note", {
          title: noteTitle,
          description: description,
        });
      } catch (error) {
        console.error(error);
      }
    } else if (topic === "UPDATE") {
      try {
        if (note) {
          await axios.put(`http://localhost:8000/update/note/${note._id}`, {
            title: noteTitle,
            description: description,
          });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Error occured while saving");
    }
  };

  return (
    <ModalContainer>
      <dialog id="noteModal" className="modal" open={modalOpen}>
        <ModalContainer>
          <ModalTitle>{topic} Note</ModalTitle>
          <ModalBody>
            <form className="w-full max-w-sm">
              <div className="flex items-center border-b border-teal-500 py-2 mt-10">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Title"
                  value={noteTitle}
                  onChange={(event) => setNoteTitle(event.target.value)}
                />
              </div>
              <div className="flex items-center border-b border-teal-500 py-2 mt-10">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              <ModelFooter>
                <div className="modal-action">
                  <BtnContainer onClick={handleSaveNote}>Save</BtnContainer>
                  <BtnContainer onClick={() => setModalOpen(false)}>
                    Close
                  </BtnContainer>
                </div>
              </ModelFooter>
            </form>
          </ModalBody>
        </ModalContainer>
      </dialog>
    </ModalContainer>
  );
};

export default NoteModal;
