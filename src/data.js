import feedback from "./assets/jpeg/feedback.jpg"
import pent from "./assets/jpeg/pent.jpg"
import post from "./assets/jpeg/post.jpg"

const data = [
    { id: "1",
     name: "Pent API",
     title: "Pent is a hypothetical platform where users can sign up with their basic information and post reviews about apartments they have previously lived in",
     tools: ["Node.js", "Express.js"," MongoDB", "Postman"," Passportjs"],
     github: "https://github.com/emmabraboke/pent-api",
     link: "",
     image: pent,
     overview: "Pent is a hypothetical platform where users can sign up with their basic information and post reviews about apartments they have previously lived in",
    },

    { id: "2",
        name: "Post API",
        title: "Post API is a social media platform where users broadcast short posts. These posts cancontain text, photos. A user can follow and send direct message to another user",
        tools: ["Node.js", "Express.js"," MongoDB", "Postman"," Passportjs", "Cloudinary"],
        github: "https://github.com/emmabraboke/post-api",
        link: "",
        image: post,
        overview: "Post API is a social media platform where users broadcast short posts. These posts cancontain text, photos. A user can follow and send direct message to another user",
    },

    { id: "4",
        name: "Feedback",
        title: "Feedback is an CRUD application where users can create, update and delete reviews",
        tools: ["React.js", "CSS"],
        github: "https://github.com/emmabraboke/Feedback",
        link: "https://emmabraboke.github.io/Feedback/",
        image: feedback,
        overview: "Feedback is an CRUD application where users can create, update and delete reviews"
    }
]


export default data