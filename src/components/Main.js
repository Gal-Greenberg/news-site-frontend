import React from "react"
import '../styles/styles.scss'

import {Header} from "./Header"
import {Categories} from "./Categories"
import {ArticlesList} from "./ArticlesList"

export const Main = () => (
    <div>
        <Header whithButtons={true}/>
        <div className="dashboard">
            <ArticlesList />
            <Categories />
        </div>
    </div>
)