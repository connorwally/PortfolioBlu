import { Project } from "./Project";

export function ProjectList() {
  return (
    <div className='projects-content'>
      <div className='title-stack'>
        <h1 className='title-text title-text--bg'>Projects</h1>
        <h1 className='title-text title-text--fg'>Projects</h1>
      </div>
      <div className='projects-list'>
        <Project
          name='Project 1'
          image='project1.png'
          imageAlt='Project 1 image'
          description='Project 1 description'
          youtubeLink='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        />
      </div>
    </div>
  );
}
