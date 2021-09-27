import React from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default function Content() {
  return (
    <div>
      <NoteForm />
      <NoteList />
    </div>
  );
}
