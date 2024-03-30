import { useEffect, useState } from "react";
import "./App.css";
import NoteGallery from "./components/NoteGallery";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/get/notes");
      const allNotes = response.data;
      console.log("allNotes:", allNotes);
      setNotes(allNotes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <NoteGallery notes={notes} />
    </div>
  );
}

export default App;
