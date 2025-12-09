import { Polaroid } from "./Polaroid";
import "./About.css";
import meelupBeach from "@/assets/polaroids/meelup.png";
import mountBeauty from "@/assets/polaroids/mtbeauty.png";
import kiewaRiver from "@/assets/polaroids/mtbeautyriver.png";

export default function About() {
  return (
    <div className='about-content'>
      <div className='title-stack about-title'>
        <h1 className='title-text title-text--bg'>About</h1>
        <h1 className='title-text title-text--fg'>About</h1>
        <hr className='about-title-shadow title-shadow'></hr>
      </div>
      <div className='about-text about-text-1'>
        I’m a developer who enjoys game dev and full-stack projects, focusing on
        scalable systems and real-time multiplayer design. I build primarily in
        C#, .NET and Unity for full-stack, networking, and game mechanics, but
        I’m adaptable and comfortable switching into TypeScript or other
        languages and tools depending on which is the best fit. I like designing
        the mechanics and structures behind social, open-world, and multiplayer
        experiences.
      </div>
      <div className='about-text about-text-2'>
        Outside of coding, I’m into cars (JDM) and spend too much time in online
        games such as Overwatch 2, Guild Wars 2 and Albion Online. I listen to
        alot of house, trance and OST’s (Skyrim, Pokemon).
      </div>
      <div className='polaroids'>
        <Polaroid
          image={meelupBeach}
          imageAlt='Image of Meelup Beach, WA, Australia'
          label='Meelup Beach, WA'
        />
        <Polaroid
          image={mountBeauty}
          imageAlt='Image of Mount Beauty, VIC, Australia'
          label='Mount Beauty, VIC'
        />
        <Polaroid
          image={kiewaRiver}
          imageAlt='Image of Kiewa River, VIC, Australia'
          label='Kiewa River, VIC'
        />
      </div>
    </div>
  );
}
