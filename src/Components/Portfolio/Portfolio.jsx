import React, { useState } from 'react'
import PageHeader from '../PageHeader/PageHeader'
import cabin from '../../Assets/imgs/portfolio/cabin.png'
import cake from '../../Assets/imgs/portfolio/cake.png'
import circus from '../../Assets/imgs/portfolio/circus.png'
import game from '../../Assets/imgs/portfolio/game.png'
import safe from '../../Assets/imgs/portfolio/safe.png'
import submarine from '../../Assets/imgs/portfolio/submarine.png'
import '../Portfolio/Portfolio.css'
import '../Portfolio/portfolio-media.css'
import Project from '../Project/Project'



export default function Portfolio() {
      const [projects, setProject] = useState([
            {text:'LOG CABIN',imgg:cabin},
            {text:'TASTY CAKE',imgg:cake},
            {text:'CIRCUS TENT',imgg:circus},
            {text:'CONTROLLER',imgg:game},
            {text:'LOCKED SAFE',imgg:safe},
            {text:'SUBMARINE',imgg:submarine}
      ]);

      function showImg(imgSrc, text){
            document.querySelector('.details-img').setAttribute('src',imgSrc );
            document.querySelector('.port-h1').innerHTML= text;

      }

      return <>
      <main className='py-5  bg-white position-relative '>
            <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog  ">
                        <div class="modal-content container px-4 m-auto    justify-content-center d-flex justify-content-center align-items-center      ">
                              <div class="modal-header border-0">
                                    <div className= 'start-word-div-modal position-relative  pb-2 m-auto text-center ' >
                                          <h1 className='port-h1'></h1>
                                          <li className='pageHeader-icon-port fa-solid fa-star fs-3'> </li>
                                    </div>
                              </div>
                              <div class="modal-body ">
                                    <img className='details-img img-fluid w-100 rounded mb-4' src={cabin} alt="" />
                                    <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione blanditiis earum ipsum eos debitis in at placeat pariatur ipsam neque!</p>
                              </div>
                              <div class="modal-footer border-0">
                                    <button type="button"  className='m-auto btn btn-lg bg-maincolor mb-5' data-bs-dismiss="modal"><i className='fa-solid fa-close'></i> Close window</button>
                              </div>
                        </div>
                  </div>
            </div>
                  <div className= 'start-word-div-port position-relative col-6 pb-2 m-auto text-center ' >
                        <h1 className='port-h1'>PORTFOLIO</h1>
                        <li className='pageHeader-icon-port fa-solid fa-star fs-3'> </li>
                  </div>
                  <div className='container row g-5 m-auto'>
                        { projects.map((project)=><Project showImg={showImg} text={project.text}  imgg={project.imgg} />)}
                  </div>
            </main>
      </>
      }
