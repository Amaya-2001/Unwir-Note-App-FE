import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { API_URL } from "../config.js";

const ModalContainer = styled.div`
  background-color: #ffff;
  width: 650px;
  border-radius: 10px;
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 600px) {
    width: 275px;
  }
`;
const ModalTitle = styled.div`
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #15baa3;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ModalBody = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  height: 300px;

  @media (max-width: 600px) {
    margin-right: 50px;
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

const ModelFooter = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 12px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const FormStyled = styled.form`
  width: 500px;

  @media (max-width: 600px) {
    font-size: 10px;
    width: 250px;
    margin-left: 40px;
  }
`;

const StyledInput = styled.input`
  appearance: none;
  background-color: transparent;
  border: none;
  width: 100%;
  color: #000;
  font-size: 16px;
  padding: 8px;

  ::placeholder {
    color: #999;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    ::placeholder {
      font-size: 12px;
    }
  }
`;

const NoteModal = ({
  modalOpen,
  setModalOpen,
  topic,
  note,
  title,
  fetchNotes,
  noteDescription,
}) => {
  const [noteTitle, setNoteTitle] = useState(title ? title : "");
  const [description, setDescription] = useState(
    noteDescription ? noteDescription : ""
  );
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  useEffect(() => {
    if (noteTitle === "") {
      setTitleError("Title is Required");
    } else {
      setTitleError("");
    }
    if (description === "") {
      setDescriptionError("Description is required");
    } else {
      setDescriptionError("");
    }
  }, [noteTitle, description]);

  const handleSaveNote = async (e) => {
    const isValid = !titleError && !descriptionError;
    if (isValid) {
      if (topic === "ADD") {
        try {
          await axios.post(`${API_URL}/create/note`, {
            title: noteTitle,
            description: description,
          });
          setNoteTitle("");
          setDescription("");
        } catch (error) {
          console.error(error);
        }
      } else if (topic === "UPDATE") {
        try {
          if (note) {
            await axios.put(`${API_URL}/update/note/${note._id}`, {
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

      if (fetchNotes) {
        await fetchNotes();
      }
      setModalOpen(false);
    }
  };

  return (
    <ModalContainer>
      <dialog id="noteModal" className="modal" open={modalOpen}>
        <ModalContainer>
          <ModalTitle>{topic} Note</ModalTitle>
          <ModalBody>
            <FormStyled>
              <div className="flex items-center border-b border-teal-500 py-2 mt-10">
                <StyledInput
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Title"
                  value={noteTitle}
                  onChange={(event) => setNoteTitle(event.target.value)}
                />
              </div>
              <ErrorMsg>{titleError}</ErrorMsg>
              <div className="flex items-center border-b border-teal-500 py-2 mt-10">
                <StyledInput
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              <ErrorMsg>{descriptionError}</ErrorMsg>
              <ModelFooter>
                <div className="modal-action">
                  <BtnContainer
                    onClick={(e) => {
                      e.preventDefault();
                      handleSaveNote(e);
                    }}
                  >
                    Save
                  </BtnContainer>
                  <BtnContainer
                    onClick={(e) => {
                      e.preventDefault();
                      setModalOpen(false);
                    }}
                  >
                    Close
                  </BtnContainer>
                </div>
              </ModelFooter>
            </FormStyled>
          </ModalBody>
        </ModalContainer>
      </dialog>
    </ModalContainer>
  );
};

export default NoteModal;
