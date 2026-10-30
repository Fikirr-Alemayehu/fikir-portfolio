import { useTilt } from './useTilt';

function ProjectCard(props) {
    const { ref, style } = useTilt();

    return (
        <article className="project-card" ref={ref} style={style}>
            {props.featured && (
                <span className="featured-label">
                    Featured Project
                </span>
            )}

            <h3>{props.name}</h3>
            <p>{props.description}</p>

            <div className="technology-list">
                {(props.technologies ?? []).map((technology) => (
                    <span className="technology-tag" key={technology}>
                        {technology}
                    </span>
                ))}
            </div>

            {props.url && (
                <a
                    className="project-link"
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Project ↗
                </a>
            )}
        </article>
    );
}

export default ProjectCard;
