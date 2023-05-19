const ProjectPreview = ({ project }) => {
    return (
        <div className="project-preview">
            <h3 className="project-header">{project.name}</h3>
            <div className="img-wrapper">
                <img src={project.img} alt="project previews" />
            </div>
        </div>
    )
}
export default ProjectPreview;