import React from "react";
import TopWidget from "./TopWidget";
import BottomWidget from "./BottomWidget";

const RightSide = () => {
  return (
<div className="w-full max-w-[836px] h-[689px] flex flex-col items-end gap-5 px-[29px">
  {/* Top Widget with separator */}
  <div className="w-full h-fit flex flex-col items-center gap-6">
    <TopWidget />
    <hr
      className="w-full max-w-[612px] h-[4px] border-0 rounded-[2.46px]"
      style={{
        background: `linear-gradient(
          180deg, 
          rgba(40, 40, 40, 0.1) 0%, 
          rgba(248, 248, 248, 0.1) 100%
        ),
        linear-gradient(
          0deg, 
          rgba(255, 255, 255, 0.05), 
          rgba(255, 255, 255, 0.05)
        )`,
        backdropFilter: "blur(9.837px)",
        boxShadow: "0px 4px 4px 0px #00000054",
      }}
    />
  </div>

  {/* Bottom Widget with separator */}
  <div className="w-full h-fit flex flex-col items-center gap-6">
    <BottomWidget />
    <hr
      className="w-full max-w-[612px] h-[4px] border-0 rounded-[2.46px]"
      style={{
        background: `linear-gradient(
          180deg, 
          rgba(40, 40, 40, 0.1) 0%, 
          rgba(248, 248, 248, 0.1) 100%
        ),
        linear-gradient(
          0deg, 
          rgba(255, 255, 255, 0.05), 
          rgba(255, 255, 255, 0.05)
        )`,
        backdropFilter: "blur(9.837px)",
        boxShadow: "0px 4px 4px 0px #00000054",
      }}
    />
  </div>
</div>

  );
};

export default RightSide;
