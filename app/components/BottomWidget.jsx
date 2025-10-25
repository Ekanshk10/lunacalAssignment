"use client";

import React, { useRef, useState } from "react";
import SideSvg from "./SideSvg";

const BottomWidget = () => {
  const scrollRef = useRef(null);
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([
    "/image.jpg",
    "/image.jpg",
    "/image.jpg",
  ]);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const imageWidth = 180 + 30;
    container.scrollBy({
      left: direction === "right" ? imageWidth : -imageWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="w-full max-w-[720px] h-[316px] rounded-[18.89px] p-4 flex gap-[17px]"
      style={{
        background: "#363C43",
        boxShadow: "5.67px 5.67px 3.78px 0px #00000066",
      }}
    >
      <SideSvg />

      <div className="flex-1 flex flex-col gap-4">
        {/* Badge section and add image buttons  */}
        <div className="flex items-center justify-between w-[600px]">
          {/* badge */}
          <div
            className="bg-black text-white h-[62px] w-[149px] flex items-center justify-center rounded-[20px] text-[20px] font-medium"
            style={{
              boxShadow: "0px 4px 10px 2px #00000040 inset",
            }}
          >
            Gallery
          </div>

          {/* Add and  Scroll buttons */}
          <div className="flex gap-8 items-center">
            {/* Add Button */}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setImages([...images, url]);
                }
              }}
            />
            <button
              className="w-[131.32px] h-[46px] text-[12px] font-extrabold text-white"
              style={{
                backdropFilter: "blur(104.56px)",
                boxShadow: `
                  0px 3.26px 3.26px 0px #FFFFFF26 inset,
                  0px 0px 48.91px 0px #FFFFFF0D inset,
                  9px 10px 7.1px 0px #00000066,
                  -0.5px -0.5px 6.9px 0px #FFFFFF40
                `,
                borderRadius: "104px",
                cursor: "pointer",
              }}
              onClick={() => fileInputRef.current.click()}
            >
              + ADD IMAGE
            </button>

            {/* Scroll buttons */}
            <div className="flex gap-[18px]">
              {/* Left slide */}
              <button
                onClick={() => scroll("left")}
                className="w-[45px] h-[45px] rounded-full flex items-center justify-center 
                  hover:bg-[#303439] transition-all duration-300 
                  hover:-translate-y-[2px] hover:translate-x-[2px]"
                style={{
                  background:
                    "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                  boxShadow:
                    "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7",
                }}
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.99999H15.1944"
                    stroke="#6F787C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 15L1 8L8 1"
                    stroke="#6F787C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Right slide */}
              <button
                onClick={() => scroll("right")}
                className="w-[45px] h-[45px] rounded-full flex items-center justify-center 
                  hover:bg-[#303439] transition-all duration-300 
                  hover:-translate-y-[2px] hover:translate-x-[2px]"
                style={{
                  background:
                    "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                  boxShadow:
                    "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7",
                }}
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1945 8.00001L1.00001 8.00001"
                    stroke="#6F787C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.19446 1L15.1945 8L8.19446 15"
                    stroke="#6F787C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Images div to display image */}
        <div className="overflow-hidden w-[600px] h-[900px] flex items-center">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth h-[900px] items-center mt-6 pr-12"
            style={{
              scrollSnapType: "x mandatory",
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-[180px] h-[180px] shrink-0 overflow-hidden rounded-[24px] relative transition-all duration-400 transform hover:scale-110 hover:-translate-y-2 hover:translate-x-2 hover:-rotate-2 z-0 hover:z-20"
                style={{
                  scrollSnapAlign: "start",
                  background: "#2A2F33",
                  boxShadow: "0px 2px 6px 0px #00000050",
                }}
              >
                <img
                  src={src}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover rounded-[12px] grayscale hover:grayscale-0 transition-all duration-400"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomWidget;
