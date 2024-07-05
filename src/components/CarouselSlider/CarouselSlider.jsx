import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from './CarouselSelectedSnapDisplay';
import useEmblaCarousel from 'embla-carousel-react';
import SliderItem from '../SliderItem/SliderItem';
import s from './CarouselSlider.module.css';

const CarouselSlaider = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className={s.section__cases_slider_controls}>
        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
        <div className={s.section__cases_slider_buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className={s.section__cases_slider}>
        <div className={s.section__cases_slider_viewport} ref={emblaRef}>
          <div className={s.section__cases_slider_container}>
            {slides.map((slide, index) => (
              <div className={s.section__cases_slider_slide} key={index}>
                <SliderItem itemData={slide} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselSlaider;
