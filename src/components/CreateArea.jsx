import React, { useState } from "react";

function CreateArea(props) {
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
  });

  function createNote(event) {
    const { name, value } = event.target;
    setNoteContent((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submiteNote() {
    props.onClick(noteContent);
    setNoteContent({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={createNote}
          name="title"
          placeholder="Title"
          value={noteContent.title}
          type="text"
        />
        <textarea
          onChange={createNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteContent.content}
          type="text"
        />
        <button
          onClick={submiteNote}
          type="button"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
