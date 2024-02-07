import React from 'react'
import cabin from '../../Assets/imgs/portfolio/cabin.png'


export default function Project(props) {
  return (
    <div className='col-md-4' onClick={()=>props.showImg(props.imgg, props.text)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                        <div
                  className=' studio-item position-relative  overflow-hidden'>
                              <img className='w-100 rounded' src={props.imgg} alt="" />
                              <div className='see-photo-icon-div position-absolute top-50 start-50  '>
                                    <i className='see-photo-icon text-white fa-solid fa-plus fa-6x  z-3'></i>
                              </div>
                              <div className='studio-item-after'></div>
                        </div>
                  </div>
  )
}
