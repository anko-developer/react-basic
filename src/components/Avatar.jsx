import React from 'react'

export default function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="avatar" />
      {isNew && <span className="new">NEW</span>}
      <div className="ddd"></div>
      <div className="gg"></div>
      <div>ggg</div>
      <p>하하</p>
    </div>
  )
}
