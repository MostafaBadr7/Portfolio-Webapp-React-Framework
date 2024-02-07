import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import '../Contact/contact.css'
import '../Contact/contact-media.css'
export default function Contact() {
  return <>
    <div className='bg-white py-5'>
            <div className= 'start-word-div-contact position-relative col-6 pb-2 m-auto text-center ' >
                    <h1 className='contact-h1  pb-3 '>CONTACT ME</h1>
                    <li className='pageHeader-icon-contact fa-solid fa-star fs-3'> </li>
            </div>
                    <div className=' form-div m-auto px-5 py-5'>
                        <div class=" mb-5 form-group">
                            <input type="text" class="form-control w-100 pb-3 fs-4 text-muted  border border-bottom-1 border-top-0 border-end-0 border-start-0"  placeholder="Name "/>
                        </div>
                        <div class=" mb-5 ">
                            <input type="email" class="form-control w-100 pb-3 fs-4 text-muted  border border-bottom-1 border-top-0 border-end-0 border-start-0"  placeholder="Email Address "/>
                        </div>
                        <div class=" mb-5">
                            <input type="number" class="form-control w-100 pb-3 fs-4 text-muted  border border-bottom-1 border-top-0 border-end-0 border-start-0"  placeholder="Phone Number "/>
                        </div>
                        <div class=" mb-5">
                            <textarea  type="text-area"form-control class="form-control w-100 pb-3 fs-4 text-muted  border border-bottom-1 border-top-0 border-end-0 border-start-0"  placeholder="Message "></textarea>
                        </div>
                        <button className='btn-send btn bg-maincolor btn-lg'>Send</button>
                    </div>
    </div>
  </>
}
