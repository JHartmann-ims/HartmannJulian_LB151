import React from "react";
import shoes from "../assets/shoes.jpg";

const Content = () => {
  return (
    <div className="w-full h-screen pt-[90px]">
      <h1>Hello</h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Gebe Konsonant an</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <p>Ergebnis beim Drehen: </p>
    </div>
  );
};

export default Content;
