import React, { useState } from 'react'
import './Index.css';

export default function Textform() {
    const [count, setCount] = useState(" ");
    const [text, setText] = useState('Enter text here..')
    const [newText, setNewText] = useState(" ");
    const handleUpClick = () => {
        console.log(text.toUpperCase())
        setNewText(text.toUpperCase())
    }
    const handleOnChange = (event) => {
        console.log("On changed")
        setText(event.target.value)
    }

    const handleLowerCase = () => {
        console.log(text.toUpperCase())
        setNewText(text.toLowerCase())
    }

    const handleCamelCase = () => {
        const newText = text.replace(/\s(.)/g, function (a) {
            return a.toUpperCase();
        })
            .replace(/^(.)/, function (b) {
                return b.toLowerCase();
            });
        setNewText(newText)
    }

    const handleCountChar = () => {
        const count = text.length;
        setCount(count)
    }

    const copyToclipBoard = () => {
        let copyGfGText =
            document.getElementById("newText");
        copyGfGText.select();
        document.execCommand("copy");
        document.getElementById("newText")
            .innerHTML = "Copied the text: "
            + copyGfGText.value;
    }

    return (
        <div className='row'>
            <div className='col-sm-3'>
            </div>
            <div className='col-sm-6 form-card'>
                <h1>Text Analizer</h1>
                <form className='form-text'>
                    <div className="form-group">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleInputEmail1" aria-describedby="emailHelp" >
                        </textarea>
                        <div class="alert alert-secondary mt-3" role="alert">
                            Total number of character is: {count}
                        </div>
                        <textarea className="form-control" id="newText" value={newText} aria-describedby="emailHelp" >
                        </textarea>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleUpClick}>To Upper Case</button>
                    <button type="button" className="btn btn-primary" onClick={handleLowerCase}>To Lower Case</button>
                    <button type="button" className="btn btn-primary" onClick={handleCamelCase}>To Camel Case</button>
                    <button type="button" className="btn btn-primary" onClick={handleCountChar}>Count Char</button>
                    <button type="button" className="btn btn-primary" onClick={copyToclipBoard}>Copy text</button>
                </form>

            </div>
            <div className='col-sm-3'>

            </div>
        </div>
    )
}
