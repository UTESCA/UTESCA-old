import "./about.css";
import Button from "../../Components/Button/Button";
function About() {
  return (
    <div className="py-12 px-12">
      <div className="flex justify-center mb-5">
        <div className="text-6xl text-white font-bold">About Us</div>
      </div>

      <div id="container" className="flex justify-center my-9">
        <div className="text-transparent bg-clip-text bg-purple-light mr-5 text-5xl">
          {"["}
        </div>
        Join us if you are
        <div id="flip">
          <div>
            <div className="text-transparent bg-clip-text bg-purple-light">
              Students
            </div>
          </div>
          <div>
            <div className="text-transparent bg-clip-text bg-[#5433C2]">
              Companies
            </div>
          </div>
          <div>
            <div className="text-transparent bg-clip-text bg-blue-default">
              Everyone
            </div>
          </div>
        </div>
        <div className="text-transparent bg-clip-text bg-purple-light text-5xl">
          {"]"}
        </div>
      </div>
      <div className="text-center">
        <div className="flex justify-center">
          <div className="text-5xl mr-2 font-semibold text-transparent bg-clip-text bg-purple-light">
            1
          </div>
          <div className="text-2xl">
            We've worked to strengthen engineering student profiles for
            engineering & management consulting recruitment
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-5xl mr-2 font-semibold text-transparent bg-clip-text bg-purple-light">
            2
          </div>
          <div className="text-2xl">
            We're bringing new consulting firms to recruit actively from UofT
            Engineering, providing students with more internship and full-time
            opportunities
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-5xl mr-2 font-semibold text-transparent bg-clip-text bg-purple-light">
            3
          </div>
          <div className="text-2xl">
            We've helped engineering students enhance their learning by applying
            classroom principles to real world projects in engineering
            consulting contexts
          </div>
        </div>
        <div className="flex justify-around">
          <Button name="Learn More" size={2} />
          <Button name="Learn More" size={2} />
        </div>
      </div>
    </div>
  );
}

export default About;
