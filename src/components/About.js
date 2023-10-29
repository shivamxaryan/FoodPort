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
          src="https://media.licdn.com/dms/image/D4D03AQFtP7oJtCvcFw/profile-displayphoto-shrink_400_400/0/1698566909642?e=1704326400&v=beta&t=t3CF8eyF-l1IJxfGrn7tOW67chyzb5lR88drMovJDNE"
            alt="Profile Picture"
            className="w-[300px] rounded-full border-solid border-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;