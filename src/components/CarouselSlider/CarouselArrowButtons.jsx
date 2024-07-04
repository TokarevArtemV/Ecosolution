import { useCallback, useEffect, useState } from 'react';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { ...restProps } = props;

  return (
    <Button className="section__cases_slider_button" {...restProps}>
      <Icons
        id="arrow-right"
        size="36"
        stroke="currentColor"
        fill="none"
        rotation={180}
      />
    </Button>
  );
};

export const NextButton = (props) => {
  const { ...restProps } = props;

  return (
    <Button className="section__cases_slider_button" {...restProps}>
      <Icons id="arrow-right" size="36" stroke="currentColor" fill="none" />
    </Button>
  );
};
