import React, { useEffect } from 'react'

const Alert = ({show, msg, type,bg, removeAlert,list}) => {
    useEffect(() => {
      const timeout = setTimeout(() => {
        removeAlert();
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }, [list]);

  return <h6 className={`text-${type} bg-${bg} text-center my-2 p-1 mx-5 rounded`}>{msg}</h6>
}

export default Alert
