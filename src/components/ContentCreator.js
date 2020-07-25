import React from "react"
import { Link } from 'react-router-dom';

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
            
            <div style={{ textAlign: "right" }}>
                <input className="input__content" type="test" name="password" placeholder="תוכן"
                    style={{textAlign: "right", width: "100rem", height: "20rem"}}/>
            </div>
            
            <div style={{ textAlign: "right" }}>
                <input className="input__content" type="test" name="password" placeholder="מאת"
                    style={{textAlign: "right", width: "20rem"}}/>
            </div>

            <button className="button">פרסם</button>
        </form>
    </div>
)