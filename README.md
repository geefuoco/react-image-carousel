#Image Carousel

An image carousel react component.

`npm i @geefuoco/react-image-carousel`

Import the `ImageCarsouel` component and the stylesheet `@geefuoco/react-image-carousel/dist/index.css`

The component has two props: arrayOfImageObjects, transitionTime

arrayOfImageObjects takes an array of objects with properties `source` and `alt`

transitionTime is the time between transitions for the carousel in milliseconds

```
import ReactDOM from "react-dom"
import ImageCarousel from "@geefuoco/react-image-carousel";
import "@geefuoco/react-image-carousel/dist/index.css";

const imageObjects = [
    {source: "image1.svg", alt: "an example image"}
]


ReactDOM.render(document.createElement("div"), 
<ImageCarousel
  arrayOfImageObjects={imageObjects}
  transitionTime={3000}
/>)
```

