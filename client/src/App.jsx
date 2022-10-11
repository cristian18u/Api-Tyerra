import { createFFmpeg } from '@ffmpeg/ffmpeg'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // async function getUser() {
  //   fetch('http://localhost:3000/user').then(res => res.json()).then(res => console.log(res))
  // }
  // const [videoSrc, setVideoSrc] = useState("");
  const ffmpeg = createFFmpeg({ log: true })
  useEffect(() => {
    ffmpeg.load()
  }, [])

  function createVideo() {
    console.log('a')
  }
  return (
    <div className="App">
      {/* <video src={videoSrc} controls></video><br /> */}
      {/* <input type="file" id="video" accept="video/*" onChange={handleChangeImage}></input>
      <p></p>
      <input type="file" id="sound" accept="sound/*" onChange={handleChangeSound}></input> */}
      <button onClick={createVideo}>Create a video from the things above!</button>

      {/* <button onClick={getUser}>Obteneruser</button> */}
    </div>
  )
}

export default App
