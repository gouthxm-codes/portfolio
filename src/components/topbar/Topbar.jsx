import React from 'react'
import "./topbar.scss"
import { Mail, Person } from '@material-ui/icons'
const Topbar = ({ open, setOpen }) => {
    return (
        <div className={"topbar " + (open && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Goutham</a>
                    <div className="itemCont">
                        <Person className="icon" />
                        <span>+91 0000000000</span>
                    </div>
                    <div className="itemCont">
                        <Mail className="icon" />
                        <span>ninja777official@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setOpen(!open)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar