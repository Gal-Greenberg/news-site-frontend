import React, { useState } from "react"
import { ArticleCard } from "./ArticleCard"

const articles= [{title: "1", summary: "1", author: "1"}, {title: "2", summary: "2", author: "2"}, 
    {title: "3", summary: "3", author: "3"}, {title: "4", summary: "4", author: "4"}]

export const ArticlesList = () => {
    // const [articles, setArticles] = useState([]);

    // axios.get("/get_all_articles").then(res => {
    //     const data = res.data.all_events;
    //     setArticles(data);
    // })
    console.log(articles)

    return (
        <div className="articles">
            {articles.map(article => (
                <ArticleCard article={article} />
            ))}
        </div>
    )
}