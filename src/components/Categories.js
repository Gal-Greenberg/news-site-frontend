import React from "react"
import { Link } from 'react-router-dom';

export const Categories = () => (
    <div className="categories">
        <Link to="/news">     
            <button className="categories__button">חדשות</button>
        </Link>

        <Link to="/sports">     
            <button className="categories__button">ספורט</button>
        </Link>

        <Link to="/economy">
            <button className="categories__button">כלכלה</button>
        </Link>

        <Link to="/health">
            <button className="categories__button">בריאות</button>
        </Link>

        <Link to="/gossip">
            <button className="categories__button">רכילות</button>
        </Link>

        <Link to="/culture">
            <button className="categories__button">תרבות</button>
        </Link>
    </div>
)