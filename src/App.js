import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
   <div>
  {/* Here is the navbar */}
  <NavBar/>


  {/* Home section */}
  <Home/>

  {/* Here is the about section */}
  <About/>

  {/* Here will be the portfolio section */}
  <Portfolio/>

  {/* here is the experience section */}
  <Experience/>

  {/* Here is the contact section */}
  <Contact/>

  
  {/* Social links that appears in the side */}
  <SocialLinks/>
   </div>
  );
}

export default App;
