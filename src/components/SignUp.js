import React from "react"
import { Header } from "./Header"

export const SignUp = () => (
    <div>
        <Header whithButtons={false}/>
        <form className="form__sign"/*onSubmit={}*/>
            <input className="input__sign" type="test" name="name" placeholder="שם" style={{textAlign: "right"}}/>
            <input className="input__sign" type="test" name="mail" placeholder="מייל" style={{textAlign: "right"}}/>
            <input className="input__sign" type="test" name="password" placeholder="סיסמה" style={{textAlign: "right"}}/>
            <button className="button">הירשם</button>
        </form>
    </div>
)