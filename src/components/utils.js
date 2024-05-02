
// export function saveLastFrame(
//     canvasRef,
//     lastFrame,
//     setLastFrame,
//     setShowWebcam,
//     showWebcam,
//     setShowImg
//   ) {
//     requestAnimationFrame(() => {
//       console.log(context);
  
//       if (!showWebcam && lastFrame) {
//         setShowImg(true);
//       } else {
//         setShowImg(false);
//       }
  
//       if (videoRef.current && canvasRef.current) {
//         context = canvasRef.current.getContext("2d");
//         context.drawImage(videoRef.current, 0, 0, 400, 300);
  
//         canvasRef.current.toBlob((blob) => {
//           setLastFrame(URL.createObjectURL(blob));
//           // lastFrame = blob.slice(); // Your edition here
//         });
//         setShowWebcam(false);
//         setShowImg(true);
//       }
//     }, [showWebcam]);
//   }