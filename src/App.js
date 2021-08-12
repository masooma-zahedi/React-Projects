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
  const [alert, setAlert] = useState({show:true, msg: "", type:"",bg:""})

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){
      // display alert
      showAlert(true,"Please Enter Your Item", "danger", "success")
    }
    else if(name && editable){
      showAlert(true,"Item Edditting","warning","danger")
      // deal with edit
    } 
    else{
      showAlert(true, "Your Item Added", "dark", "success");
      const newItem = {id:nanoid(4), title:name}
      setList([...list, newItem]);
      setName("")

    }
  }
  const showAlert =(show=false, msg="",type="",bg="")=>{
    setAlert({show:show, msg:msg,type:type,bg:bg})
  }
  const clearItems = ()=>{
    showAlert(true, "Empty Box", "light", "danger")
    setList([])
  }
  const removeItem =(id)=>{
    showAlert(true,"Item Removed","danger","dark")
    setList(list.filter(item => item.id !== id))
  }
  return (
    <>
      <section className="container mt-5 ">
        <div className="main border p-3 shadow-lg">
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3 className="text-center my-3">Grocery Bud</h3>
          <form
            onSubmit={handleSubmit}
            className="form-group align-middle text-center"
          >
            <div className="input-group justify-content-center mb-2 w-75 mx-auto">
              <input
                type="text"
                className="form-control px-1 bg-light outline-0"
                placeholder="e.g eggs"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <button
                type="submit"
                value=""
                className="btn btn-primary btn-sm "
              >
                {editable ? "Edit" : "Submit"}
              </button>
            </div>
          </form>
          {list.length > 0 && (
            <div className="text-center">
              <List items={list} removeItem={removeItem} />
              <button
                onClick={clearItems}
                className=" text-danger border-0"
                style={{ backgroundColor: "transparent" }}
              >
                Clear Items
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App
