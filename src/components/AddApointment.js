import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {BiCalendarPlus} from "react-icons/bi";
import appointmentList from "./data.json";
import { nanoid } from 'nanoid'


const AddApointment = () => {
    const [toggAppoint, setToggApoint] = useState(false)
    // const [aData, setAData] = useState(appointmentList)
    // const params = useParams();
    const history = useHistory();

    const handleAddAppoint =(e) =>{
        let aData = JSON.parse(localStorage.getItem("appoint"))
        // console.log(aData);
      e.preventDefault();
      let appName, aptDate, birthday, email, details, aptTime;
      appName = e.target.elements.patientName.value;
      aptDate = e.target.elements.aptDate.value;
      aptTime = e.target.elements.aptTime.value;
      birthday = e.target.elements.birthday.value;
      email = e.target.elements.email.value;
      details = e.target.elements.details.value;

      const newPateint = {
        IdentityNumber: nanoid(6),
        Name: appName,
        AppointmentDate: aptDate,
        Time: aptTime,
        BirthDate: birthday,
        Email: email,
        details: details,
      };
      if(aData){
          aData.push(newPateint);
          localStorage.setItem("appoint",JSON.stringify(aData))
      }
      
    }


    // useEffect(()=>{
    //   localStorage.setItem("appoint", JSON.stringify(appoint));
    // },[appoint])
    // ::::::::::::::: fetching Data:::::::

    // :::::::::::::::::; savig Data:::::::::::
    // useEffect(()=>{

    // },[])

    return (
    <div className="container ">
      <div className="card my-3 mx-auto " style={{ width: 500 }}>
        <button
            onClick={() => {setToggApoint(!toggAppoint)}}
            className={`card-header bg-primary text-light border   ${toggAppoint ? "rounded-t-md" : "rounded"}`}>
            <BiCalendarPlus /> Add Appointment
        </button>
        {
            toggAppoint && 
        
            <div className="card-body">
                {/* :::::::::::::::::::::::::::::::::::::::; */}
            <form className="form-group" onSubmit={handleAddAppoint}>
                <div className="from-group row text-muted mb-3">
                <label for="patientName" className="form-control-lable col-sm-3">
                    Patient Name
                </label>
                <input
                    name="patientName"
                    type="text"
                    id="patientName"
                    className="form-input-control col-sm-9 border border-muted"
                    placeholder="first & last Name"
                />
                </div>

                <div className="from-group row text-muted mb-3">
                <label for="aptDate" className="form-control-lable col-sm-3">
                    Apt Date
                </label>
                <input
                    name="aptDate"
                    type="date"
                    id="aptDate"
                    className="form-input-control col-sm-9 border border-muted"
                />
                </div>

                <div className="from-group row text-muted mb-3">
                <label for="aptTime" className="form-control-lable col-sm-3">
                    Time
                </label>
                <input
                    name="aptTime"
                    type="time"
                    id="aptTime"
                    className="form-input-control col-sm-9 border border-muted"
                />
                </div>

                <div className="from-group row text-muted mb-3">
                <label for="birthday" className="form-control-lable col-sm-3">
                    Birthday :
                </label>
                <input
                    name="birthday"
                    type="date"
                    id="birthday"
                    className="form-input-control col-sm-9 border border-muted"
                />
                </div>
                <div className="from-group row text-muted mb-3">
                <label for="email" className="form-control-lable col-sm-3">
                    Email :
                </label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    className="form-input-control col-sm-9 border border-muted"
                    placeholder="Email"
                />
                </div>

                <div className="from-group row text-muted mb-3">
                <label for="details" className="col-sm-3 ">
                    Appointment Notes
                </label>
                <textarea
                    name="details"
                    id="details"
                    rows="4"
                    cols="30"
                    className="col-sm-9 border border-muted "
                />
                </div>

                <div className="form-grop d-flex justify-content-end">
                <button  className="btn btn-primary  ">
                    Submit
                </button>
                </div>
            </form>
            </div>
        }       
      </div>
    </div>
    )
}

export default  AddApointment ;
