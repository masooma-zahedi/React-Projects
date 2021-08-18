import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const modalVariants={
    hidden:{opacity:0},
    visible:{opacity:1},
    exit:{opacity:0}
}
const modal={
    initial:{y:"-100vh"},
    visible:{y:235}
}
export default function Modal({showModal, setShowModal}) {

  const handleClose=()=>{
    setShowModal(false)
  }
    return (
      <AnimatePresence exitBeforeEnter>
        {showModal && (
          <motion.div
            className="dropBack"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              variants={modal}
              initial="hidden"
              animate="visible"
              className="bg-light  mx-auto p-3 rounded text-center position-relative"
              style={{ width: 500 }}
            >
              <p className="font-weight-bold h6 text-dark mb-3">
                Want to order another pizza?
              </p>
              <Link to="/" className="mx-2">
                <button className="btn btn-outline-dark h6 font-weight-bold">
                  Start Again
                </button>
              </Link>
              <Link to="/checkOut">
                <button className="btn btn-outline-dark h6 font-weight-bold">
                  Check Out
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
}
