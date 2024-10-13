import { brainwaveSymbol, check, tsukuyomiSymbol } from "../assets";
import { skillIcons, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Section crosses id="skills">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">Web Developer & Tech Enthusiast</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Contact Me</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          {/* Skill icon bg circle part */}
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full  -translate-x-1/2 scale:75 md:scale-100 ">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full ">
              <motion.div
              initial={{ opacity: 0, y: 5,scale: 0.1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
               className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={tsukuyomiSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </motion.div>
            </div>

            <ul>
              {skillIcons.map((app, index) => (
                <motion.li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom 
                  }`}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: index * 45 }}
                  transition={{ duration: 1}}
                  viewport={{ once: true }}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </motion.li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
