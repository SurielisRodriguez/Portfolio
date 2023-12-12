import { React, useState, useEffect } from "react";
import {SiReact, SiRubyonrails} from "react-icons/si"
import {DiRuby, DiJavascript, DiPostgresql} from "react-icons/di"
import AboutMePhoto from '../assets/AboutMePhoto.jpg'
import "../../styles/App.scss"
import "../../styles/AboutMe.scss"
import "../../styles/Media.scss"

const AboutMe = () =>{
  const [loopNum, setLoopNum] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(' ');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ " Web Developer", " Web Designer", " Software Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === ' ') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
return(
<>
  <div className="about-me-sections">
    <div className="opaque-background">
      <div className="image-included">
        <div className="page-content">
          <h2>Hi, I&apos;m Surielis Rodriguez</h2> 
          <span className="job-title"> {text}</span>
            <h2>Interested in Full-Stack Software Developer and Frontend Software Developer positions.</h2>
        </div>
      </div>
      <div className="img-container">
        <img alt="Standing in Flower Field" className="about-me-image"src={AboutMePhoto} />
      </div>
      <div className="about-me-title"> Languages and Technologies</div>
        <div className="tech-icons">
          <SiReact size="100px"/>
          <SiRubyonrails size="100px"/>
          <DiRuby size="100px"/>
          <DiJavascript size="100px"/>
          <DiPostgresql size="100px"/>
        </div>
      <div className="paragraph">
        <p>Welcome, my name is Surielis Rodriguez, and I am a Full Stack developer and a United States Marine Corps Veteran. I am enthusiastic about writing code and finding solutions to common day problems with the help of technology.</p>
        <p>My passion for coding stems from its ability to create anything imaginable through careful planning and implementation. As an individual who strongly believes in the power of technology for good, I am convinced that software development, under the right circumstances, can have a profound and positive impact on society.</p>
      </div>
    </div>
  </div>
</>
)}

export default AboutMe