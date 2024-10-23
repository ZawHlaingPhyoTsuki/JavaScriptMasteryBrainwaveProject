import { check } from "../assets";
import { project } from "../constants";
import Button from "./Button";

const ProjectCard = ({ item }) => (
  <div className="flex flex-col justify-between w-[19rem] max-lg:w-[36rem] h-[40rem] p-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-[22rem]">
    {/* Title & Description */}
    <div>
      <h4 className={`h4 mb-4 ${item.color} `}>{item.title}</h4>
      <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>
    </div>

    {/* Button & Features */}
    <div>
      <Button className="w-full mb-6" target="_blank" href={item.url} white={!!item.price}>
        See Project
      </Button>

      <ul>
        {item.features.map((feature, index) => (
          <li key={index} className="flex items-start py-5 border-t border-n-6">
            <img src={check} width={24} height={24} alt="Check" />
            <p className="body-2 ml-4">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProjectList = () => (
  <div className="flex justify-center gap-[1rem] max-lg:flex-wrap">
    {project.map((item) => (
      <ProjectCard key={item.id} item={item} />
    ))}
  </div>
);

export default ProjectList;
