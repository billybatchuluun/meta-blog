import React, { useState } from "react";
import { useContext } from "react";
import { SearchContextValue } from "@/context/SearchContext";

const Avatar = ({ age, imageSrc }) => {
  console.log(age, imageSrc);
  return <img src={imageSrc} alt="" srcset="" />;
};

const Profile = () => {
  const imageSrc = "https://randomimage.com";
  return <Avatar age={100} imageSrc={imageSrc} />;
};

export const Navbar = () => {
  const contextValue = useContext(SearchContextValue);
  return (
    <section>
      <navbar>
        <Profile />
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
            <input
              type="search"
              placeholder="Search"
              className="bg-[#F4F4F5]"
            ></input>
            <div>
              <img src="./search-outline.svg"></img>
            </div>
          </div>
        </div>
      </navbar>
    </section>
  );
};
