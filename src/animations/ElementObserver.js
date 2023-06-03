const observeElement = function (element, options) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          resolve(entry.target);
        }
      });
    }, options);

    observer.observe(element);
  });
};

export default observeElement;
