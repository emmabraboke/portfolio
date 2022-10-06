import projectImage from "../assets/jpeg/project-mockup-example.jpeg"
import feedback from "../assets/jpeg/pent.jpg"
import {Link} from "react-router-dom"
const SingleProject = ({data}) => {
  return (
    <>
    <div className="projects__content p-5"  style={{paddingBottom: "50px"}}>
        <div className="projects__row">
        <div className="projects__row-img-cont">
            <img
            src={data.image}
            alt="Software Screenshot"
            className="projects__row-img"
            style={{height: "390px", paddingBottom: "20px", borderRadius: "70px"}}
            loading="lazy" 

            />
        </div>
        <div className="projects__row-content">
            <h3 className="projects__row-content-title">{data.name}</h3>
            <p className="projects__row-content-desc">
              {data.overview}
            </p>
            <Link to={`project/${data.id}`}><p className="btn btn--med btn--theme dynamicBgClr">Details</p></Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default SingleProject