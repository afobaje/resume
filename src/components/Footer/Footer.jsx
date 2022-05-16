import React from 'react'
import '../Footer/footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <h2>Company</h2>
            <ul>
               <li>Our Policies</li>
               <li>Our Projects</li>
               <li>CSR</li> 
            </ul>
        </div>
        <p className='afo'>&copy;Made with love by {' '}<br/><a href="http://twitter.com/afobaje_" className='afoid'>{" "}Afobaje</a></p>
    </footer>
  )
}

export default Footer