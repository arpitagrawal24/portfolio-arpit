import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles"
import { motion } from "framer-motion";
import {fadeIn} from "../../variants"
import WorkSlider from "../../components/WorkSlider";


const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-12">My Work</h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eligendi esse corrupti. Cum, quisquam! Nemo, ex? Quia doloribus tempora aspernatur.</p>
          </div>

          {/* slider */}
          <div className="w-full xl:max-w-[65%]">
          <WorkSlider/>
          </div>


        </div>
      </motion.div>
      <Bulb/>
    </div>
  )
}

export default Work;
