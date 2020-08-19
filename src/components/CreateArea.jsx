import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

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
      content: "",
    });
  }

  const [isExpanded, setIsExpanded] = useState(false);

  function expandNote() {
    setIsExpanded((prevValue) => !prevValue);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={createNote}
            name="title"
            placeholder="Title"
            value={noteContent.title}
            type="text"
          />
        )}
        <textarea
          onChange={createNote}
          onClick={expandNote}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={noteContent.content}
          type="text"
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submiteNote} type="button">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
