import React from 'react'
import startFrame from  '../../Assets/imgs/startFrame.png'
import '../Home/home.css'
import '../Home/home-media.css'

export default function Home() {
  return <>
  <div className='col-3 py-5 m-auto mt-5 '>
                <img className='w-100 ' src={startFrame} alt="" />
            </div>
            <div className='start-word-div-home position-relative col-6 pb-5 m-auto text-center text-white'>
                <h1 className='start-word-h1 text-white'>START REACT</h1>
                <li className='fa-solid fa-star fs-1'> </li>
            </div>
  </>
}
