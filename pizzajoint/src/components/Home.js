import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotateZ: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
    transition: {
      delay: .5,
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit:{
    x:"-100vw",
    transition:{duration:.5}
  }
}

const buttonVariants = {
  hidden: {
    scale: 0,
    borderRadius: 0,
  },
  visible: {
    scale: 1,
    borderRadius: "40px",
    color: "#aa8799",
  },
  hover: {
    scale:1.1,
    boxShadow: "0 0 8px #fff",
    textShadow: "0 0 8px #fff",
    color:"#fff",
    transition:{
      yoyo: Infinity
    }
  },
};

const Home = () => {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="home container "
      >
        <motion.h2
          initial={{ fontSize: "10px", color: "fff", opacity: 0 }}
          animate={{
            fontSize: "50px",
            color: "#44fa23",
            opacity: 1,
          }}
        >
          Welcome to Pizza Joint
        </motion.h2>
        <Link to="/base">
          <motion.button
            className=""
            variants={buttonVariants}
            whileHover="hover"
          >
            Create Your Pizza
          </motion.button>
        </Link>
        <Loader/>
      </motion.div>
    </>
  );
};

export default Home;
