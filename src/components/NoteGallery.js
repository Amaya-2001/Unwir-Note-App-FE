import React, { useEffect, useRef, useState } from "react";
import NoteCard from "./NoteCard";
import "../style/note-gallery.css";
import AddNoteCard from "./AddNoteCard";
import styled from "styled-components";

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

const NoteGallery = ({ notes }) => {
  const [noteList, setNoteList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    setNoteList(notes.slice(0, 8));
  }, [notes]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loaderRef]);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (currentPage > 1) {
      const startIndex = (currentPage - 1) * 8;
      const endIndex = currentPage * 8;
      const newNoteList = notes.slice(startIndex, endIndex);
      setNoteList((firstNoteSet) => [...firstNoteSet, ...newNoteList]);
    }
  }, [currentPage, notes]);

  return (
    <div>
      <div className="container">
        <AddNoteCard />

        <GridContainer>
          {" "}
          {noteList.map((note) => (
            <GridItem key={note._id}>
              <NoteCard note={note} />
            </GridItem>
          ))}
        </GridContainer>
        <div ref={loaderRef} />
      </div>
    </div>
  );
};

export default NoteGallery;
