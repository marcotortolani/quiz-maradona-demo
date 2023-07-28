import { useState } from "preact/hooks";

export default function RewardsSlider({ slidesImages, arrowsSlider }) {
  const [slide, setSlide] = useState(0);

  function handleLeftSlide() {
    setSlide(slide === 0 ? 0 : slide - 1);
  }
  function handleRightSlide() {
    setSlide(
      slide === slidesImages.length - 1 ? slidesImages.length - 1 : slide + 1
    );
  }

  function handleIndicator(index) {
    setSlide(index);
  }

  return (
    <div className="wrapper-slider">
      <button
        className="arrow-container left-arrow"
        type="button"
        onClick={handleLeftSlide}
        disabled={slide === 0 ? true : false}
      >
        <img src={arrowsSlider.left} alt="Left Golden Arrow" />
      </button>

      {slidesImages.map((image, index) => {
        return (
          <div
            className={
              slide === index
                ? "wrapper-image"
                : "wrapper-image wrapper-image-hidden"
            }
            key={`wrapper-image-${index}`}
          >
            <img src={image.src} alt={image.name} key={`image-${index}`} />
          </div>
        );
      })}

      <button
        className="arrow-container right-arrow"
        type="button"
        onClick={handleRightSlide}
        disabled={slide === slidesImages.length - 1 ? true : false}
      >
        <img src={arrowsSlider.right} alt="Right Golden Arrow" />
      </button>

      <span className="indicators-container">
        {slidesImages.map((_, index) => {
          return (
            <button
              onClick={() => handleIndicator(index)}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
              type="button"
              key={index}
            ></button>
          );
        })}
      </span>
    </div>
  );
}
