import React, { useState } from 'react'


export default function TextForm(props) {

    var b=true;
    const [text, setText] = useState('');
    const [colors, setcolor] = useState();

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const trim = () => {
        // console.log("Uppercase was clicked");
        let newText = text.trim();
        setText(newText);
        props.showAlert("Spaces removed","success");
    }


    const clear = () => {
        // console.log("Uppercase was clicked");
        let newText = "";   
        setcolor();
        setText(newText);
        props.showAlert("Text Area Cleared","success");
    }

    const copy = () => {
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const onhandlechange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    const color = () => {
        // console.log("on change");
        if(b){
            setcolor('#64DFDF');
            b=false;
        }
        else{
            setcolor('#28FFBF');
            b=true;
        }
        
    }

    return (
        <>
            <div className="container" style={{color:props.mode==='light'?'black':'#EEEEEE'}} >
                <div className="mb-3">
                    <h1>{props.heading} </h1>
                    <textarea  style={{backgroundColor:props.mode==='light'?'white':'#6c757d',color:props.mode==='light'?'black':'#EEEEEE'}} className="form-control" id="myBox" rows="5" value={text} onChange={onhandlechange} ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to Uppercase</button>

                <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to Lowercase</button>

                <button className="btn btn-primary mx-2 my-1" onClick={trim} >Trim space</button>

                <button className="btn btn-primary mx-2 my-1" onClick={clear} >Clear Text</button>

                <button className="btn btn-primary mx-2 my-1" onClick={copy} >Copy Text</button>

                {/* to change color using button */}
                {/* <textarea  style={{backgroundColor:props.mode==='light'?'white':'#6c757d',color:colors}} */}
                {/* <button className="btn btn-primary mx-2" onClick={color} >Change Color</button> */}


                
            </div>

            <div className="container my-3" style={{color:props.mode==='light'?'black':'#EEEEEE'}}>
                 <h2>Text Summary</h2>
                    <p>{text.length>1?text.split(' ').length:0} words and {text.length} charcaters</p>
                    <p>{text.length>1?0.008*text.split(' ').length:0} minutes read</p> 
                <h2>Preview</h2> 
               <p>{text.length>0?text:"Enter something in the text box"}</p>
            </div>
        </>
    )
}