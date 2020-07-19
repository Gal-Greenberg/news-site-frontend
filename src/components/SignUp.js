import React from "react"
import {Header} from "./Header"

export const SignUp = () => (
    <div>
        <Header whithButtons={false}/>
        <form className="form"/*onSubmit={}*/>
            <input className="input" type="test" name="name" placeholder="שם" style={{textAlign: "right"}}/>
            <input className="input" type="test" name="mail" placeholder="מייל" style={{textAlign: "right"}}/>
            <input className="input" type="test" name="password" placeholder="סיסמה" style={{textAlign: "right"}}/>
            <button className="button">הירשם</button>
        </form>
    </div>
)