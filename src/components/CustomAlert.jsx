import React, { useEffect, useState } from "react";

const CustomAlert = ({ message, onClose }) => {
const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`custom-alert ${show ? "show" : ""}`}>
      <span className="ico-success">{message}</span>
    </div>
  );
};

export default CustomAlert;
