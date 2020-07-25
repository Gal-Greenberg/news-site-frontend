import React from "react"
import { Link } from 'react-router-dom';

import { Editor } from '@tinymce/tinymce-react';

import { Header } from "./Header"

export const ContentCreator = () => (
    <div>
        <Header whithButtons={false}/>

        <form className="form__content"/*onSubmit={}*/>
            <div style={{ textAlign: "right" }}>
                <input className="input__content" type="test" name="name" placeholder="כותרת" style={{textAlign: "right"}}/>
            </div>

            <div style={{ textAlign: "right" }}>
                <input className="input__content" type="test" name="mail" placeholder="תת כותרת" style={{textAlign: "right"}}/>
            </div>
            
            {/* <div style={{ textAlign: "right" }}>
                <input className="input__content" type="test" name="password" placeholder="תוכן"
                    style={{textAlign: "right", width: "100rem", height: "20rem"}}/>
            </div> */}

            <Editor className="input__content"
                initialValue="<p>תוכן הכתבה</p>"
                init={{
                height: 500,
                menubar: false,
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
                //onEditorChange={this.handleEditorChange}
            />
            
            <div style={{ textAlign: "right" }}>
                <input className="input__content" type="test" name="password" placeholder="מאת"
                    style={{textAlign: "right", width: "20rem"}}/>
            </div>

            <button className="button">פרסם</button>
        </form>
    </div>
)