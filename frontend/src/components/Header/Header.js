import React from "react";
import { Link } from "react-router-dom"; // Add this import
import classes from "./header.module.css";

export default function Header() {
  const user = {
    name: "John",
  };

  const cart = {
    totalCount: 10,
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          <h1>Food for free</h1>
        </Link>
      </div>
    </header>
  );
}
