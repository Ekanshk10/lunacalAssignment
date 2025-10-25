"use client";
import React, { useState } from "react";
import SideSvg from "./SideSvg";
import Header from "./Header";

const TopWidget = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div>
            Hi, I’m Ekansh Kanot, a 19-year-old Computer Science student with a
            strong passion for full-stack development and modern web
            technologies. I have hands-on experience building real-time
            applications and business tools using MERN stack, React Native,
            Tailwind, and PostgreSQL. I’m proficient in JWT authentication, API
            integrations, and Prisma ORM, and I enjoy creating efficient,
            scalable, and user-friendly solutions. I’m highly motivated by
            problem-solving, continuous learning, and taking on challenging
            projects. Beyond coding, I’m interested in smart manufacturing, and
            tech innovations, and I strive to leverage my skills to build
            impactful applications that solve real-world problems.
          </div>
        );
      case 1:
        return (
          <div>
            I have hands-on experience in full-stack development, building
            real-time web and mobile applications using the MERN stack and React
            Native. I am skilled in database management with PostgreSQL, API
            integrations, JWT authentication, and Prisma ORM. I have worked on
            projects involving business tools, chat apps, and productivity
            solutions, focusing on clean, scalable, and user-friendly
            implementations.
          </div>
        );
      case 2:
        return (
          <div>
            Peers and mentors have appreciated my problem-solving skills,
            eagerness to learn, and ability to implement real-world projects
            efficiently. I focus on building practical solutions and
            contributing meaningfully to every project I take on.
          </div>
        );
      default:
        return null;
    }
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

      <div className="flex flex-col gap-[27px]">
        {/* header */}
        <div style={{ flexShrink: 0 }}>
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div
          className="text-[20px] overflow-auto custom-scrollbar"
          style={{ color: "#969696" }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default TopWidget;
