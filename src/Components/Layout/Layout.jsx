import React from 'react'
import { Link, NavLink } from "react-router-dom"
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contact from '../Contact/Contact'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return <>
    <main className='vh-100'>
{/* /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Layout NAV <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
        <nav className="navbar fixed-top layout-nav navbar-expand-lg text-white py-4">
            <div className="container-fluid list-unstyled container">
                    <Link className="navbar-brand text-white " to="home">START REACT</Link>
                    <button className="navbar-toggler bg-maincolor text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='me-2'>Menu</span>
                    <span className="navbar-toggler-icon pg-3 rounded  text-white"></span>
                    </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto ">
                        <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? ' nav-link active-link p-3 text-white' : 'nav-link p-3 text-white')} to="home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? ' nav-link active-link p-3 text-white' : 'nav-link p-3 text-white')} to="portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? ' nav-link active-link p-3 text-white' : 'nav-link p-3 text-white')} to="about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? ' nav-link active-link p-3 text-white' : 'nav-link p-3 text-white')} to="contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
{/* /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Layout Projects <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */ }
        <div className="layout-routes .bg-maincolor mt-5  row flex-column justify-content-center align-items-center">
            <div className='container '>
            <Outlet />
            </div>
        </div>
{/* /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Layout Footer <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */ }
        <footer className='layout-footer'>
            <main className='container py-5 row m-auto'>
                <div className='row m-auto'>
                    <div className='d-flex flex-column my-5 col-md-4 text-center'>
                        <h3>LOCATION</h3>
                        <span className='mb-3'>2215 John Daniel Drive</span>
                        <span>Clark, MO 65243</span>
                    </div>
                    <div className='d-flex flex-column my-5 col-md-4 text-center'>
                        <h3>AROUND THE WEB</h3>
                        <div className='d-flex justify-content-center'>
                            <div className='footer-icon me-2 p-3 border border-1 border-white rounded-circle d-flex justify-content-center align-items-center'><i className='fa-brands fa-facebook'></i></div>
                            <div className='footer-icon me-2 p-3 border border-1 border-white rounded-circle d-flex justify-content-center align-items-center'><i className='fa-brands fa-twitter'></i></div>
                            <div className='footer-icon me-2 p-3 border border-1 border-white rounded-circle d-flex justify-content-center align-items-center'><i className='fa-brands fa-linkedin'></i></div>
                            <div className='footer-icon p-3 border border-1 border-white rounded-circle d-flex justify-content-center align-items-center'><i className='fa-solid fa-globe'></i></div>
                        </div>
                    </div>
                    <div className='d-flex flex-column my-5 col-md-4 text-center'>
                        <h3>LOCATION</h3>
                        <span className='mb-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</span>
                    </div>
                </div>
               
            </main>
            <div className='text-center footer-footer'>
                    <blockquote className='py-3'>
                    Copyright © Your Website 2021
                    </blockquote>
               </div>
        </footer>
    </main>
  </>
}
