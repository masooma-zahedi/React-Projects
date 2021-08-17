import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Values from 'values.js'
import { motion } from 'framer-motion';

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values("#34de90").all(10))

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }
  return (
    <>
      <section className="container d-flex">
        <h3>color generate :  </h3>
        <form className="form-group" onSubmit={handleSubmit}>
          <input type="text" className={`form-group-input ${error ? "border border-danger" : "border"}`} value={color} onChange={(e)=>{setColor(e.target.value)}} placeholder="#338976" />
          <button className="btn btn-primary mx-2" type="submit">Submit</button>
        </form>
      </section>
      <motion.section
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:2}}
       className="bg-light container d-flex flex-wrap justify-content-center">
          {
            list.map((color, index) =>{
              console.log(color);
              return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
            })
          }        
      </motion.section>
    </>
  );
}

export default App
