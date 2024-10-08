import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import ProjectList from "./ProjectList";
import { LeftLine, RightLine } from "./design/Pricing";
import { ScrollParallax } from "react-just-parallax";
import { MouseParallax } from "react-just-parallax";


const Projects = () => {
  return (
    <Section className="overflow-hidden" id="projects">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <ScrollParallax isAbsolutelyPositioned>
            {/* <MouseParallax enableOnTouchDevice isAbsolutelyPositioned> */}
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
            {/* </MouseParallax> */}
          </ScrollParallax>
        </div>

        <Heading
          tag="Get started with Tsukuyomi"
          title="Highlighted Projects"
        />

        <div className="relative">
          <ProjectList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See More Projects
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
