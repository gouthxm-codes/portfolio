import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import "./intro.scss"
const Intro = () => {
    new Typewriter('#text', {
        strings: ['Hello', 'World'],
        autoStart: true,
      });
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgCont">
                    <img src="assets/logo.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, Iam </h2>
                    <h1>Goutham Vishnu</h1>
                    <h3>I'm a <Typewriter
                      options={{
                        strings: ['MERN Stack Dev', 'Freelancer','Student'],
                        autoStart: true,
                        loop: true,
                      }}
                    /></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro