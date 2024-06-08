import "./App.css";
import Pricing from "./Components/Pricing";

function App() {
  return (
    <>
      <div className="main_container">
        <div className="box_intro_container">
          <h2 className="headline_pricing">Simple, traffic-based pricing</h2>
          <p className="para_headline">
            Sign-up for our 30-day trial No credit card required
          </p>
        </div>
        <div className="box_2">
          <Pricing />
        </div>
        <div className="box_1">
          <p>
            Hard-coded by
            <a
              className="to_github_link"
              href="https://github.com/DepressedPenguin"
              target="blank"
            >
              {" "}
              DepressedPenguin
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
