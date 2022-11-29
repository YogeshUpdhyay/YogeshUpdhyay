import "./App.css";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import colorPicker from './static/img/color-picker.png'

function App() {
  return (
    <>
      <Hero />
      <About />
      <section id="skills">
        <div className="skills">
          <div className="skill-card">
            <img src={colorPicker} alt="" className="skill-card-image" />
            <h3 className="skill-card-title">User Experience</h3>
            <p className="skill-card-subtext">
              We have got quite a few already made templates for 
              better project management that you can use now.
            </p>
            <button className="btn btn-dark btn-block">
              <p className="button-text">Find out More</p>
            </button>
          </div>
          <div className="skill-card">
            <img src={colorPicker} alt="" className="skill-card-image" />
            <h3 className="skill-card-title">User Experience</h3>
            <p className="skill-card-subtext">
              We have got quite a few already made templates for 
              better project management that you can use now.
            </p>
            <button className="btn btn-dark btn-block">
              <p className="button-text">Find out More</p>
            </button>
          </div>
          <div className="skill-card">
            <img src={colorPicker} alt="" className="skill-card-image" />
            <h3 className="skill-card-title">User Experience</h3>
            <p className="skill-card-subtext">
              We have got quite a few already made templates for 
              better project management that you can use now.
            </p>
            <button className="btn btn-dark btn-block">
              <p className="button-text">Find out More</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
