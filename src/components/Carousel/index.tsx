import React, { useEffect, useRef } from "react";
import { MovieCard } from "../MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Mousewheel, SwiperOptions, Virtual } from "swiper";
import { MovieItemAttr } from "./types";
import { CastPersonAttr, VideoAttr } from "../../pages/Details/types";
import { CastCard } from "../CastCard";
import { TrailerCard } from "../TrailerCard";

SwiperCore.use([A11y, Mousewheel, Virtual]);

type CarouselProps = {
  title: string;
  preRenderedSlides?: number;
  titleClass?: string;
  data: (MovieItemAttr | CastPersonAttr | VideoAttr)[];
  breakpointsConfig?: {
    [width: number]: SwiperOptions;
  };
  cardType: "movie" | "castPerson" | "trailer";
  wrapperClass?: string;
  sliderClass?: string;
};

export const Carousel = ({
  data,
  title,
  cardType,
  preRenderedSlides,
  breakpointsConfig = {
    "0": { slidesPerView: 2 },
    "470": { slidesPerView: 3 },
    "649": { slidesPerView: 4 },
    "768": { slidesPerView: 5 },
    "1024": { slidesPerView: 6 },
    "1280": { slidesPerView: 7 },
  },
  titleClass = "",
  wrapperClass = "",
  sliderClass = "",
}: CarouselProps): React.ReactElement => {
  // Workaround to update swiper slides between rerenders.
  const swiperRef = useRef<SwiperCore>();
  useEffect(() => {
    swiperRef.current?.updateSlides();
  }, [data]);

  return (
    <section className={`max-w-screen-lg lg:mx-auto ${wrapperClass}`}>
      <h2
        className={`text-gray-800 font-light tracking-wider text-lg ${titleClass}`}
      >
        {title}
      </h2>
      <Swiper
        tag="section"
        wrapperTag="ul"
        className={sliderClass}
        a11y={{
          enabled: true,
        }}
        breakpoints={breakpointsConfig}
        mousewheel={{
          forceToAxis: true,
        }}
        spaceBetween={15}
        onInit={(swiper): void => {
          swiperRef.current = swiper;
        }}
        virtual={
          preRenderedSlides
            ? { addSlidesAfter: preRenderedSlides, addSlidesBefore: 2 }
            : false
        }
      >
        {data.length > 0 &&
          data.map((element) => {
            switch (cardType) {
              case "movie": {
                const {
                  id,
                  original_language,
                  poster_path,
                  release_date,
                  title,
                  vote_average,
                } = element as MovieItemAttr;
                return (
                  <SwiperSlide tag="li" key={id}>
                    <MovieCard
                      id={id}
                      imageUrl={poster_path || ""}
                      language={original_language}
                      releaseDate={release_date}
                      title={title}
                      voteAvg={vote_average}
                    />
                  </SwiperSlide>
                );
              }
              case "trailer": {
                const { name, key, id } = element as VideoAttr;
                return (
                  <SwiperSlide tag="li" key={id}>
                    <TrailerCard videoKey={key} title={name} />
                  </SwiperSlide>
                );
              }
              default: {
                const castPerson = element as CastPersonAttr;
                const {
                  id,
                  profile_path,
                  character,
                  name,
                  gender,
                } = castPerson;
                return (
                  <SwiperSlide tag="li" key={id}>
                    <CastCard
                      gender={gender ?? 1}
                      imageUrl={profile_path}
                      character={character}
                      name={name}
                    />
                  </SwiperSlide>
                );
              }
            }
          })}
      </Swiper>
    </section>
  );
};
