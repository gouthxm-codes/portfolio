import React from 'react'
import { useState } from 'react'
import "./contact.scss"
const Contact = () => {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://sites.psu.edu/curtmoore34/wp-content/uploads/sites/40170/2016/04/contactme.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact Me.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks for your message, I will reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact