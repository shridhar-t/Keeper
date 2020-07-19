import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const[array,update]=useState([]);
  function addItem(note)
  {
    update((prev)=>[...prev,note]);
  }
  function deleteItem(index)
  {
    update((prev)=>{
      return (prev.filter((value,i)=>{
        return i!==index
      }));
    })

  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {array.map((note,index)=>{//could add key from uuid
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteItem}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
