import { Project } from "./Project";

const spriteWarDescription =
  "Spritewar is a browser based MMORTS game built using Typescript on the front-end and C# + Dotnet on the backend. The backend is built for scale and can handle thousands of users concurrently.";

export function ProjectList() {
  return (
    <div className='projects-content'>
      <div className='title-stack projects-title'>
        <h1 className='title-text title-text--bg'>Projects</h1>
        <h1 className='title-text title-text--fg'>Projects</h1>
        <hr className='projects-title-shadow title-shadow'></hr>
      </div>
      <div className='projects-list'>
        <Project
          name='Spritewar.io'
          image='project1.png'
          imageAlt='Project 1 image'
          description={spriteWarDescription}
          youtubeLink='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          metaIcons={[
            { label: "Solo" },
            { label: "C#" },
            { label: ".NET" },
            { label: "TS" },
            { label: "Vue" },
            { label: "pixi.js" },
          ]}
        />
        <Project
          name='Brawl champions'
          image='project1.png'
          imageAlt='Project 1 image'
          reverse={true}
          description={spriteWarDescription}
          youtubeLink='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          metaIcons={[
            { label: "Solo" },
            { label: "C#" },
            { label: "UNITY" },
            { label: "NFE" },
          ]}
        />
        <Project
          name='Project June'
          image='project1.png'
          imageAlt='Project 1 image'
          description={spriteWarDescription}
          youtubeLink='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          metaIcons={[
            { label: "Solo" },
            { label: "C#" },
            { label: "UNITY" },
            { label: "Mirror" },
          ]}
        />
      </div>
    </div>
  );
}
