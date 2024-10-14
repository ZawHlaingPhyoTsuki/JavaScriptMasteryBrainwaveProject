import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = ({ className }) => {
  return (
    <Section
      crossesOffset="lg:translate-y-[10]"
      crosses
      className={`${
        className || ""
      } !px-0 !py-10 flex flex-col gap-2 sm:gap-3 `}
    >
      <p className="caption text-n-3 container flex  items-center gap-10 text-center sm:text-left">
        Built following the tutorial: "Build and Deploy a Fully Responsive
        Website with Modern UI/UX in React JS with Tailwind" - JavaScript
        Mastery YouTube Channel
      </p>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved by&nbsp;
          <a className="text-n-2" href="mailto:tro2233zhp@gmail.com">tro2233zhp@gmail.com</a>
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={18} height={18} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
