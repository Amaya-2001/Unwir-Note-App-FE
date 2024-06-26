import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import "../style/note-gallery.css";
import AddNoteCard from "./AddNoteCard";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../config.js";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: fit-content;
    padding: 10px 0xp;
    margin: 0px;
  }
`;

const GridItem = styled.div`
  margin-right: 25px;
  margin-bottom: 25px;
  margin-left: 25px;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`;

const NoteGallery = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    try {
      const response = await axios.get(`${API_URL}/get/notes`);
      const allNotes = response.data;
      setNotes(allNotes);
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async () => {
    getAllNotes();
  };

  return (
    <div>
      <div className="container">
        <AddNoteCard fetchNotes={onDelete} />
        <GridContainer>
          {" "}
          {notes.map((note) => (
            <GridItem key={note._id}>
              <NoteCard note={note} onDelete={onDelete} />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
};

export default NoteGallery;
