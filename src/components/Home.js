import linkedin from "../assets/png/linkedin-ico.png"
import gitHub from "../assets/png/github-ico.png"
import twitter from "../assets/png/twitter-ico.png"


const Home = () => {
  const twitterUrl = "https://twitter.com/emmaspi" 
  const linkedinUrl = "https://linkedin.com/in/emmanuelbraboke"
  const githubUrl = "https://github.com/emmabraboke"

  return (
    <section id="home" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Emmanuel Braboke</h1>
        <div className="home-hero__info">
          <p className="text-primary">
           BACKEND DEVELOPER
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">Projects</a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href={linkedinUrl} className="home-hero__social-icon-link">
            <img
              src={linkedin}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href={githubUrl} className="home-hero__social-icon-link">
            <img
              src={gitHub}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href={twitterUrl} className="home-hero__social-icon-link">
            <img
              src={twitter}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
    
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
</section>
  )
}

export default Home