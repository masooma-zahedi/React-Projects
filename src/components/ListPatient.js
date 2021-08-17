import React, {useState, useEffect, useCallback} from 'react';
import {BsTrashFill} from "react-icons/bs"
import appointmentList from "./data.json";

const ListPatient = ({query}) => {
  const [appoint, setAppoint]= useState(appointmentList);
  // console.log(appoint);

  const handleOneAppoint = (id)=>{
    setAppoint(appoint.filter((item) => item.IdentityNumber !== id));
  }

  const handleLoadDefaultAppointment = () =>{
    setAppoint(appointmentList)
  }
  // :::::::::::: filter for searching
    const filterdAppointment = appoint.filter(
      item => {
        return(
          item.Name.toLowerCase().includes(query.toLowerCase()) ||
          item.Email.toLowerCase().includes(query.toLowerCase())
        )
      }
    )
    // :::::::::: fetching Data
    useEffect(()=>{
      const appoint = JSON.parse(localStorage.getItem("appoint"));
      if(appoint){
        setAppoint(appoint)
      }
    },[])

    // ::::::::::::: saving data
    useEffect(()=>{
      localStorage.setItem("appoint", JSON.stringify(appoint))
      // console.log(appoint);
    },[appoint])
    return (
      <>
        <div className="container mt-4">
          <button
            onClick={handleLoadDefaultAppointment}
            className="btn btn-success my-3"
          >
            Load Default Appointment
          </button>
          <ul className="container list-group list-group-flush  ">
            {filterdAppointment.map((appointmet) => (
              <li className="list-group-item " key={appointmet.IdentityNumber}>
                <div className="d-flex justify-content-between fw-bold">
                  <div className="text-primary">
                    <button
                      onClick={() =>
                        handleOneAppoint(appointmet.IdentityNumber)
                      }
                      className="text-white bg-danger border rounder mx-1 rounded"
                    >
                      <BsTrashFill
                        className=" "
                        style={{ cursor: "pointer" }}
                      />
                    </button>
                    ID :
                    <span className="text-dark">
                      {appointmet.IdentityNumber}
                    </span>
                  </div>
                  <div className="px-3">
                    {appointmet.AppointmentDate} {appointmet.Time}
                  </div>
                </div>

                <div className="text-primary">
                  Name :<span className="text-dark"> {appointmet.Name} </span>
                </div>
                <div className="text-primary">
                  Birthday :
                  <span className="text-dark"> {appointmet.BirthDate}</span>
                </div>
                <div className="text-primary">
                  Email :<span className="text-dark"> {appointmet.Email}</span>
                </div>
                <div className="text-primary">
                  details : <span className="text-dark">{appointmet.details}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}

export default  ListPatient;
