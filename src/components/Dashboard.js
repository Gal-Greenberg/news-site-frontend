import React from "react"
import '../styles/styles.scss'

import { Link } from 'react-router-dom';

import {Header} from "./Header"
import {Categories} from "./Categories"
import {ArticlesList} from "./ArticlesList"

export const Dashboard = () => (
    <div>
        <Header whithButtons={true}/>
        <div className="dashboard">
            <ArticlesList />
            <Categories />
        </div>
    </div>
)