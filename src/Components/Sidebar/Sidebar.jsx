import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sidebar.scss'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Sidebar() {
  return (
    <>
    <div className="navbar">
        <Link className='logo' to={'/'}>
          <img src="./images/logo-a.png" alt="" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="true" className={"home-link"} to={"/"}>
            <FontAwesomeIcon icon={faHome} color='#61DBFB'/>
          </NavLink>
          <NavLink exact="true" activeclassname="true" className={"about-link"} to={"/about"}>
            <FontAwesomeIcon icon={faUser} color='#61DBFB'/>
          </NavLink>
          <NavLink exact="true" activeclassname="true" className={"contact-link"} to={"/contact"}>
            <FontAwesomeIcon icon={faEnvelope} color='#61DBFB'/>
          </NavLink>
        </nav>

    <ul>
            <li>
              <a target="_blank" className='' rel='noreferrer' href="https://www.linkedin.com/in/agustinzarate/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a target="_blank" className='' rel='noreferrer' href="https://github.com/AgustinZarate">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a target="_blank" className='' rel='noreferrer' href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a target="_blank" className='' rel='noreferrer' href="#">
                <FontAwesomeIcon icon={faBehance} />
              </a>
            </li>
          </ul>
    </div>
    </>
  )
}

export default Sidebar