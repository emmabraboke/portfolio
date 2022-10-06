const AboutMe = () => {

  const handleScroll = (e) =>{
    e.preventDefault()
    const main = document.getElementById("contact")
    window.scrollTo({
        top: main.offsetTop-100,
        left: 0,
        behavior: "smooth"
    })
}
  return (
    <>
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
        
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hey! It's <strong> Emmanuel Braboke </strong> a result driven <strong>backend developer </strong>with experience building web based applications using
                Node.js and express.js. Competent in communication, collaboration, and also proficient in web
                API design.
              </p>
            </div>
            <p className="btn btn--med btn--theme dynamicBgClr" onClick={(e)=>handleScroll(e)}>Contact</p>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">Node.js</div>
              <div className="skills__skill">TypeScript</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">Python</div>
              <div className="skills__skill">React.js</div>
              <div className="skills__skill">MongoDB</div>
              <div className="skills__skill">AWS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default AboutMe