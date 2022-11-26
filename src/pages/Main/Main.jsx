import React, { useEffect} from "react";
import Loader from "../../components/Loader/Loader";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";


function App() {
  useEffect(() => {
    
    window.scrollTo({ top: 0, behavior: "smooth" });

    window.addEventListener("scroll", function (e) {
      if (!window.pageYOffset) {
        //add function to cancel the hash while navigate
        let loc = window.location.href,
          index = loc.indexOf("#");

        if (index > 0) {
          window.location = loc.substring(0, index);
        }
      }
    });
  }, []);

  return (
    <div className="App">

      <Loader/>
      <About/>
      <Projects />
      <Contact />
      <Footer />
    
    </div>
  );
}

export default App;
