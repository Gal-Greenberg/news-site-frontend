import React from "react"
import { Link } from 'react-router-dom';

export const Header = (props) => (
    <div className="header">
        <div> {props.whithButtons &&
            <Link to="/signUp">     
                <button className="header__button">הירשם</button>
            </Link>} 
        </div>

        <div> {props.whithButtons &&
            <Link to="/signIn">
                <button className="header__button">התחבר</button>
            </Link>}
        </div>
        
        <h1 className="header__title">אתר החדשות שלכם</h1>
    </div>
)