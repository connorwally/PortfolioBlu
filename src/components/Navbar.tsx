import { Button } from "./Button";
import GithubIcon from "../assets/icons/Github.png";
import YoutubeIcon from "../assets/icons/PixelYoutube.png";
import XIcon from "../assets/icons/XIcon.png";

type NavbarProps = {
  activeSection: string;
  onSelect: (section: string) => void;
};

const SECTIONS = ["About", "Projects", "Home", "Contact"] as const;

const TWITTER_URL = "https://x.com/wallydotdev";
const GITHUB_URL = "https://github.com/connorwally";
const YOUTUBE_URL = "https://www.youtube.com/@wallydotdev";

export function Navbar({ activeSection, onSelect }: NavbarProps) {
  return (
    <nav className='navbar'>
      {SECTIONS.map((label) => (
        <Button
          key={label}
          label={label}
          onClick={() => onSelect(label)}
          isActive={activeSection === label}
        />
      ))}
      <Button
        iconSrc={YoutubeIcon}
        iconAlt='YouTube channel'
        href={YOUTUBE_URL}
        className='btn--icon'
      />
      <Button
        iconSrc={GithubIcon}
        iconAlt='GitHub profile'
        href={GITHUB_URL}
        className='btn--icon'
      />
      <Button
        iconSrc={XIcon}
        iconAlt='X profile'
        href={TWITTER_URL}
        className='btn--icon'
      />
    </nav>
  );
}
