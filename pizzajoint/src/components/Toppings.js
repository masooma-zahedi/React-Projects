import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: .5,
    },
  },
};

const buttonVariants = {
  init: { scale: 0 },
  visible: { scale: 1 },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 8px #fff",
    textShadow: "0 0 8px #fff",
    color: "#fff",
    transition: {
      yoyo: Infinity,
    },
  },
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container w-25 "
    variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{scale:1.2, color:"#f39223", originX:0}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          className="rounded"
          variants={buttonVariants}
          initial="init"
          animate="visible"
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;