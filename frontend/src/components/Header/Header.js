import React from "react";
import classes from "./header.module.css";
import { name } from "file-loader";

export default function Header() {
    const user = {
        name: "John",
    };

    const cart = {
        totalCount: 10,
    };

    return <header className={classes.header}> {
        <div className={classes.container}>
            <Link to="/" className = {classes.logo}>
                Food for free
            </Link>
        </div>
    } </header>  
};