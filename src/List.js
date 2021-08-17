import React from 'react';

const List = ({people}) => {
  return (
    <>
        {
          people.map((person)=>{
            const {id,name,age,image} = person;
            return(
              <div key={id} className="d-flex w-100  pt-3">
                <img src={image} alt="img" className="rounded float-left mx-3 img-thumbnail rounded-circle align-middle"  style={{width:80, height:80}}/>
                <div className=" d-flex flex-column justify-content-center">
                <h6>{name}</h6>
                <p >{age} years old</p>

                </div>
              </div>
            )
          })
        }
    </>
  );
};

export default List;
