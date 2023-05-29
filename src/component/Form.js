import React, { useState } from 'react'

function Form(props) {
    //Upper case
    const upCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    //Lower case
    const loCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    //clear text
    const clear = () => {
        let newText = "";
        setText(newText)
    }
    //Speak text
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    //Copy text
    const copyText = () => {
        var mytext = document.getElementById("textBox");
        mytext.select();
        navigator.clipboard.writeText(mytext.value);
    }
    //Remove extra spaces
    const removeSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    //Copy edited text
    const copyEditedText = () => {
        const str = document.getElementById('editedText').innerText
        const el = document.createElement('textarea')
        el.value = str
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
    }

    const handleUp = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (
        <div>
            <div className="my-3 container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Type your text here to transform the way you want!!</h1>
                <textarea className="form-control border-secondary mt-3" value={text} onChange={handleUp} id="textBox" rows="6" style={{ backgroundColor: props.mode === 'dark' ? '#1c1c1c6b' : 'white', color: props.mode === 'dark' ? 'white' : '#020202' }}></textarea>
                <p className='mx-1'>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={upCase}>Upper Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={loCase}>Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={clear}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={speak}>Speak</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={copyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={removeSpace}>Remove extra space</button>

                <h3 className="mt-4">Preview Text...</h3>
                <div className="border border-secondary p-2 rounded" style={{ backgroundColor: props.mode === 'dark' ? '#1c1c1c6b' : 'white', color: props.mode === 'dark' ? 'white' : '#020202' }}>
                    <p id='editedText'>{text.length > 0 ? text : "Enter text to preview"}</p>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={copyEditedText}>Copy Minified Text</button>
            </div>
        </div>
    )
}

export default Form
