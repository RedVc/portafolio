interface ProjectCardProps{
    icon: string,
    title: string,
    color: string
}

const ProjectCard = ( { icon, title, color }: ProjectCardProps ) => {
    return(
        <div>
            <div>
                {icon}
            </div>

            <div>
                {title}
            </div>

            <div>
                {color}
            </div>
        </div>
    );
}

export default ProjectCard;