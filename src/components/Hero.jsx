import React from "react";

export const Hero = () => {
  return (
    <section className="flex w-screen justify-center">
      <div>
        <img src="./Image1.png"></img>
      </div>
      <div className="w-10 h-10 rounded-md border-1">
        <img src="./Iconleft.svg" alt="" />
      </div>
      <div className="w-10 h-10 rounded-md border-1">
        <img src="./Iconright.svg" alt="" />
      </div>
    </section>
  );
};
