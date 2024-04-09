import React from 'react'
import { DotButton, useDotButton } from '@Components/EmblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '@Components//EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import '@Styles/Carousel.css'


const Carousel = () => {
    const options = { containScroll: false }
    const SLIDE_COUNT = 5
    const slides = Array.from(Array(SLIDE_COUNT).keys())

    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">{index + 1}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">

                <div className="embla_prev_buttons">
                    <PrevButton  onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                </div>
                <div className="embla_next_buttons">
                    <NextButton  onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>


            </div>
        </section>
    )
}

export default Carousel
