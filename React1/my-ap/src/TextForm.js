import React from "react";
import { useState } from "react";
export default function TextForm(props) {
      const handleupclick=()=>{
       console.log("hello");
       const newtext=text.toUpperCase();
       setText(newtext);
     }
      const handledownclick=()=>{
       console.log("hello");
       const newtext=text.toLowerCase();
       setText(newtext);
     }
     const handleDelete=()=>{
      setText("");
     }
     const handleonchange=(event)=>{
        console.log("chnaged the text ");
        setText(event.target.value);
     }
     const [text,setText]=useState("");

  return (
    <>
    <div className="container" style={{color: props.mode=='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
<div className="mb-3" >
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange} style={{backgroundColor:props.mode=='dark'?'grey':'white',color: props.mode=='dark'?'white':'black'}}></textarea>
<button type="button" className="btn btn-primary my-2 mx-4" onClick={handleupclick}>To UpperCase</button>
<button type="button" className="btn btn-primary my-2 mx-3" onClick={handledownclick}>To LowerCase</button>
<button type="button" className="btn btn-secondary mx-3 my-2" onClick={handleDelete}>Delete Contenet</button>
</div>
<div className="container my-4 ">
<h1>Your text Summary</h1>
<h1>{text==""?0:text.split(" ").length} words and {text.length} characters.</h1>
<p>Text can be read in {text==""?0:0.008*text.split(" ").length} seconds.</p>

</div>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter the text for preview"}</p>
</div>
    </>
  );
};

// hooks : usestate 
 
