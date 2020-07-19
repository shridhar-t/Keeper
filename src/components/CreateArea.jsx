import React, { useState } from "react";
import AddIcon from '../../node_modules/@material-ui/icons/Add';
import Fab from "../../node_modules/@material-ui/core/Fab";
import {Zoom} from "../../node_modules/@material-ui/core";

function CreateArea(props) {
  const [note,setNote]=useState({
    title:"",
    content:""
  })
  const [isClicked,toggle]=useState(false);
  function handleChange(event){
    const {value,name}=event.target;
    setNote((prev)=>{
      return({
        ...prev,[name]:value
      });
    })
  }
  function handleClick(){
    toggle(true);
  }//hiding input can be achieved by {condition&&inputComponent}
  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} type={isClicked?"text":"hidden"} name="title" placeholder="Title" value={note.title}/>
        <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={isClicked?3:1} value={note.content} />
        <Zoom in={isClicked}>
        <Fab onClick={(e)=>{
          props.onAdd(note);
          setNote({
            title:"",
            content:""
          })
          e.preventDefault();//this can even be added to form onSubmit
        }}><AddIcon /></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
