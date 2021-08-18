import React from 'react'
import { motion, useCycle } from 'framer-motion'

const loaderVariant={
    animationOne:{
        x:[-20, 20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:.5
            },
            y:{
                yoyo:Infinity,
                duration:.25,
                ease:"easeOut"
            },
        }
    },
    animationTwo:{
        y:[0, -40],
        x:[0,0],
        backgroundColor:"#23fa99",
        transition:{
            yoyo:Infinity,
            duration:.25,
            ease:"easeOut"
        }
    }
}

export default function Loader() {
    const [animation, cycleAnimation] = useCycle("animationOne","animationTwo")
    return (
        <>
        <motion.div 
            variants={loaderVariant}
            animate={animation}
        className="loader">
        </motion.div>
        <div style={{cursor:"pointer"}} onClick={()=>cycleAnimation()}>Cycle Loader</div>
        </>
    )
}
