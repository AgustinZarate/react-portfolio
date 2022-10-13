import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'


function Home() {
  return (
      <div className="container home-page">
        <div className="text-zone">
          <h1>
              Hola, mi nombre es <br /> Agustin F. Zarate <br /> web developer
          </h1>
          <h2>React Frontend Developer jr</h2>
          <Link to={"/contact"} className="flat-button">CONTACTAME</Link>
        </div>
      </div>
  )
}

export default Home