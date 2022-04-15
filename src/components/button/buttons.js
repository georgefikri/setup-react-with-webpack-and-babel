import React from "react";
import "./buttons.scss";

function button({ value, classes, type }) {
  return (
    <div className="btnContClass">
      <button data-testid="button" className={classes} type={type}>
        <span className="btnText">{value}</span>
      </button>
    </div>
  );
}

export const Button = button;
