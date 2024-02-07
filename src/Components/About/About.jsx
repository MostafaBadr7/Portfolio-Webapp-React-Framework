import React from 'react'
// import PageHeader from '../PageHeader/PageHeader'
import '../About/About.css'
import '../About/about-media.css'
export default function About() {
  return <>
  <main className='py-5 my-5'>
  <div className= 'start-word-div-about position-relative col-6 pb-2 m-auto text-center ' >
                <h1 className='start-word-h1-about pb-4'>ABOUT</h1>
                <li className='pageHeader-icon fa-solid fa-star fs-3 text-white'> </li>
  </div>  
  <div className='about-p-mainDiv text-white  m-auto  w-50    m-auto d-flex justify-content-between '>
    <div className='p-div-1 me-5 pe-5'>
        <p className='about-p'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <div className=' '>
        <p className='about-p'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
    </div>
  </div>
  </main>
  </>
}
