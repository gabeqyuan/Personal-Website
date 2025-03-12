import './projects.css'

function Projects({ name, description, github }) {
    return (
        <div className="project">
            <h3>{name}</h3>
            <p>{description}</p>
            <a target="_blank" href={github}><button className="github">
                <img className="github-inline" width="20"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                See Code
            </button></a>
        </div>
    )
}

export default Projects
