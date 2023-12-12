import React, { useState } from 'react';
import Projects from '../../Projects';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
 
const Portfolio = (props) => {
  const [modal, setModal] = useState(false)
  const [modalData, setModalData] = useState('null')

  const OpenInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }
  const toggle = () => setModal(!modal);
  return(
    <>
    <div 
    className='opaque-background'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition:  {duration: .15}}}>
 <h1 className='portfolio-statement'>PROJECTS</h1>
 <div className='projects'>
    {Projects?.map((project) => {
      return(
        <div key={project.id}>
      <div className='project my-3'>
    <img  alt={project.alt} className='video' src={project.image} ></img> 
    <Button  color="secondary" onClick={() => {setModalData(project);
    toggle()}}>
      Click Me
    </Button>
      </div>
          <Modal  isOpen={modal} toggle={toggle} {...props}>
      <ModalHeader toggle={toggle}>{modalData.name}</ModalHeader>
      <ModalBody>
        {modalData.description}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => {OpenInNewTab(modalData.link)}}>
          View Site
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
      )
    })}
    </div>
  </div>
  </>
    )}
export default Portfolio;