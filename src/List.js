import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, }) => {

  const handleEdit=()=>{

  }
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div
            key={id}
            className="border text-start px-4 w-75 mx-auto d-flex justify-content-between
            "
          >
            <p className="mb-0">{title}</p>
            <div className=" ">
              <button className="mx-2 border-0 outline-none" style={{backgroundColor:"transparent"}}>
                <FaEdit
                  onClick={handleEdit}
                className="text-success border-0" />
              </button>
              <button
                onClick={()=>removeItem(id)}
               className=" border-0 outline-none" style={{backgroundColor:"transparent"}}>
                <FaTrash className="text-danger" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
