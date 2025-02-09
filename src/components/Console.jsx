import React, { useRef, useState } from 'react';
import CustomAlert from './CustomAlert';

const Console = ({ consoles }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    setAlertMessage("Скопировано!");
    setShowAlert(true);
  };

  const codeRefs = useRef([]);

  const copyToClipboard = (index) => {
    if (codeRefs.current[index]) {
      const textToCopy = codeRefs.current[index].innerText;
      navigator.clipboard.writeText(textToCopy)
        .then(() => handleCopy())
        .catch(err => console.error("Ошибка копирования:", err));
    }
  };

  return (
    <>
      {showAlert && <CustomAlert message={alertMessage} onClose={() => setShowAlert(false)} />}
      {consoles.map((consoleData, index) => (
        <div key={index} className="view console bash" id='ctrl-view'>
          <samp>
            <h6 className='const'>{consoleData.title}</h6>
            <h6 className='btn-copy' onClick={() => copyToClipboard(index)}>
              Копировать
            </h6>
          </samp>
          <code ref={(el) => (codeRefs.current[index] = el)}>
            <pre>{consoleData.content}</pre>
          </code>
        </div>
      ))}
    </>
  );
};

export default Console;
