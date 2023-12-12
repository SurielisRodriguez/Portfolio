import ResumePDF from "../assets/ResumePDF.pdf"

const Resume = () =>{
    return(
      <div 
      className="opaque-background"
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition:  {duration: .15}}}>
      <div className="resume-content">
        <a className="download-link"href={ResumePDF} download="ResumePDF"> Click to Download Resume </a>
      <main className="resume-container">
        <embed className="resume" src={ResumePDF}  />
    </main>
      </div>
      </div>
    )}
    export default Resume;