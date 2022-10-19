import React from 'react'
import ReactPlayer from 'react-player/lazy'
import './soundCloud.scss'

const SoundCloudPlayer = () => {
  const url =
    'https://soundcloud.com/dmts/newtrip-work-in-progress?si=55c8b24b32284fa7846c5717997e5a38&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'

  return (
    // Lazy load the YouTube player
    <div className='PlayerContainer'>
      <ReactPlayer
        url={url}
        width={300}
        height={300}
        controls
      />
    </div>
  )
}

export default SoundCloudPlayer