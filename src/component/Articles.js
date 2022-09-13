import React from "react";
import { relatedArticle } from "./Data";

const Articles = () => {
  return (
    <>
      <br />
      <div className="TOP">
        <div></div>
        <h1>Related Articles</h1>
        <div></div>
      </div>
      <div className="articlegrid">
        {relatedArticle.map((food) => {
          const { img, header, discription } = food;
          return (
            <div className="foodcontainer">
              <img src={img} alt="img" />
              <h2>{header}</h2>
              <p>{discription}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Articles;
