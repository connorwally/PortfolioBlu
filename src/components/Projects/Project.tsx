import { Button } from "../Button";
import "./Projects.css";

type ProjectProps = {
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  youtubeLink: string;
  reverse?: boolean;
};

export function Project({
  name,
  image,
  imageAlt,
  description,
  youtubeLink,
  reverse,
}: ProjectProps) {
  return (
    <div className={`project${reverse ? " project--reverse" : ""}`}>
      <div className='project-text'>
        <h2 className='project-name'>{name}</h2>
        <p className='project-description'>{description}</p>
        <Button
          label='More'
          onClick={() => window.open(youtubeLink, "_blank")}
        />
      </div>
      <div className='project-image'>
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}
