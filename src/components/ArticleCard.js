import React from "react"
import { Link } from 'react-router-dom';

export const ArticleCard = (props) => (
    <Link to="/artic" className="card">
        <div className="container">
            <h2 style={{ fontSize: 20 }}><b>{props.article.title}</b></h2> 
            <p style={{ fontSize: 25 }}>{props.article.summary}</p>
            <h3 style={{ fontSize: 15, textAlign: "left" }}>{props.article.author}</h3>
        </div>
    </Link>
)