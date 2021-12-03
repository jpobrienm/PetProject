import React, {useRef, useEffect} from "react";
import RecordRTC from "recordrtc";
import { useBaseContext } from "./ContextProvider";


const VideoComponent = () => {

  const {state, dispatch} = useBaseContext()
  const videoRef = useRef();
  const recorderRef = useRef(null);
  const tagsRef = useRef(null);
  const nameRef = useRef(null);

  const getUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({video: true});
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.log(err);
    }
  };

 const handleRecording = async () => {
  getUserMedia();
  dispatch({type: 'swap-recording'});
  dispatch({type: 'null-blob'});
  const mediaStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true,});

  recorderRef.current = new RecordRTC(mediaStream, { type: "video" });
  recorderRef.current.startRecording();
};

  const handleStop = () => {
    dispatch({type: 'swap-recording'});
    videoRef.current.value = null;
    recorderRef.current.stopRecording(() => {
      let blob = recorderRef.current.getBlob()
      dispatch({type: 'add-blob', item: URL.createObjectURL(blob)});
    });
  };

  const gatherInfo = () => {
    let joinTags = tagsRef.current.value;
    let name = nameRef.current.value;
    dispatch({type: 'add-name', item: name.replace(/\s/g, "_")});
    dispatch({type: 'add-tags', item: joinTags.split(/[\s,]+/)})

    const request ={
      file: state.video_blob,
      name: state.request_name,
      tags: state.request_tags
    }

    console.log(request);

    if(request.file && request.name && request.tags){
      fetch(state.host_api + "/gif", {
        method: 'POST',
        body: JSON.stringify(request),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(dispatch({type: 'clear-request'}));
    }
  }

  useEffect(() => {
    getUserMedia();
  }, [state, videoRef, recorderRef])

  return (
    <div>
      <div className="middlepane">
        {!state.video_blob && <video muted className="camera" ref={videoRef} autoPlay></video>}
        {state.video_blob && <video className="camera"
                        ref={recorderRef}
                        src={state.video_blob}
                        controls>
                  </video>}
        <div>
          {!state.recording && <button className="RecordButton" onClick={handleRecording}>Iniciar Grabacion</button>}
          {state.recording && <button className="RecordButton" onClick={handleStop}>Detener Grabacion</button>}
          <input className = "MyInput" placeholder="Nombre del archivo" ref={nameRef}></input>
          <input className = "MyInput" placeholder="Etiquetas" ref={tagsRef}></input>
          <button className="saveButton" onClick={gatherInfo}>Guardar Archivo</button>
        </div>
      </div>
    </div>
    );
}
  
  export default VideoComponent;
