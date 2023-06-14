import Splitting from "splitting";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import observeElement from "../../animations/ElementObserver";
import "./hero.scss";
import sculpture from "../../assets/img/sculpture.jpg";

export default function Hero() {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;

    if (headerElement) {
      Splitting({ target: headerElement, by: "chars" });

      const characters = headerElement.querySelectorAll(".char");

      gsap.set(characters, {
        opacity: 0,
        yPercent: 0,
        transformStyle: "preserve-3d",
      });

      const animation = gsap.to(characters, {
        opacity: 1,
        yPercent: 130,
        stagger: 0.07,
        duration: 0.8,
        ease: "back.out",
        overwrite: "auto",
      });

      observeElement(headerElement).then(() => {
        animation.restart();
      });

      return () => {
        animation.kill();
      };
    }
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="hero__paragraph">
          <h1 ref={headerRef} className="hero__text-h1" data-animation="header">
            A <br />
            Software <br /> Craftsman.
          </h1>
        </div>

        <div className="image">
          <img
            className="sculpture"
            src={sculpture}
            alt="sculpture"
            height={300}
          />
        </div>

        <div className="intro">
          <p className="paragraph" data-animation="paragraph">
            I am Barigbue Nbira (also known as PipScript). I am Software
            Developer and Technical Writer based in Port Harcourt, Nigeria,
            focused on transforming ideas into digital reality, one elegant
            solution at a time. I am interested in photography, Web3, DevOps,
            and Cloud. When I am not coding, I read, play video games, hangout
            with my friends or explore nature.
          </p>
        </div>
        <div>hi</div>
      </div>
    </div>
  );
}
