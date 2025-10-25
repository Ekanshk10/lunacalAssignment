"use client";
import { useState, useRef, useEffect } from "react";

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = ["About Me", "Experience", "Recommended"];
  const [sliderStyle, setSliderStyle] = useState({});
  const tabRefs = useRef([]);

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const { offsetLeft } = tabRefs.current[activeTab];
      setSliderStyle({
        left: `${offsetLeft}px`,
      });
    }
  }, [activeTab]);

  return (
    <div
      className="relative flex items-center rounded-[23px] px-4"
      style={{
        width: "614px",
        height: "62px",
        background: "#171717",
        boxShadow: "0px 4.96px 12.4px 2.48px #00000040 inset",
      }}
    >
      {tabs.map((tab, index) => (
        <button
          key={index}
          ref={(el) => (tabRefs.current[index] = el)}
          className="flex-1 relative overflow-hidden font-medium text-[16px] py-2 z-10 group"
         style={{ color: activeTab === index ? "white" : "#A3ADB2" }}
          onClick={() => setActiveTab(index)}
        >
          {/* minimal overlay while hovering using span*/}
          {activeTab !== index && (
            <span
              className="absolute top-0 left-0 w-0 max-w-[180px] bg-white h-[40px] opacity-20 transition-all duration-700 group-hover:w-full rounded-[16px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%)",
              }}
            />
          )}
          <span className="relative">{tab}</span>
        </button>
      ))}

      {/* Slider on the tab */}
      <div
        className="absolute h-[6px] rounded-[16px] transition-all duration-300"
        style={{
          ...sliderStyle,
          width: "195px",
          height: "49px",
          background: "#28292F",
          boxShadow:
            "13.49px 16.87px 67.47px 8.43px #0A0A0A, -8.43px -16.87px 50.6px -16.87px #485B71",
        }}
      />
    </div>
  );
};

export default Header;
