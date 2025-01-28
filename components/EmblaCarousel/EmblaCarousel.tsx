import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image';
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { mediaByIndex } from "../../media";
import { DotButton } from "./EmblaCarouselButtons";


const carouselContent = [
  {
    header: 'Honor the Badge', content: 'Celebrate Someone Special, Make a Lasting Impact', buttonHref: '/htb'
  },
  {
    header: 'Supporting Our Heroes', content: 'We are proud to support the Raleigh Police Department', buttonHref: '/Meet-RPD'
  },
  {
    header: 'Every dollar raised by the RPDF supports the health and safety of our community', content: '', buttonHref: '/Our-Work'
  },
  {
    header: 'Our mission is to advance public safety initiatives and promote police support for a safe and thriving community', content: '', buttonHref: '/about'
  },
]

const EmblaCarousel = ({ slides }: { slides: any }) => {
  const autoplayOptions: any = [{ delay: 5000, stopOnInteraction: false },
  (emblaRoot: { parentElement: any; }) => emblaRoot.parentElement];
  const autoplay = useRef(
    Autoplay(
      autoplayOptions
    )
  );


  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false }, [autoplay.current]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index: any) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList() as never[]);
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);


  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((index: number) => (
              <div className="embla__slide" key={index}>  
                <div className={`embla__slide__inner ${index === 0 ? 'embla__slide__inner_first' : ''}`}>

                  <Image
                    className="embla__slide__img"
                    src={mediaByIndex(index).src}
                    alt="RPDF Help"
                    layout='fill'
                    priority={index === 0}
                  />

                  <div className={`slide-content container ${index === 0 ? 'slide-content-first' : ''}`}>
                    <h2 className="slide-content-max-w">{carouselContent[index].header}</h2>
                    <p className={`mt-1 mb-4 slide-content-max-w`}>{carouselContent[index].content}</p>
                    {/* <Link href={carouselContent[index].buttonHref}>
                      <button className="btn btn-outline-light">
                        Learn More
                      </button>
                    </Link> */}
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
        {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>

    </>
  );
};

export default EmblaCarousel;


