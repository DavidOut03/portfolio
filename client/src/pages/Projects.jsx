import projects_data from "../projects.json";

const Projects = () => {

    return <section className="project-section">
     <h1 className="section-title moveIn bottom">My Projects</h1>
     <div className="project-section__content">

       {projects_data.map((project, key) => {
           let returned = null;

           if(project.adres != null) {
              returned = 
                <div className="project moveIn bottom" key={key}>
                        <h3 className="project__title">{project.projectName}</h3>
                    <div className="project__image-box">
                        <img src={"./projects-data" + project.thumbnail} alt="about me" className="project__image"/> 
                    </div>
                    <div className="project__button-box">
                            <a   a href={"" + project.adres} className="project__live" target="_blank"  rel="noreferrer">Live</a>
                            <a href={"" + project.github} className="project__github" target="_blank"  rel="noreferrer">Code</a>
                        </div>
                    <a href={"/projects/" + project.projectID} className="project__btn btn-5">Read more</a>
                </div>;
            } else {
              returned = 
                <div className="project moveIn bottom" key={key}>
                    <h3 className="project__title">{project.projectName}</h3>
                    <div className="project__image-box">
                        <img src={"./projects-data" + project.thumbnail} alt="about me" className="project__image"/> 
                    </div>
                    <div className="project__button-box">
                            <a href={"" + project.github} className="project__github" target="_blank"  rel="noreferrer">Code</a>
                        </div>
                     <a href={"/projects/" + project.projectID} className="project__btn btn-5">Read more</a>
                </div>;
            }

            return returned;
       })}
     </div>
    </section>;
}

export default Projects;

