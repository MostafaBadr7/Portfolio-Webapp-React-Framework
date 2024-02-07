import React from 'react'

export default function PageHeader(props) {
  return (
            <div className= 'start-word-div position-relative col-6 pb-2 m-auto text-center ' >
                <h1 className={props.classs}>{props.word}</h1>
                <li className='pageHeader-icon fa-solid fa-star fs-3'> </li>
            </div>
  )
}
