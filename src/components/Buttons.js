import { useState } from "react";


export default function Buttons({
    lastFrame,
    setLastFrame,
    setShowWebcam,
    showWebcam,
    setShowImg,
    send_img_login,
    send_img_logout,
    register_new_user_ok,
    downloadLogs,
    saveLastFrame,
    canvasRef
  }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
  
    const [zIndexAdmin, setZIndexAdmin] = useState(1);
    const [zIndexRegistering, setZIndexRegistering] = useState(1);
  
    const changeZIndexAdmin = (newZIndex) => {
      setZIndexAdmin(newZIndex);
    };
  
    const changeZIndexRegistering = (newZIndex) => {
      setZIndexRegistering(newZIndex);
    };
  
    const [value, setValue] = useState("");
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const resetTextBox = () => {
      setValue("");
    };
  
    return (
      <div className="buttons-container">
        <div
          className={`${
            isRegistering ? "visible" : "hidden"
          } register-text-container`}
          style={{
            zIndex: zIndexRegistering,
          }}
        >
          <input
            className="register-text"
            type="text"
            placeholder="Enter user name"
            value={value}
            onChange={handleChange}
          />
        </div>
        <div
          className="register-ok-container"
          style={{
            zIndex: zIndexRegistering,
          }}
        >
          <button
            className={`${
              isRegistering ? "visible" : "hidden"
            } register-ok-button`}
            onClick={async () => {
              setIsAdmin(false);
              setIsRegistering(false);
  
              changeZIndexAdmin(1);
              changeZIndexRegistering(1);
  
              setShowWebcam(true);
              setShowImg(false);
              register_new_user_ok(value);
            }}
          ></button>
        </div>
        <div
          className="register-cancel-container"
          style={{
            zIndex: zIndexRegistering,
          }}
        >
          <button
            className={`${
              isRegistering ? "visible" : "hidden"
            } register-cancel-button`}
            onClick={async () => {
              setIsAdmin(false);
              setIsRegistering(false);
  
              changeZIndexAdmin(1);
              changeZIndexRegistering(1);
  
              setShowWebcam(true);
              setShowImg(false);
            }}
          ></button>
        </div>
        <div className="login-container">
          <button
            className={`${
              isAdmin || isRegistering ? "hidden" : "visible"
            } login-button`}
            onClick={async () => {
              // saveFrameToDisk(canvasRef, lastFrame, setLastFrame);
              // setIsRegistering(true);
              send_img_login();
            }}
          ></button>
        </div>
        <div className="logout-container">
          <button
            className={`${
              isAdmin || isRegistering ? "hidden" : "visible"
            } logout-button`}
            onClick={() => {
              send_img_logout();
            }}
          ></button>
        </div>
        <div className="admin-container">
          <button
            className={`${
              isAdmin || isRegistering ? "hidden" : "visible"
            } admin-button`}
            onClick={() => {
              setIsAdmin(true);
              setIsRegistering(false);
  
              changeZIndexAdmin(3);
              changeZIndexRegistering(1);
            }}
          ></button>
        </div>
        <div
          className="register-container"
          style={{
            zIndex: zIndexAdmin,
          }}
        >
          <button
            className={`${isAdmin ? "visible" : "hidden"} register-button`}
            onClick={() => {
              setIsAdmin(false);
              setIsRegistering(true);
  
              changeZIndexAdmin(1);
              changeZIndexRegistering(3);
  
              saveLastFrame(
                canvasRef,
                lastFrame,
                setLastFrame,
                setShowWebcam,
                showWebcam,
                setShowImg
              );
              resetTextBox();
  
            }}
          ></button>
        </div>
        <div
          className="goback-container"
          style={{
            zIndex: zIndexAdmin,
          }}
        >
          <button
            className={`${isAdmin ? "visible" : "hidden"} goback-button`}
            onClick={() => {
              setIsAdmin(false);
              setIsRegistering(false);
  
              changeZIndexAdmin(1);
              changeZIndexRegistering(1);
            }}
          ></button>
        </div>
  
        <div
          className="download-container"
          style={{
            zIndex: zIndexAdmin,
          }}
        >
          <button
            className={`${isAdmin ? "visible" : "hidden"} download-button`}
            onClick={() => {
              setIsAdmin(false);
              setIsRegistering(false);
  
              changeZIndexAdmin(1);
              changeZIndexRegistering(1);
  
              downloadLogs();
            }}
          ></button>
        </div>
      </div>
    );
  }