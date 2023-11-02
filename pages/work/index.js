import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../config/variants";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="container mx-auto"
      >
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <h2 className="h2 xl:mt-12">
              My <span className="text-accent">Projects</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Here are some of my works.
            </p>
          </div>

          <div className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </div>
        </div>
      </motion.div>
      <Bulb />
    </div>
  );
};

export default Work;
