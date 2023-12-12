import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../components/assets/Portfolio/headerImg.png"
import { useState, useEffect } from "react";
import "../../styles/BannerStyles.css"
import {SiReact, SiRubyonrails} from "react-icons/si"
import {DiRuby, DiJavascript, DiPostgresql} from "react-icons/di"

export const AboutMe = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Full-Stack Web Developer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi, I'm Surielis Rodriguez 
              <span className="wrap"> {text}</span>
            </h1>
            <p>I am a military veteran leveraging over 4 year of experience in the IT industry. Now, I'm pursuing a career as a full stack software developer. I love collaborating with others to create innovative solutions and make a positive impact.</p>
            <button onClick={() => console.log("connect")}>Let's Connect</button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
    
    <div className="about-me-title"> Languages and Technologies</div>
        <div className="tech-icons">
          <SiReact size="100px"/>
          <SiRubyonrails size="100px"/>
          <DiRuby size="100px"/>
          <DiJavascript size="100px"/>
          <DiPostgresql size="100px"/>
        </div>
  </>
  );
};

export default AboutMe;