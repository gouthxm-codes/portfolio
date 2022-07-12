import React, { useEffect, useState } from 'react'
import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList'
import {
  webApp,
  MobileApp,
  web
} from "../data"
const Portfolio = () => {
  const [state, setState] = useState("web")
  const [data, setData] = useState([])
  const list = [
    {
      id: "web",
      title: "Websites"
    },
    {
      id: "web apps",
      title: "Web Apps"
    },
    {
      id: "mobile",
      title: "Mobile Apps"
    }
  ]

  useEffect(() => {
    switch (state) {
      case "web":
        setData(web)
        break;
      case "web apps":
        setData(webApp)
        break;
      case "mobile":
        setData(MobileApp)
        break;
      default:
        setData(web)
        break;
    }
  }, [state])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} active={state === item.id} setState={setState} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio