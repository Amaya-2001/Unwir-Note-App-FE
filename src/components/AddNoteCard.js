import React, { useState } from "react";
import styled from "styled-components";
import NoteModal from "./NoteModal";
import logo from "../assets/logo.png";
import "../style/note-gallery.css";

const AddNewBtn = styled.button`
  text-transform: uppercase;
  color: #15baa3;
  width: 145px;
  height: 45px;
  border-radius: 5px;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #010713; /* Adjust as needed */
  z-index: 1000; /* Ensure it's above other content */
`;

const AddNoteCard = ({ fetchNotes }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const hadleModalClose = () => {
    const modalDiv = document.getElementById("noteModal");
    if (modalDiv != null) {
      modalDiv.style.display = "block";
    }
  };

  return (
    <>
      <Navbar>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="logo-img h-8" alt="Logo" />
            <span
              className="self-center text-2xl font-semibold whitespace-nowrap"
              style={{ color: "#14B8A6" }}
            >
              Unwir
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <AddNewBtn onClick={() => setModalOpen(true)}>
                  Add New Note
                </AddNewBtn>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
      <NoteModal
        fetchNotes={fetchNotes}
        modalOpen={modalOpen}
        topic="ADD"
        setModalOpen={setModalOpen}
        modalClose={hadleModalClose}
      ></NoteModal>
    </>
  );
};

export default AddNoteCard;
