import { useState } from "react";
import { profile } from "../assets";

const Generating = ({ className }) => {
  const [openIntro, setOpenIntro] = useState(false); // default to closed
  const toggleIntro = () => setOpenIntro(!openIntro);

  return (
    <div
      onClick={toggleIntro}
      className={`hover:scale-105 transition-transform px-6 bg-n-8/80 rounded-[1.7rem] py-3 ${
        className || ""
      } text-base scale-90 md:scale-100`}
      style={{
        height: openIntro ? "20rem" : "3.5rem",
        overflowY: openIntro ? "auto" : "hidden",
      }}
    >
      <div
        className={`flex ${
          openIntro ? "items-start" : "items-center justify-center"
        }}`}
      >
        <img
          className="w-8 h-8 mr-4 rounded-full"
          src={profile}
          alt="profile"
        />
        <code className="font-code" style={{ userSelect: "none" }}>
          {openIntro
            ? "I’m a Computer Science student majoring in Digital Technology Innovation, specializing in web development with a focus on React and full-stack applications. I’m passionate about building modern, responsive websites and applications that enhance user experience."
            : "Hello, I’m Zaw Hlaing Phyo ..."}
        </code>
      </div>
    </div>
  );
};

export default Generating;
