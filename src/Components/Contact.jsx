import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h3> Send an Email</h3>
        <div className='contact-input'>
            <input type='email' placeholder='example@gmail.com'></input>
            <a href='#'>Contact</a>
        </div>
    </div>
  )
}

export default Contact