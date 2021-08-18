import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
const containerVariants={
  hidden:{x:"100vw"},
  visible:{
    x:0,
    transition:{
      // delay:.5,
      type:"spring",
      stiffness:105
    }
  },
  exit:{
    x:"-100vw",
    transition:{
      duration:1.5
    }
  }
}
const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 0 8px #fff",
    textShadow: "0 0 8px #fff",
    color: "#fff",
    transition: {
      yoyo: Infinity,
    },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="base container w-25">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{scale:1.2, originX:0}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div initial={{x:"-100vw"}} animate={{x:0}} className="next ">
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="rounded"
            >
              Next
              </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;