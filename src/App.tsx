import './App.css'
import {Navbar} from "./components/Navbar.tsx";

function App() {

  return (
    <>
        <div className="background">
            <div className="bg-1"></div>
            <div className="bg-2"></div>
            <div className="bg-3"></div>
            <div className="bg-4"></div>
        </div>
        <div className="container">
            <h1>Connor Wallis</h1>
            <h2>Software Engineer</h2>
        </div>
        <Navbar/>
    </>
  )
}

export default App
