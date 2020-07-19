import React from "react"

import {Categories} from "./Categories"
import {ArticlesList} from "./ArticlesList"

export const Dashboard = () => (
    <div className="dashboard">
        <ArticlesList />
        <Categories />
    </div>
)