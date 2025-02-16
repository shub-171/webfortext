import React, { useState } from 'react'
import { LoremIpsum } from 'lorem-ipsum';

function Form(props) {

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 10,
            min: 5
        },
        wordsPerSentence: {
            max: 16,
            min: 8
        }
    });

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

    //Copy text
    const copyText = () => {
        var mytext = document.getElementById("textBox");
        mytext.select();
        navigator.clipboard.writeText(mytext.value);
    }

    //Remove extra spaces
    const removeSpace = () => {
        let newText = text.split(/\n/).map(line => line.trim().replace(/\s+/g, " ")).join("\n");
        setText(newText);
    };

    //capitalize text
    const capitalize = () => {
        const capitalizedText = text.toLowerCase()
            .split(/(\s+)/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
        setText(capitalizedText);
    };

    //String to slug
    const createSlug = () => {
        let slug = text
            .split('\n')
            .map(line =>
                line.toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '')
            )
            .join('\n');
        setText(slug);
    };

    // remove extra lines
    const removeEmptyLines = () => {
        let newText = text.split('\n').filter(line => line.trim() !== '').join('\n');
        setText(newText)
    }

    // Add line number
    const addLineNumber = () => {
        const numbered = text
            .split('\n')
            .map((line, index) => `${index + 1}: ${line}`)
            .join('\n');
        setText(numbered);
    };

    // Filler Text
    const fillerText = () => {
        const randomText = lorem.generateParagraphs(1); // Generate 5 paragraphs of Lorem Ipsum text
        setText(randomText);
    };


    const handleUp = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="my-5 mt-3 container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Type your text here to transform the way you want!!</h1>
                <textarea className="form-control border-secondary mt-3" value={text} onChange={handleUp} id="textBox" rows="12" style={{ backgroundColor: props.mode === 'dark' ? '#1c1c1c6b' : 'white', color: props.mode === 'dark' ? 'white' : '#020202' }}></textarea>
                <p className='mx-1'>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                <div className='edit-buttons'>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={copyText}>Copy</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={clear}>Clear</button>

                    <div className="dropdown mx-1 mt-2">
                        <button disabled={text.length === 0} className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Convert Case
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><button disabled={text.length === 0} className="dropdown-item" onClick={upCase}>Upper Case</button></li>
                            <li><button disabled={text.length === 0} className="dropdown-item" onClick={loCase}>Lower Case</button></li>
                            <li><button disabled={text.length === 0} className="dropdown-item" onClick={capitalize}>Capitalize</button></li>
                        </ul>
                    </div>




                    <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={removeSpace}>Remove Extra Space</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={removeEmptyLines}>Remove Empty Lines</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={addLineNumber}>Add line number</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 mt-2" onClick={createSlug}>String to Slug</button>
                    <button className="btn btn-primary mx-1 mt-2" onClick={fillerText}>Filler Text</button>
                </div>
            </div>

            <hr className='container' style={{ color: props.mode === 'dark' ? '#777777' : '#1c1c1c' }} />
        </>
    )
}

export default Form
