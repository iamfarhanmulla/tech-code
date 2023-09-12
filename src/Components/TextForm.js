import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState();
    //text = "new text"; //wrong way to change the state
    //setText("new text"); //correct way to change the state

    //for UpperCase text
    const handleClick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    //for lowerCase text
    const handloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowercase!','success');
    }
    //for Clear text
    const handleClear = ()=>{
        let newText =('');
        setText(newText)
        props.showAlert('cleared','success');
    }
    //for change text
    const handleOnchange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    //for Copy text
    const handleCopy = ()=> {
        let text = document.getElementById("my text");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard!','success');
    }    

  return (
    <>
    <div className='Container1' style={{color:props.mode1==='dark'?'white':'#000000'}}>
        <h1>{props.heading}</h1>
     <div className="spinner-border text-warning mx-2px" role="status">
        <span className="visually-hidden">Loading...</span>
     </div>
     <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
     </div>
     <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
     </div>
        <div className="mb">
        <label forhtml="my Text" className="form-label"></label>
        <textarea className='form-control' placeholder="Enter the text....." value={text} onChange={handleOnchange} style={{backgroundColor:props.mode1==='dark'?'grey':'white',color:props.mode1==='dark'?'white':'black'}} id='my text' rows="5"></textarea>
        </div>
        <button className="btn btn-outline-success my-1" onClick={handleClick}>Convert to UpperCase</button>
        <button className="btn btn-outline-primary mx-1" onClick={handloClick}>Convert to LowerCase</button>
        <button className="btn btn-outline-warning mx-1" onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-outline-danger mx-1' onClick={handleClear}>Clear</button>
    </div>
    <div className="Container2 my-2" style={{color:props.mode1==='dark'?'white':'#000000'}}>
        <h1>Your text summary :-</h1>
        <p>{text?.split(" ").length} words and {[text?.length]} characters</p>
        <h2>Preview :-</h2>
        <p>{text?.length>0?text:"Enter something in the textbox above to preview it here!"}</p>
    </div>
    </>
  )
}
