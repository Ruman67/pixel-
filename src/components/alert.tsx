import { useState } from 'react';
import './Alert.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

const Alert = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      
      <button onClick={() => setShow(true)}>Show Alert</button>
      {show && (
        <div className="alert">
          <span>This is an alert</span>
          <button className="alert-button" onClick={() => setShow(false)}>
            <IoMdCloseCircleOutline />
          </button>
        </div>
      )}
    </div>
  );
};

export default Alert;
