import React from 'react'
import '../Testimonials/Content.scss'
import { Link } from 'react-router-dom'
const Content = () => {
  return (
    <div className='content'>
        <div className="sec1">
        <h2>Many people don't get considered because of poorly written resumes. This is due to lack of technical know-how</h2>
        <h4>Jump on the train, create your resume now</h4>
        {/* <button>CREATE RESUME</button> */}
        <button><Link to='/Forms' id='djibouti'>CREATE RESUME</Link></button>
        </div>
        <div className="sec2">
        
            <img src="https://cdn.pixabay.com/photo/2021/03/09/19/36/resume-6082709_960_720.png" alt="advert" />
        </div>
        
    </div>
  )
}

export default Content