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
      className="HeadingMain"
      variants={marqueeVariants}
      animate="animate"
    >
      <h1 className="Headinglogo">CTIVE</h1>
      <img src="Frame.svg" alt="" className="headimage" />
      <h1 className="Headinglogo">SOCIAL MEDIA</h1>
      <h1 className="Headinglogo">B</h1>
    </motion.div>
  );
};

export default Heading;
