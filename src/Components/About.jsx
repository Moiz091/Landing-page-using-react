import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image}/>
        </div>
        <div className="about-text">
          <h1 style={{color:'black'}}> {props.title} </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About