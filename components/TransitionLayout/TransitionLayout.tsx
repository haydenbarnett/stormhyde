import { motion } from "framer-motion";
import styled from "@emotion/styled";

type TransitionLayoutProps = {
  key?: string;
  children: React.ReactNode;
};

const SlideIn = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.colors.blue};
  transform-origin: left;
  z-index: 100;
`;

const SlideOut = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.colors.blue};
  transform-origin: right;
  z-index: 100;
`;

export const TransitionLayout = ({ children, key }: TransitionLayoutProps) => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        {children}
      </motion.main>
      <SlideIn
        key={key}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "anticipate" }}
      />
      <SlideOut
        key={key}
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.6, ease: "anticipate" }}
      />
    </>
  );
};

export default TransitionLayout;
