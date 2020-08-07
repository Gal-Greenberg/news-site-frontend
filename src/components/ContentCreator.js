import React, { useState } from "react"
import { Link } from 'react-router-dom';

import { Header } from "./Header";
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

export const ContentCreator = () => {
    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const [content, setContent] = useState();
    const [from, setFrom] = useState();

    const publish = (e) => {
        console.log(title, subtitle, content, from);
        clearError()
        let flag = 0;

        if (title === "" || title === undefined) {
            showError("Phone must be 10 digits long", 1, 0, 0, 0);
            flag = 1;
        }
        if (subtitle === '' || subtitle === undefined) {
            showError("Phone must be 10 digits long", 0, 1, 0, 0);
            flag = 1;
        }
        if (content === '' || content === undefined) {
            // showError("Phone must be 10 digits long", 0, 0, 1, 0);
            flag = 1;
        }
        if (from === '' || from === undefined) {
            showError("Phone must be 10 digits long", 0, 0, 0, 1);
            flag = 1;
        }

        if (flag === 0) {
            // axios.post("/publish", { title }, { subtitle }, { content }, { from }).then(res => {
            //     console.log(res);
            // })
          } else {
            e.preventDefault();
          }
    }

    const showError = (text, titleBool, subtitleBool, contentBool, fromBool) => {
        let error = document.querySelector('#errorText');

        let titleCom = document.querySelector('#title');
        let subtitleCom = document.querySelector('#subtitle');
        let contentCom = document.querySelector('#content');
        let fromCom = document.querySelector('#from');

        if (titleBool) 
            titleCom.style.color = "red";
        if (subtitleBool)
            subtitleCom.style.color = "red";
        if (contentBool)
            contentCom.style.color = "red";
        if (fromBool)
            fromCom.style.color = "rad";
        
        error.innerHTML += "<p>" + text + "</p>";
        error.style.height = "auto";
    }

    const clearError = () => {
        let error = document.querySelector('#errorText');
        error.style.height = "0px";
        error.innerHTML = "";

        document.querySelector('#title').style.color = "black";
        document.querySelector('#subtitle').style.color = "black";
        // document.querySelector('#content').style.color = "black";
        document.querySelector('#from').style.color = "black";
    }

    const handleEditorChange = (content, editor) => {
        console.log(content, editor)
    }

    return (
        <div>
            <Header whithButtons={false}/>

            <form className="form__content">
                <div style={{ textAlign: "right" }}>
                    <input className="input__content" required id="title"
                        placeholder="כותרת"
                        onChange={ e => (setTitle(e.target.value), clearError()) }
                        style={{ textAlign: "right" }}
                    />
                </div>

                <div style={{ textAlign: "right" }}>
                    <input className="input__content" required id="subtitle"
                        placeholder="תת כותרת"
                        onChange={ e => (setSubtitle(e.target.value), clearError()) }
                        style={{ textAlign: "right" }}
                    />
                </div>

                <Editor className="input__content"
                    // initialValue=""
                    
                    init={{
                    placeholder: 'תוכן הכתבה',
                    selector: 'textarea',
                    language: 'he_IL',
                    height: 500,
                    menubar: true,
                    id: "content",
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={(handleEditorChange) } //, setContent(e.value), clearError()
                />
                
                <div style={{ textAlign: "right" }}>
                    <input className="input__content" required id="from"
                        placeholder="מאת"
                        onChange={ e => (setFrom(e.target.value), clearError()) }
                        style={{ textAlign: "right", width: "20rem" }}
                    />
                </div>
                
                <p id="errorText" style={{ fontSize: "20px", color: "red",
                    display: "flexbox", margin: "1px 0 0 0", textAlign: "center"}}>
                </p>
                <button className="button" onClick={ publish }>פרסם</button>
            </form>
        </div>
    )
}