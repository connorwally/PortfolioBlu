import { Button } from "../Button";
import "./Projects.css";
import { ProjectMetaIcon } from "./ProjectMetaIcon";

type ProjectMetaIconConfig = {
  label?: string;
  iconSrc?: string;
  iconAlt?: string;
};

type ProjectProps = {
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  youtubeLink: string;
  reverse?: boolean;
  metaIcons?: ProjectMetaIconConfig[];
};

export function Project({
  name,
  image,
  imageAlt,
  description,
  youtubeLink,
  reverse,
  metaIcons,
}: ProjectProps) {
  return (
    <div className={`project${reverse ? " project--reverse" : ""}`}>
      <div className='project-image'>
        <img src={image} alt={imageAlt} />
      </div>
      <div className='project-text'>
        <h2 className='project-name'>{name}</h2>
        <p className='project-description'>{description}</p>
        {metaIcons && metaIcons.length > 0 && (
          <div className='project-meta-icons'>
            {metaIcons.map((metaIcon, index) => (
              <ProjectMetaIcon
                key={index}
                label={metaIcon.label}
                iconSrc={metaIcon.iconSrc}
                iconAlt={metaIcon.iconAlt}
              />
            ))}
          </div>
        )}
        <div className='project-actions'>
          <Button
            label='More'
            onClick={() => window.open(youtubeLink, "_blank")}
          />
        </div>
      </div>
    </div>
  );
}
