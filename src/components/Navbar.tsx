import { Button } from "./Button";

type NavbarProps = {
  activeSection: string;
  onSelect: (section: string) => void;
};

const SECTIONS = ["About", "Projects", "Home", "Contact", "Github"] as const;

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
    </nav>
  );
}
