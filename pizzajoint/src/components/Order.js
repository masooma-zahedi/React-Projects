import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: .5,
    },
  },
};

const orderVariants={
  hidden:{scale:0},
  visible:{scale:1}
}


const Order = ({ pizza, setShowModal }) => {
  useEffect(()=>{
    const modal=()=>{
      setTimeout(()=>{
        setShowModal(true)
      },4000)
    }
    modal()
  },[setShowModal])


  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <h2 >Thank you for your order :)</h2>

      <motion.p variants={orderVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={orderVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Order;