import { loading, profile } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-8 h-8 mr-4 rounded-full" src={profile} alt="profile" />
      <code className="font-code">Hello, I'm Zaw Hlaing Phyo ...</code>
    </div>
  );
};

export default Generating;
