import React from "react";

export const About = () => {
  return (
    <section className="flex flex-col  px-16  bg-[#F6F6F7] h-[495px]">
      <div className="flex mt-[64px]">
        <div className="flex gap-6">
          <div className="flex flex-col w-[289px] gap-6">
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-lg font-bold">About</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div>
              <p>Email : info@jstemplate.net</p>
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center w-[521px]">
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="blog">Blog</a>
            </div>
            <div>
              <a href="">About</a>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img src="./FB.svg" alt="" />
            </div>
            <div>
              {" "}
              <img src="./Twitter.svg" alt="" />
            </div>
            <div>
              {" "}
              <img src="./Instragram.svg" alt="" />
            </div>
            <div>
              {" "}
              <img src="./Linkin.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-8 px-0 gap-18 items-center justify-between">
        <div className="flex gap-2.5">
          <div>
            {" "}
            <img src="./Logo.svg" alt="" />
          </div>
          <div>
            <p className="text-lg">
              Meta<span className="font-bold">Blog</span>
            </p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex">
          <p className="flex mr-4 ml-4">Terms of Use</p>
          <p className="flex mr-4 ml-4">Privacy Policy</p>
          <p className="flex mr-4 ml-4">Cookie Policy</p>
        </div>
      </div>
    </section>
  );
};
