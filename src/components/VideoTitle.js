import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className='absolute w-screen aspect-video bg-gradient-to-r from-black'>
        <h1 className="text-6xl font-bold text-white p-4 pt-[25%]">{title}</h1>
        <p className="text-lg font-bold w-1/2 p-4 text-white">{overview}</p>
       <div>
        <button className='border-white bg-black text-white rounded-lg p-2 m-2 font-bold w-20 hover:bg-white hover:text-black'>Play</button>
        <button className='border-white bg-black text-white rounded-lg p-2 m-2 font-bold w-30 hover:bg-white hover:text-black'> More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle