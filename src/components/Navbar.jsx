import React from "react";

export const Navbar = () => {
  return (
    <section>
      <navbar>
        <div className="flex ">
          <div className="w-[158px] h-9">
            <img src="./Logo.png"></img>
          </div>
          <div className="flex gap-10 justify-center items-center ml-[118px] w-[667px]">
            <a href="/">Home</a>
            <a href="blog">Blog</a>
            <a href="contact">Contact</a>
          </div>
          <div className="flex py-2 px-4 gap-3 items-center bg-[#F4F4F5] rounded-md">
            <div>
              <input
                type="search"
                placeholder="Search"
                className="bg-[#F4F4F5] "
              ></input>
            </div>
            <div>
              <img src="./search-outline.svg"></img>
            </div>
          </div>
        </div>
      </navbar>
    </section>
  );
};
