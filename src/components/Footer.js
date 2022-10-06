import linkedin from "../assets/png/linkedin-ico.png"
import gitHub from "../assets/png/github-ico.png"
import twitter from "../assets/png/twitter-ico.png"


const Footer = ()=>{
  const twitterUrl = "https://twitter.com/emmaspi" 
  const linkedinUrl = "https://linkedin.com/in/emmanuelbraboke"
  const githubUrl = "https://github.com/emmabraboke"
    return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href={linkedinUrl}>
                <img
                  className="main-footer__icon"
                  src={linkedin}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href={githubUrl}>
                <img
                  className="main-footer__icon"
                  src={gitHub}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href={twitterUrl}>
                <img
                  className="main-footer__icon"
                  src={twitter}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Emmanuel Braboke</h4>
            <p className="main-footer__short-desc">
              Result driven backend developer with experience building web based applications using
              Node.js and express.js.
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; Copyright 2022. Made by
          <p>Emmanuel Braboke</p>
        </div>
      </div>
</footer>

    )
}


export default Footer