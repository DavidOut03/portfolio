const Project = (params) => {
    return <div className="project"> 
            <h2 className="project__title">{params.projectID}</h2>
            <img src="./images/Vector1.png" alt="" className="project__image"/>
            <a className="btn-5" href={"/projects/" + params.projectID}>Read more</a>
    </div>
}

export default Project;