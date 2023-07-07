import React, { useState } from 'react'
import ListItem from './ListItem'

export const DisplayImage = ({ colorPallette, uploaded }) => {
  return (
    <div className='main_content'>
      {uploaded !== null ? <div className='uploaded_image'><img src={uploaded} alt="uploaded-image" /></div> : <h2>Upload an image to see the magic 🪄</h2>}
      <div className='colors'>
        <ListItem colorPallette={colorPallette} />
      </div>
    </div>
  )
}
