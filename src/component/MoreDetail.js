import React from "react";
import { moreSeries } from "./Data";
const MoreDetail = () => {
  return (
    <>
      <div className="TOP">
        <div></div>
        <h1> More in this series </h1>
        <div></div>
      </div>
      <br />
      {moreSeries.map((food) => {
        const { img, header, discription } = food;
        return (
          <article className="food">
            <div className="foodimg">
              <img src={img} alt="" />
            </div>
            <div className="fooddetail">
              <h2>{header}</h2>
              <p>{discription}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default MoreDetail;
