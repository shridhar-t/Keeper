import React from "react";
import DeleteIcon from "../../node_modules/@material-ui/icons/Delete";
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{
        props.onDelete(props.id);
      }}><DeleteIcon /></button>
    </div>
  );
}
//We cant call functions inside of onClick because they are called without button click. Instead we should use handleCLick(only function name) or else define and arrow function inside onClick
export default Note;
