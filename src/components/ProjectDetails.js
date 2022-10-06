import { useLocation, useParams, useSearchParams } from "react-router-dom"
import projectImage from "../assets/jpeg/project-mockup-example.jpeg"
import data from "../data"

const ProjectDetails = () => {
  const id = useParams().id
  const fields = data.find((key)=> key.id === id)
  return (
    <>
    <section className="project-cs-hero">
      <div className="project-cs-hero__content">
        <h1 className="heading-primary">{fields.name}</h1>
        <div className="project-cs-hero__info">
          <p className="text-primary">
            {fields.title}
          </p>
        </div>
        <div className="project-cs-hero__cta">
          <a href={fields.github} className="btn btn--bg" target="_blank">Code Link</a>
        </div>
      </div>
    </section>
    <section className="project-details">
      <div className="main-container">
        <div className="project-details__content">
          <div className="project-details__showcase-img-cont">
            <img
              src={fields.image}
              alt="Project Image"
              className="project-details__showcase-img"
            />
          </div>
          <div className="project-details__content-main">
            <div className="project-details__desc">
              <h3 className="project-details__content-title">Project Overview</h3>
              <p className="project-details__desc-para">
                {fields.overview}
              </p>
            </div>
            <div className="project-details__tools-used">
              <h3 className="project-details__content-title">Tools Used</h3>
              <div className="skills">
              {fields.tools.map((tool)=><div className="skills__skill">{tool}</div>)}
              </div>
            </div>
            <div className="project-details__links">
              <h3 className="project-details__content-title">See Live</h3>
              {fields.link && <a href={fields.link} className="btn btn--med btn--theme project-details__links-btn" target="_blank">Live Link</a>}
              <a href={fields.github} className="btn btn--med btn--theme-inv project-details__links-btn" target="_blank">Code Link</a>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  )
}

export default ProjectDetails