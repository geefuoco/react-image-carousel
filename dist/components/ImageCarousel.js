"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const ImageCarousel = (_ref) => {
  let { arrayOfImageObjects, transitionTime } = _ref;
  const [count, setCount] = (0, _react.useState)(0);
  const imageObjects = arrayOfImageObjects;
  (0, _react.useEffect)(() => {
    const animate = setInterval(() => {
      animateCarousel();
    }, transitionTime);
    return () => clearInterval(animate);
  }, [count]);

  const animateCarousel = () => {
    const images = document.querySelectorAll(".carousel-image");

    if (count === images.length) {
      images[count - 1].classList.toggle("hidden");
      images[0].classList.toggle("hidden");
      setCount(1);
      return;
    }

    if (count > 0) {
      images[count - 1].classList.toggle("hidden");
    }

    images[count].classList.toggle("hidden");
    setCount(count + 1);
  };

  const carouselImages = imageObjects.map((obj, idx) => {
    return /*#__PURE__*/ _react.createElement("img", {
      src: obj.source,
      key: idx,
      alt: obj.alt,
      className: "carousel-image hidden",
    });
  });
  return /*#__PURE__*/ _react.createElement(
    "div",
    {
      id: "carousel-container",
    },
    /*#__PURE__*/ _react.createElement(
      "div",
      {
        id: "carousel",
      },
      carouselImages
    )
  );
};

var _default = ImageCarousel;
exports.default = _default;
