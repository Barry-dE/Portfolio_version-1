import image_1 from "../../assets/img/diogo-nunes-Wa9ilX9XYOI-unsplash-300.jpg";
import image_2 from "../../assets/img/13.jpg";
import "./hero.scss";

function Hero() {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-h1">
          <h1 data-animation="paragraph" className="hero-h1__text">
            I transform <span className="image"></span>
            <span data-animation="header" className="hero-h1__text--italic">
              ideas
            </span>
            <br /> into digital reality, <br /> one elegant s
            <span className="round-border">
              <img className="round-border__image" src={image_2} alt="" />
            </span>
            lution <br />
            <span className=".round-border"></span>at a time.
          </h1>
        </div>
        <div className="occupation">
          <span data-animation="header" className="occupation__code">
            Software Engineer
          </span>
          <span className="occupation__dash"></span>
          <span data-animation="header" className="occupation__write">
            Technical Writer
          </span>
        </div>
        <div className="Rotating-text">
          <figure>
            <img src={image_1} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Hero;
