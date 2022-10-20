import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.scss'


function Home() {
  const [loopNum, setLoopNum ] = useState(0);
  const [isDeleting, setisDeleting ] = useState(false);
  const [text, setText] = useState('');
  const toRotate = ['Web Developer','UX/UI Designer', 'Front End Developer jr.'];
  const period = 2000;
  const [delta, setDelta] = useState(100 - Math.random() * 300);

  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick();
    }, delta)

    return () => { clearInterval(ticker) }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta /2)
    }

    if(!isDeleting && updatedText === fullText){
      setisDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === ''){
      setisDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
      <div className="container home-page">
        <div className="text-zone">
          <h1>
              Hola, mi nombre es <br /> Agustin F. Zarate <br /> <span>{text}</span> 
          </h1>
          <Link to={"/contact"} className="flat-button">CONTACTAME</Link>
        {/* colocar h2 bienvenida */}
        </div>
      </div>
  )
}

export default Home