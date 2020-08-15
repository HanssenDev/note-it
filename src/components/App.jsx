import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(noteInfo => (
        <Note 
        key={noteInfo.key}
          heading={noteInfo.title}
          text={noteInfo.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
