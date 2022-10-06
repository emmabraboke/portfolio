import profile from "../assets/png/profile.jpg"
import hamburger from "../assets/svg/ham-menu.svg"
import close from "../assets/svg/ham-menu-close.svg"
import { useEffect, useState } from "react"
import {Link, useNavigate, useLocation} from "react-router-dom"

const NavBar = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()
 
  const handleScroll = (e,id) =>{
    e.preventDefault()
    navigate("/")
    const main = document.getElementById(id)
    window.scrollTo({
        top: main.offsetTop-100,
        left: 0,
        behavior: "smooth"
    })

    setClick(!click)
    
  }
  const [click, setClick] = useState(false)

  const onClick = ()=>{
      setClick((prev)=> !prev)
  }
  
  // Detect screen size
  useEffect(()=>{
    if(window.innerWidth > 600){
      function handleResize(){
        setClick(false)
      }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    <header className="header">
    <div className="header__content">
      <div className="header__logo-container">
        <div className="header__logo-img-cont">
          <img
            src={profile}
            alt=""
            className="header__logo-img"
          />
        </div>
        <span className="header__logo-sub">Emmanuel Braboke</span>
      </div>
      <div className="header__main">
        <ul className="header__links">
          <li className="header__link-wrapper">
             <p className="header__link" onClick={(e)=> handleScroll(e,"home")}> Home </p>
          </li>
          <li className="header__link-wrapper">
            <p className="header__link" onClick={(e)=> handleScroll(e,"about")}>About </p>
          </li>
          <li className="header__link-wrapper">
            <p className="header__link" onClick={(e)=> handleScroll(e, "projects")}>
              Projects
            </p>
          </li>
          <li className="header__link-wrapper">
            <a href="./index.html#contact" className="header__link" onClick={(e)=> handleScroll(e, "contact")}> Contact </a>
          </li>
        </ul>
        <div className="header__main-ham-menu-cont">
          <img 
            src={hamburger}
            alt="hamburger menu"
            className={!click ? "header__main-ham-menu": "d-none"}
            onClick={()=>{onClick()}}
          />
          <img
            src={close}
            alt="hamburger menu close"
            className={!click ? "header__main-ham-menu-close d-none" : "header__main-ham-menu-close"}
            onClick={()=>{onClick()}}
          />
        </div>
      </div>
    </div>
    <div className={!click ? "header__sm-menu": "header__sm-menu header__sm-menu--active"}>
      <div className="header__sm-menu-content">
        <ul className="header__sm-menu-links">
          <li className="header__sm-menu-link">
            <p onClick={(e)=> handleScroll(e,"home")}> Home </p>
          </li>

          <li className="header__sm-menu-link">
            <p onClick={(e)=> handleScroll(e, "about")}> About </p>
          </li>

          <li className="header__sm-menu-link">
            <p onClick={(e)=> handleScroll(e, "projects")}> Projects </p>
          </li>

          <li className="header__sm-menu-link">
            <p onClick={(e)=> handleScroll(e, "contact")}> Contact </p>
          </li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default NavBar