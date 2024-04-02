import React, { useRef,useState, MouseEvent  } from 'react';
import '@Styles/Carousel.css';
import {click} from "@testing-library/user-event/dist/click";

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 3", "Slide 3", "Slide 3"]; // 슬라이드에 표시할 내용
    const containerRef = useRef(null);

    const [dragging, setDragging] = useState(false);
    const [clickPoint, setClickPoint] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);


    const handleMouseDownEvent = (e: MouseEvent<HTMLDivElement>) => {
        setDragging(true);
        if (containerRef.current) {
            setClickPoint(e.pageX);
            console.log(clickPoint);
            setScrollLeft(containerRef.current.scrollLeft);
            console.log(scrollLeft);
        }
    };

    const handleMouseMoveEvent = (e: MouseEvent<HTMLDivElement>) => {
        if (!dragging) return;

        e.preventDefault();

        if (containerRef.current) {
            const walk = e.pageX - clickPoint;

            containerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const goToPrevSlide = () => {
        if (currentSlide === 0) return; // 첫 번째 슬라이드일 때 클릭 무시
        setCurrentSlide((prevSlide) => prevSlide - 1);
        console.log(currentSlide);
        /*setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));*/
    };

    const goToNextSlide = () => {
        if (currentSlide === slides.length - 1) return; // 마지막 슬라이드일 때 클릭 무시
        setCurrentSlide((prevSlide) => prevSlide + 1);
        console.log(currentSlide);
        /*setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));*/
    };

    return (
        <div className="carousel-container">
            <button className="prev-button" onClick={goToPrevSlide}>&lt;</button>
            <div className="slide-container"
                 ref={containerRef}
                 onMouseDown={handleMouseDownEvent}
                 onMouseLeave={() => setDragging(false)}
                 onMouseUp={() => setDragging(false)}
                 onMouseMove={handleMouseMoveEvent}>
                <div className="slide-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="slide-item">
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
            <button className="next-button" onClick={goToNextSlide}>&gt;</button>

        </div>
    );
}

export default Carousel;
