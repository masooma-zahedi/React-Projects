import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert';
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { nanoid } from 'nanoid';

function App() {
  const [name, setName] = useState("");
  const [editable, setEditable] = useState(false)
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null)
  const [alert, setAlert] = useState({show:false, msg: "", type:""})

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){
      // display alert
      setAlert({show:true, msg:"hahaha",type:"no "})
    }
    else if(name && editable){
      // deal with edit
    } 
    else{
      const newItem = {id:nanoid(4), title:name}
      setList([...list, newItem]);
      setName("")

    }
  }
  return (
    <>
      <section className="container mt-5">
        <div className="main border shadow-lg">
          <h3 className="text-center my-3">Grocery Bud</h3>
          <form onSubmit={handleSubmit} className="form-group align-middle text-center">
            <div className="input-group justify-content-center mb-2 w-75 mx-auto">
              <input type="text" className="form-control px-1 border " placeholder="e.g eggs" value={name} onChange={(e)=>{setName(e.target.value)}} />
              <button type='submit' value="" className="btn btn-primary btn-sm ">
                {editable ? "Edit" : "Submit"}
              </button>
            </div>
          </form>
          {list.length > 0 && 
          <div className="text-center">
            <List items={list} />
            <button
              onClick={()=>{setList([])}}
             className=" text-danger border-0"  style={{backgroundColor:"transparent"}}>Clear Items</button>
          </div>
          }
        </div>
      </section>
    </>
  );
}

export default App
