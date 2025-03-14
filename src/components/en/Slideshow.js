import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
    '/media/bannersEnglish/HOTLINE-SLIDER.png',
    '/media/bannersEnglish/ALLOVER-SLIDER.png',
    '/media/bannersEnglish/CALL-CENTER-IN.png',
    '/media/bannersEnglish/about-us-first-p.png',
    '/media/bannersEnglish/INSURANCE-IN.png',
    '/media/bannersEnglish/INSURANCE-SLIDER.png',
    '/media/bannersEnglish/LOCATIONS-IN.png',
    '/media/bannersEnglish/ABOUT-US-IN.png',
    '/media/bannersEnglish/about-us-second-p.png'
];

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const getVisibleDots = () => {
        const visibleDots = [];
        const total = images.length;

        for (let i = -2; i <= 2; i++) {
            const index = (currentIndex + i + total) % total;
            visibleDots.push(index);
        }

        return visibleDots;
    };

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, isPaused]);

    return (
        <div
            className="slideshow"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <img
                key={currentIndex}
                src={images[currentIndex]}
                alt="slide"
                className="slide fade-in"
            />

            <div className="controls">
                <FaChevronLeft className="arrow" onClick={prevSlide} />
                <div className="dots">
                    {getVisibleDots().map((index, i) => (
                        <span
                            key={index}
                            className={`dot ${i === 2 ? 'active' : ''} dot-${i}`}
                        ></span>
                    ))}
                </div>
                <FaChevronRight className="arrow" onClick={nextSlide} />
            </div>
        </div>
    );
}

export default Slideshow;