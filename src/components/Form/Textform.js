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
        <div className='row textanalizer'>
            <div className='col-sm-3 mh-0'>
            </div>
            <div className='col-sm-6 form-card'>
                <h1>Text Analizer
                <div class="roller">
                    <span id="rolltext">Upper Case<br/>
                    Lower Case<br/>
                    Camel Case<br/>
                    Count Char<br/>
                    </span>
                    </div>
                    </h1>

                <form className='form-text'>
                    <div className="form-group">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleInputEmail1" aria-describedby="emailHelp" >
                        </textarea>
                        <div className="alert alert-secondary mt-3" role="alert">
                            Total number of character is: {count}
                        </div>
                        <div className="alert alert-secondary mt-3" role="alert">
                            Total number of character is: {text.length} and Words is: {text.split(" ").length} , Read it in : {.008*text.split(" ").length} Minutes
                        </div>
                        <h6>Preview text</h6>
                        <textarea className="form-control" id="newText" value={newText} aria-describedby="emailHelp" >
                        </textarea>
                    </div>
                    <button type="button" className="btn custom-btn-outline-success my-2 mx-2" onClick={handleUpClick}>To Upper Case</button>
                    <button type="button" className="btn custom-btn-outline-success my-2 mx-2" onClick={handleLowerCase}>To Lower Case</button>
                    <button type="button" className="btn custom-btn-outline-success my-2 mx-2" onClick={handleCamelCase}>To Camel Case</button>
                    <button type="button" className="btn custom-btn-outline-success my-2 mx-2" onClick={handleCountChar}>Count Char</button>
                    <button type="button" className="btn custom-btn-outline-success my-2 mx-2" onClick={copyToclipBoard}>Copy text</button>
                </form>

            </div>
            <div className='col-sm-3'>
            </div>
        </div>
    )
}
