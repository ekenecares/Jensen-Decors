import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const Spans = ({ children }) => {
  const controls = useAnimationControls();
  const [isWorking, setIsWorking] = useState(true);

  const ani = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.54, 1)",
        "scale3d 0.75, 1.2, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.5, 1)",
        "scale3d(1, 1, 1)",
      ],

      transition: [0, 0.4, 0.6, 0.8, 0.9],
    });
    setIsWorking(false);
  };
  
  return (
    <motion.span
      className="spanner projer"
      animate={controls}
      onMouseOver={() => {
        if (isWorking) {
          ani();
        }
      }}
      //   onMouseOver={() => {
      //     if (isWorking) {
      //       rotate();
      //     }
      //   }}
      onAnimationComplete={() => setIsWorking(true)}
    >
      {children}
    </motion.span>
  );
};

export default Spans;
