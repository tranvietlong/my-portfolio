import React from "react";
// import Typed from 'react-typed';
import myImage from "./../assets/home-main.svg";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import Typewriter from "./Typewriter";

function Main() {
  const handleEmailLinkClick = (event) => {
    event.preventDefault();
    const subjectTemplate = "Hello [Recipient]";
    const bodyTemplate =
      "Dear [Recipient],\n\nI hope this email finds you well.\n\nBest regards,\n[Your Name]";

    const recipient = "tranvietlong2k@gmail.com";
    const subject = encodeURIComponent(
      subjectTemplate.replace("[Recipient]", recipient)
    );
    const body = encodeURIComponent(
      bodyTemplate
        .replace("[Recipient]", recipient)
        .replace("[Your Name]", "Your Name")
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      id="main"
      className="flex flex-col sm:min-h-0 min-h-[calc(100vh-6.4rem)] pl-[3rem] lg:mt-2 lg:m-16 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
        <div className="flex flex-col justify-center sm:w-[70%] w-full sm:mr-5">
          <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
            Hi,
          </h1>
          <blockquote className="font-[800] text-[2rem] text-[#ec6e59;] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
            I'm
            <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#ec6e59;] relative inline-block">
              <span className="relative text-[#fffffff0] dark:text-[#20262E]">
                Long
              </span>
            </span>
          </blockquote>
          <div className="h-10 mt-4">
            <Typewriter />
          </div>
          <p className="dark:text-[#ccc] text-justify leading-loose pt-5 font-[400] mt-[-.8rem] text-custom-18 sm:text-[1rem] w-[90%] md:w-[95%] tm:w-full sm:w-full sm:mt-0">
            I am Tran Viet Long, a graduate with distinction in Information
            Systems Management from the IS-VNU,Hanoi. Throughout my academic
            journey, I excelled in my studies, achieving outstanding results and
            receiving recognition for my scientific research. I even had the
            opportunity to publish a report in an international scientific
            journal. Alongside my academic achievements, I gained practical
            experience as an intern at BookingCare Joint Stock Company, where I
            utilized WordPress to build blog websites and sell subscription
            cards. I have a strong aspiration to pursue a career as a software
            engineer specializing in web and mobile app development. I possess a
            diverse skill set, including expertise as a Full Stack Developer and
            Mobile App Developer. I am proficient in technologies such as
            ReactJS, MySQL, Java, Spring Boot, NextJS, Postgres, and PHP. I am
            committed to continuous learning, enhancing my self-learning
            abilities, adaptability to various environments, and refining my
            language and programming skills. With my current skill set, I am
            confident in my ability to meet and exceed the requirements in any
            given role.
          </p>
        </div>
        <div className="flex py-[10px] tm:mt-[40px] items-start mt-[-30px] tm:pr-0 sm:pr-0 sm:justify-between sm:flex-col">
          <div className="box">
            <div className="h-full justify-end flex items-center sm:justify-center">
              <img
                src={myImage}
                alt="main"
                className="h-[80%] min-h-[100px] min-w-[100px] tm:h-[36px] tm:mt-[200px] sm:min-h-[100px] sm:min-w-[100px] sm:ml-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="flex place-content-center mt-7 ">
          <div className="flex flex-row sm:flex-col gap-4">
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a rel="noreferrer" href="#" onClick={handleEmailLinkClick}>
              <AiFillMail size={40} className="cursor-pointer" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/longtranviet/"
              target="_blank"
            >
              <AiFillLinkedin size={40} className="cursor-pointer" />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/tranvietlong"
              target="_blank"
            >
              <AiFillGithub size={40} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
