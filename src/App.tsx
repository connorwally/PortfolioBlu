import { useState } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar.tsx";
import { Contact } from "./components/Contact.tsx";
import { Project } from "./components/Project.tsx";
import { Polaroid } from "./components/Polaroid.tsx";
import { layers, ParallaxLayer } from "./view/parallax.tsx";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const isHome = activeSection === "Home";

  const renderContent = () => {
    switch (activeSection) {
      case "Projects":
        return <Project />;
      case "About":
        return <Polaroid />;
      case "Contact":
        return <Contact />;
      case "Github":
        return (
          <nav>
            <h3>Github</h3>
            <p>
              <a
                href='https://github.com/your-github-username'
                target='_blank'
                rel='noreferrer'
              >
                View my GitHub profile
              </a>
            </p>
          </nav>
        );
      case "Home":
      default:
        return (
          <>
            <h1>Connor Wallis</h1>
            <h2>Software Engineer</h2>
          </>
        );
    }
  };

  return (
    <>
      <div className='background'>
        {layers.map((layer) => (
          <ParallaxLayer
            key={layer.className}
            className={layer.className}
            image={layer.image}
            speed={layer.speed}
          />
        ))}
      </div>
      <div
        className={`container ${
          isHome ? "container--home" : "container--section"
        }`}
      >
        <div className={`content content--${activeSection.toLowerCase()}`}>
          {renderContent()}
        </div>
        <Navbar
          activeSection={activeSection}
          onSelect={(section) => setActiveSection(section)}
        />
      </div>
    </>
  );
}

export default App;
