import "./home.css";
import About from "./About";
import Project from "./Project";

function Home() {
  return (
    <div className="font-raleway">
      <div id="parallax-section">
        <section>
          <div className="parallax-one">
            <h2 className="font-bold">University of Toronto</h2>
            <h2 className="font-bold">
              Engineering Students Consulting Association
            </h2>
          </div>
        </section>

        <section className="bg-blue-light">
          <About />
        </section>
        <section className="bg-blue-medium">
          <Project />
        </section>
      </div>
    </div>
  );
}

export default Home;
