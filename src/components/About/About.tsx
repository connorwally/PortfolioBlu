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
        I enjoy building online games and full-stack web applications with
        foundations for high user counts and scalability. My favourite language
        is C#.
      </div>
      <div className='about-text about-text-2'>
        I’m into Japanese cars and spend too much time playing games like
        Overwatch 2, Guild Wars 2 and Albion Online. I listen to house and
        trance.
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
