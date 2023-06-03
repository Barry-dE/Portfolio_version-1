import { gsap } from "gsap";
import Splitting from "splitting";
import observeElement from "./ElementObserver";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const splitText = function () {
  const paragraph = document.querySelectorAll("[data-animation='paragraph']");
  const header = document.querySelectorAll("[data-animation='header']");

  paragraph.forEach((item) => {
    const line = Splitting({
      target: item,
      by: "words",
    });

    line.forEach((word) => {
      const wrappedLines = word.words;
      wrappedLines
        .map((textarr) => {
          `<span class="word_wrap">
            ${textarr.outerHTML}
          </span>`;
        })
        .join(" ");
      console.log(word);
    });
  });
};
