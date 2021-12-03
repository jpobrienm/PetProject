/*


  const [recording, setRecording] = useState(false);
  const [stream_, setStream] = useState(null);
  const [blob, setBlob] = useState(null);
  
export const getVideo = (reference) =>{
    navigator
    .mediaDevices
   .getUserMedia({video:{width: 1920, height:1080, frameRate: 60}})
   .then(stream =>{
     let video = reference.current;
     video.srcObject = stream;
     video.play();})
   .catch(err => {console.error(err);})
 }


 const handleRecording = async () => {
    dispatch({type: 'swap-recording'})
    setBlob(blob => null);
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 1920,
        height: 1080,
        frameRate: 30,
      },
      audio: true,
    });

    setStream(mediaStream);
    recorderRef.current = new RecordRTC(mediaStream, { type: "video" });
    recorderRef.current.startRecording();
  };

  const handleStop = () => {
    dispatch({type: 'swap-recording'})
    recorderRef.current.stopRecording(() => {
      setBlob(recorderRef.current.getBlob());
    });
  }; */