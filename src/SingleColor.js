import { animate, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils';
// import "App.css"
const SingleColor = ({rgb, weight,index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const hex = rgbToHex(...rgb)
  // console.log(bcg);
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const timeout = setTimeout(()=>{
      setAlert(false)
    },3000)
    return () => clearTimeout(timeout)
  }, [alert])
  return <motion.article 
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{duration:3}}
            onClick={()=>{
              setAlert(true)
              navigator.clipboard.writeText(hexValue)
            }}
            className="border" 
            style={{width:200 , height:200, backgroundColor:`rgb(${bcg})`, color:`${index > 10 && "#fff" }`}}
          >
            <p className="text-center mt-4">{weight}%</p>
            <p className="text-center h5"> {hexValue} </p>
            {alert && <p className="text-center text-secondary">colied to clipboard</p>}
          </motion.article>
}

export default SingleColor;
