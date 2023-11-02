// Import necessary dependencies and components
import React, { useState } from "react";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../config/variants";
import CountUp from "react-countup";

// Import icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiExpress,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";

// Define data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-end Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: "Back-end Development",
        icons: [<FaNode />, <SiExpress />, <SiMongodb />, <SiPrisma />],
      },
      // {
      //   title: "UI/UX Design",
      //   icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      // },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2000 - 2099",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2000 - 2099",
  //     },
  //   ],
  // },
  // {
  //   title: "experience",
  //   info: [
  //     {
  //       title: "UX/UI Designer - XYZ Company",
  //       stage: "2000 - 2099",
  //     },
  //     {
  //       title: "Web Developer - ABC Agency",
  //       stage: "2000 - 2099",
  //     },
  //     {
  //       title: "Intern - DEF Corporation",
  //       stage: "2000 - 2099",
  //     },
  //   ],
  // },
  {
    title: "Education",
    info: [
      {
        title: "B.Tech (CSE) - Madan Mohan Malaviya University of Technology, Gorakhpur",
        stage: "2024",
      },
      {
        title: "12th - St. Dominic's Sr. Sec. School, Mathura",
        stage: "2019",
      },
      {
        title: "10th - St. Dominic's Sr. Sec. School, Mathura",
        stage: "2017",
      },
    ],
  },
];

const counterData = [
  {
    title: "Coding Problems solved",
    count: 1000,
  },
  {
    title: "Coding contests participated",
    count: 500,
  },
  {
    title: "Projects done",
    count: 10,
  },
];

// About component
const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <main className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-10">
        {/* Text */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex-1 flex flex-col justify-center"
        >
          <h2 className="h2">
            About <span className="text-accent">me.</span>
          </h2>
          <p className="max-2-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            I am a Computer Science and Engineering student at Madan Mohan
            Malviya University of Technology, with a passion for programming and
            a keen interest in exploring diverse CS fields. I thrive on solving
            real-world challenges through innovative coding solutions. With
            strong leadership skills and a collaborative mindset, I am driven by
            an insatiable curiosity to learn and adapt to new skills and
            technologies.
          </p>
          {/* Counters */}

          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div>
              <div className="flex text-center gap-1">
                {counterData.map((item, index) => {
                  return (
                    <div key={index} className="relative text-center xl:text-left">
                      <div className="text-3xl font-extrabold text-accent">
                        <CountUp start={0} end={item.count} duration={5} /> +
                      </div>
                      <div className="uppercase tracking-[1px] leading-[1.4] my-3">
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex} // Add the key prop here
                  className={`relative cursor-pointer capitalize xl:text-lg ${
                    index === itemIndex
                      ? "text-accent after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-2 after:-left-0 after:transition-all after:duration-300"
                      : "after:w-0"
                  }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <section className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <article
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white"
                >
                  {/* Title */}
                  <p className="mb-2 md:mb-0">{item.title}</p>
                  <p className="hidden md:flex">-</p>
                  <p>{item.stage}</p>
                  <article className="flex gap-x-4">
                    {/* Icons */}
                    {item.icons?.map((icon, itemIndexThree) => {
                      return (
                        <div
                          key={itemIndexThree}
                          className="text-2xl text-white"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </article>
                </article>
              );
            })}
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
