import React from 'react'
import "./portfolioList.scss";
const PortfolioList = ({ id, title, active, setState }) => {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setState(id)}>
            {title}
        </li>
    )
}

export default PortfolioList