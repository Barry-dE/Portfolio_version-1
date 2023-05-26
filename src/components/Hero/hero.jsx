import "./hero.scss";

function Hero() {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-h1">
          <h1 className="hero-h1__text">
            I transform <span className="image"></span>
            <span className="hero-h1__text--italic">ideas</span> <br /> into
            digital reality, <br /> one elegant solution <br />
            at a time.
          </h1>
        </div>
        <div className="occupation">
          <span className="occupation__code">Software Developer</span>
          <span></span>
          <span className="occupation__write">Technical Writer</span>
        </div>
        <div className="Rotating-text">
          <p>Rotating text fiels goes here</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
