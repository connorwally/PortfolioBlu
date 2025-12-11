import { Project } from "./Project";

const spriteWarDescription =
  "A browser based, large-scale multiplayer 2D RTS where players command units, gather resources, and defend their castles. It uses client-side pathfinding, ECS-style server logic, and dynamic spawning to support smooth, competitive play between many players.";

const brawlChampionsDescription =
  "An unreleased 16v16 team-based class arena game where players choose from five roles and fight over three control points. It features a modular ability-based combat system and custom multiplayer networking with synchronized state across all clients.";

const projectJuneDescription =
  "A 2D top-down open-world PvP game where players choose weapons, fight monsters, level up, gather resources, and build. It features custom ability-driven combat and Mirror-based multiplayer, developed while learning Unity and networking fundamentals";

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
          actions={[
            {
              label: "Play",
              href: "https://spritewar.io",
            },
            {
              label: "More",
              href: "https://www.youtube.com/@wallydotdev",
            },
          ]}
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
          description={brawlChampionsDescription}
          youtubeLink='https://www.youtube.com/@wallydotdev'
          metaIcons={[
            { label: "Solo" },
            { label: "C#" },
            { label: "UNITY" },
            { label: "NGO" },
          ]}
        />
        <Project
          name='Project June'
          image='project1.png'
          imageAlt='Project 1 image'
          description={projectJuneDescription}
          youtubeLink='https://www.youtube.com/@wallydotdev'
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
