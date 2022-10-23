import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.scss'
import AnimateLetters from '../AnimatedLetters/AnimateLetters'


function Home() {
   /* Efecto maquina de escribir  */
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

/* Animacion de texto */
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['A','g','u','s','t','i','n',' ','F.',' ','Z','a','r','a','t','e']

useEffect(() => {
  setTimeout(() => {
    setletterClass('text-animate-hover')
  }, 4000)
}, [])


  return (
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span> </span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
              {/* Hola, mi nombre es */} <br /> 
              
              <AnimateLetters letterClass={letterClass}  strArray={nameArray} idx={15} />

              <br /> <span className='job'>{text}</span> 
          </h1>
          <Link to={"/contact"} className="flat-button">CONTACTAME</Link>
        {/* colocar h2 bienvenida */}
        </div>
      </div>
  )
}

export default Home