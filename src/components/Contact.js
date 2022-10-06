import { useState} from "react"
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  
  const params = {
    name,
    email,
    message,
    from_name: email
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await emailjs.send("service_s5vufl7","template_bsl4g9l",params,"jhj7EWAz5PiGlMAL7");
    setName("")
    setEmail("")
    setMessage("")

   
  }

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
        </h2>
        <div className="contact__form-container">
          <form className="contact__form" onSubmit={(e)=>handleSubmit(e)}>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={message}
                onChange={(e)=>{setMessage(e.target.value)}}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact