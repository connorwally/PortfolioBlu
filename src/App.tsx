import { useState } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar.tsx";
import { Contact } from "./components/Contact/Contact.tsx";
import { ProjectList } from "./components/Projects/ProjectList.tsx";
import { layers, ParallaxLayer } from "./view/parallax.tsx";
import About from "./components/About/About.tsx";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const isHome = activeSection === "Home";

  const renderContent = () => {
    switch (activeSection) {
      case "Projects":
        return <ProjectList />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Github":
        return (
          <nav>
            <h3>Github</h3>
            <p>
              <a
                href='https://github.com/connorwally'
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
            <div className='title-stack'>
              <h1 className='title-text title-text--bg home-title'>
                Connor Wallis
              </h1>
              <h1 className='title-text title-text--fg home-title'>
                Connor Wallis
              </h1>
              <hr className='title-shadow title-shadow--left'></hr>
              <hr className='title-shadow title-shadow--right'></hr>
            </div>
            <h2 className='subtitle'>Software Engineer</h2>
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
        key={activeSection}
        className={`container ${
          isHome ? "container--home" : "container--section"
        } ${isHome ? "container--reveal-up" : "container--reveal-down"}`}
      >
        <div
          key={activeSection}
          className={`content content--${activeSection.toLowerCase()} ${
            isHome ? "content--reveal-up" : "content--reveal-down"
          }`}
        >
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
