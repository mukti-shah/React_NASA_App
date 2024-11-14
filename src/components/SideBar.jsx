import React from 'react'

export default function (props) {

    const {handleDisplayModal, data} = props

  return (
    <div className="sidebar">
        <div onClick={handleDisplayModal} className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>{data?.title}</h2>
            <div>
                <p className = "descTitle" >{data?.date}</p>
                <p className='desc'>{data?.explanation}</p>
            </div>
            <button onClick={handleDisplayModal}><i className="fa-solid fa-xmark"></i></button>
        </div>
    </div>
  )
}
