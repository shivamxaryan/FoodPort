import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className=" mt-24 mb-12">
      <div className="flex flex-col-reverse md:flex-row  mx-16 justify-between">
        <div className="flex flex-col w-full  md:w-3/5">
          <div className="justify-center md:justify-start gap-3 mt-4 md:mt-28 mb-7 ">
            <p className="text-4xl md:text-8xl font-bold text-[#3F4255]">
              Shivam
            </p>
          </div>
          <p className="text-md text-center md:text-left w-[100%] text-[#909090]">
            I'm a MERN Developer who loves to builds web applications.
            <br /> This application is made by me from scratch using ReactJs.
          </p>

          <div className="flex justify-center md:justify-start gap-5 my-4 ">
            <a
              href="https://www.linkedin.com/in/shivamaryan21/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-5xl text-[#0A66C2] hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
            <a
              href="https://github.com/shivamxaryan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-5xl hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
            <a
              href="https://leetcode.com/Shivam1Aryan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="text-5xl text-red-500 hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img
            src="data:image/jpeg;base64,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"
            alt="Profile Picture"
            className="w-[300px] rounded-full border-dotted border-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;