import ProjectPreview from './ProjectPreview';

const ProjectList = (props) => {
    const { projects } = props;
    return (
        <ul className="project-list">
            {projects.map((project, index) => (
                <li key={index} className="list-item">
                    <a target="_blank" href={project.link} rel="noopener noreferrer">
                        <ProjectPreview project={project} />
                        <div className="screen">
                            <span className="project-description">{project.description}</span>
                            <div className="tags-wrapper">
                                {project.tags.map((tag, index) => (
                                    <span className="tag" key={index}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    )
}
export default ProjectList;