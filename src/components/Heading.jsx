import "../styles/heading.css";
import { motion } from "framer-motion";

const Heading = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };
  return (
    <motion.div
      className="headingMain"
      variants={marqueeVariants}
      animate="animate"
    >
      <h1 className="headingLogo">CTIVE</h1>
      <img src="Frame.svg" alt="" className="headingImage" />
      <h1 className="headingLogo">SOCIAL MEDIA</h1>
      <h1 className="headingLogo">B</h1>
    </motion.div>
  );
};

export default Heading;
