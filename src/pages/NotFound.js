import notFound from "../assets/jpeg/NotFound.jpg"
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div className="notfound">
        <img alt="notfound" src={notFound} className="notfound_img"/>
        <p className="projects__row-content-title">Page Not Found</p>
        <Link to="/"><p class="btn btn--med btn--theme dynamicBgClr">Go Home</p></Link>
    </div>
  )
}

export default NotFound