import React, { useState } from 'react'
import "./works.scss"
const Works = () => {
    const [state, setState] = useState(0);
    const data = [
        {
            id: 1,
            icon: "https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png",
            title: "React Js",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rem",
            img: "https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/what-and-why-reactjs/Images/React%20Properties.jpg"
        },
        {
            id: 2,
            icon: "https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png",
            title: "Node Js",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rem",
            img: "https://www.simform.com/wp-content/uploads/2020/04/advantages-of-node.js.png"
        },
        {
            id: 3,
            icon: "https://expressjs.com/images/express-facebook-share.png",
            title: "Express",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rem",
            img: "https://devopedia.org/images/article/157/3299.1551338445.png"
        },
        {
            id: 4,
            icon: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg",
            title: "mongoDB",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rem",
            img: "https://www.traininginbangalore.com/images/infographics/mongodb-training-in-bangalore-tib.jpg"
        },
        {
            id: 5,
            icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
            title: "PHP",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rem",
            img: "https://qph.fs.quoracdn.net/main-qimg-bda79af5a45f0aba142ca21dfc6d6626"
        },
        {
            id: 6,
            icon: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
            title: "HTML",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rem",
            img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220630132824/HTML-Full-Form.jpg"
        },
        {
            id: 7,
            icon: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
            title: "CSS",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rem",
            img: "https://www.websiterating.com/wp-content/uploads/what-is-css.png"
        }
    ]

    const click = (position) => {
        position === "left" ? setState(state > 0 ? state - 1 : 2) : setState(state < data.length - 1 ? state + 1 : 0)
    }
    return (
        <div className="works" id="skills">
            <div className="slider" style={{ transform: `translateX(-${state * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftCont">
                                    <div className="imgCont">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Learn More</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" onClick={() => click("left")} className="arrow left" alt="" />
            <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" onClick={() => click()} className="arrow right" alt="" />
        </div>
    )
}

export default Works