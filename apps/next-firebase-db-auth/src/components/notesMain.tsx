// copied in from first notes project

import { SetStateAction, useEffect, useState } from "react";
// import { firebaseApp, firebaseDB } from "../../lib/firebaseConfig";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   QuerySnapshot,
//   DocumentData,
// } from "firebase/firestore";

// import dynamic from "next/dynamic"; // to ensure that code is run on the client. Quill ofcourse can not be run from the server.
// const ReactQuill = dynamic(import("react-quill"), { ssr: false });
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

type FNote = { id: string; noteTitle: string; noteDesc: string };
type RNote = { id: string; noteTitle: string; noteDesc: string }[];

// const dbInstance = collection(firebaseDB, "notes");

export default function NotesMain() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");

  const [noteDesc, setNoteDesc] = useState("");
  const [notesArray, setNotesArray] = useState<RNote>([]);

  const addDesc = (value: SetStateAction<string>) => {
    setNoteDesc(value);
  };

  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };

  //   const saveNote = () => {
  //     addDoc(dbInstance, {
  //       noteTitle: noteTitle,
  //       noteDesc: noteDesc,
  //     }).then(() => {
  //       setNoteTitle("");
  //       setNoteDesc("");
  //       getNotes();
  //     });
  //   };

  //   const getNotes = () => {
  //     getDocs(dbInstance).then((data: QuerySnapshot<DocumentData>) => {
  //       const dataArray: RNote = data.docs.map((item) => {
  //         const itemData = item.data();
  //         const itemDataAny: any = itemData;
  //         const noteTitle: string = itemDataAny.noteTitle;
  //         const noteDesc: string = itemDataAny.noteDesc;
  //         // const noteData = {
  //         //   noteTitle: noteTitle,
  //         //   noteDesc: noteDesc
  //         // }

  //         // console.log(itemData, noteTitle, noteDesc, item.id);

  //         return { noteTitle: noteTitle, noteDesc: noteDesc, id: item.id };
  //       });

  //       setNotesArray(dataArray);
  //     });
  //   };

  //   useEffect(() => {
  //     getNotes();
  //   }, []);

  return (
    <div className='h-full w-80 flex flex-col items-center justify-around'>
      <div className="h-1/4 flex flex-col items-center justify-center">
        {/* <div className='' >
          <button onClick={inputToggle} className='w-56 h-8 cursor-pointer bg-black text-white border-black'>
            Add a New Note
          </button>
        </div> */}

        <div className={`my-2 ${isInputVisible ? 'visible' : 'visible'}`}>
          <input
            className='w-56 h-10 pl-2 placeholder:italic'
            placeholder="Enter A Title.."
            onChange={(e) => setNoteTitle(e.target.value)}
            value={noteTitle}
          />
        </div>

        <div className='w-80'>
          {/* <ReactQuill theme="snow" onChange={addDesc} value={noteDesc} /> */}
        </div>

        <button onClick={() => { }} className='mt-2 py-2 px-8 rounded bg-red-700 text-yellow-50'>
          Save Note
        </button>
      </div>

      <div className='h-3/4 flex flex-col items-center justify-center'>
        {notesArray.map((note) => {
          return (
            <div
              key={note.id}
              className='mt-2 w-56 text-center cursor-pointer hover:bg-red-900 text-white'
              onClick={() => { }}
            >
              <h4>{note.noteTitle}</h4>
              {/* <p>{note.noteDesc}</p> */}
              {/* <p dangerouslySetInnerHTML={{ __html: note.noteDesc }}></p> */}
            </div>
          );
        })}

        <div
          className='mt-2 w-56 text-center cursor-pointer hover:bg-red-900 text-white'
          onClick={() => { }}
        >
          <h4>Tester</h4>
        </div>

      </div>
    </div>
  );
}
