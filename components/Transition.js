import { motion } from "framer-motion";

const transitionVariant = {
  initial: {
    x: "100%",
    innerWidth: "100%"
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  }
}

const Transition = () => {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]" variants={transitionVariant} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.2, ease: 'easeInOut' }}>

      </motion.div>
    </>
  );
};

export default Transition;
