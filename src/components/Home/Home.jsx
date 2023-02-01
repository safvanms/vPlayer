import React, { useRef, useState } from 'react'
import './Home.css'
import File from '../Video/video.mp4'
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'

export default function Home() {
  const [play, setPlay] = useState(false)
  const [resolution, setResolution] = useState('1080p')
  

  const videoRef = useRef(null)

  function playerControl() {
    setPlay((prevPlay) => !prevPlay)
    if (play === true) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  const handleResolutionChange = () => {

    if (resolution === '1080p') {
      setResolution('720p')
      videoRef.current.src = File.replace('1080p', '720p')
      videoRef.current.load()
    } 

    else if (resolution === '720p') {
      setResolution('1080p')
      videoRef.current.src = File.replace('720p', '1080p')
      videoRef.current.load()
    }   


  }


  
  return (
    
    <>

      <div className="v-container">
        <video ref={videoRef} src={File} controls />
      </div>
      <div className="buttons">
        <button className="playandpause" onClick={playerControl}>
          {play ? <FaPause /> : <FaPlay />}
        </button>

        <div>
          <label htmlFor="resolution">
            Quality <IoMdSettings />
          </label>
          <select
            id="resolution"
            value={resolution}
            onChange={handleResolutionChange}
          >
            <option value="1080p">High</option>
            <option value="720p">Medium</option >
          </select>
        </div>
      </div>
    </>
  )
}
