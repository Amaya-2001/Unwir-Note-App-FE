import React from "react";
import NoteCard from "./NoteCard";
import "../style/note-gallery.css";
import AddNoteCard from "./AddNoteCard";
const NoteGallery = () => {
  return (
    <div>
      <div className="container">
        <AddNoteCard />
        <NoteCard />
      </div>
    </div>
  );
};

export default NoteGallery;
