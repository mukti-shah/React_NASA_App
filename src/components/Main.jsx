import React from 'react'

export default function Main(props) {

    const {data} = props

  return (
    <div className='ImageContainer'>
        <img src={data.hdurl} alt="Mars " className='bgImage'/>
    </div>
    
  )
}
