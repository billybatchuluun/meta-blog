import React from "react";

export const ContactUs = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col justify-center gap-5 items-center">
        <div className="flex flex-col w-[624px] gap-5">
          <div>
            <p className="text-4xl">Contact Us</p>
          </div>
          <div>
            <p className="text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
        </div>
        <div className="flex py-2.5 px-0 gap-12 items-center">
          <div className="flex flex-col gap-2.5 border-2 border-[#E8E8EA] p-4 rounded-xl w-[294px]">
            <div>
              <p className="font-bold">Address</p>
            </div>
            <div className="w-[260px]">
              <p className="text-[#696A75]">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 border-2 border-[#E8E8EA] p-4 rounded-xl w-[295px]">
            <div>
              <p className="font-bold">Contact</p>
            </div>
            <div className="w-[160px]">
              <p className="text-[#696A75]">313-332-8662 info@email.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[663px] bg-[#F6F6F7] justify-center">
        <div className="flex flex-col items-center pt-[29px] pr-[130px] pb-[26px] pl-[35px] gap-6">
          <div>
            <p className="text-xl">Leave a Message</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex pt-2 pr-2 pb-2 pl-5 w-[225px] h-[38px] border-[1px] border-[#DCDDDF] rounded-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex pt-2 pr-2 pb-2 pl-5 w-[225px] h-[38px] border-[1px] border-[#DCDDDF] rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Sublect"
                  className="flex pt-2 pr-2 pb-2 pl-5 w-[478px] h-[38px] border-[1px] border-[#DCDDDF] rounded-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Write a message"
                  className="flex pt-2 pr-2 pb-2 pl-5 w-[478px] h-[134px] border-[1px] border-[#DCDDDF] rounded-md"
                />
              </div>
              <div className="flex bg-blue ">
                <button className="bg-[#4B6BFB] text-white py-[10px] px-4 rounded-xl">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
