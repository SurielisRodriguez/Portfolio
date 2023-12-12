import React, { useState }from "react"
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"
import  {BsGithub, BsLinkedin} from "react-icons/bs"
import axios from "axios"

const ContactMe = () =>{
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(true);
  }
  const OpenInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }

  const formID = 'XVmGxkXU'
  const formSparkUrl = `https://submit-form.com/${formID}`

  const initialFormState = {
    email: '',
    name: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialFormState)
  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value })
  }
  
  const submitForm = async(event) => {
    event.preventDefault();
    await postSubmission();
  }
  const postSubmission = async () => {
    const payload = {
      ...formState
    }
    try {
      const result = await axios.post(formSparkUrl, payload)
      console.log(result)
    } catch(errors){
      console.log(errors)
    }}


    return(
      <div 
      className="background"
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition:  {duration: .15}}}>
           <div className='bird-container bird-container--one'>
        <div className='bird bird-1'>
          </div>  
          </div>  
        <div className='bird-container bird-container--two'>
        <div className='bird bird-2'>
          </div>  
          </div>  
        <div className='bird-container bird-container--three'>
        <div className='bird bird-3'>
          </div>  
          </div>  
        <div className='bird-container bird-container--four'>
        <div className='bird bird-4'>
          </div>  
          </div>  
      <div className="content">
      <div className="social-icons">
            <BsGithub onClick={() => {OpenInNewTab("https://github.com/surielisrodriguez")}} className="github"color="black" size="3%" />
            <BsLinkedin onClick={() => {OpenInNewTab("https://www.linkedin.com/in/surielis-rodriguez/")}}className="linkedin"color="black" size="3%" />
      </div>
    <Form action='formSparkUrl' onSubmit={submitForm} className="contact-me">
        <Col md={6}>
          <FormGroup>
            <Label for="name">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Example Name"
              type="name"
              value={formState.name}
              onChange={handleChange}
              className="name-input"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
              value={formState.email}
              onChange={handleChange}
              className="email-input"
            />
          </FormGroup>
        </Col>
        
      <FormGroup>
        <Label for="message">
          Message
        </Label>
            <Input
              id="message"
              name="message"
              placeholder="Insert message here"
              value={formState.message}
              onChange={handleChange}
              className="message-input"
              type="textarea"
            />
          </FormGroup>
        <Row>
      </Row>
    <Button className="contact-button" type="submit" disabled={disabled} onClick={onClick}>
      Contact Me
    </Button>
  </Form>  
  </div>  
  </div>
    )}
    
    export default ContactMe