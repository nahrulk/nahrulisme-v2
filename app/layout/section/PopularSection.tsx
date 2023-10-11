"use client";
import React from "react";
// Import Swiper React components
import { projectList } from "@/app/constant/listData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const PopularSection = () => {
  return (
    <section className="popular section " id="popular">
      <div className=" container__custom">
        <span className="section__subtitle">List of</span>
        <h2 className="section__title">
          my Best Project <span>.</span>{" "}
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={32}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          className="popular__container"
        >
          <div className="swiper-wrapper ">
            {projectList.map((item) => (
              <>
                <SwiperSlide>
                  <article className="popular__card " key={item.desc}>
                    <img
                      src={item.images}
                      alt={item.title}
                      className="popular__img"
                    />
                    <div className="popular__date">
                      <h2 className="popular__price">
                        <span>
                          <i className="bx bx-right-arrow"></i>
                        </span>
                        {item.price}
                      </h2>
                      <h3 className="popular__title">{item.title}</h3>
                      <p className="popular__description">
                        Street The Garden City Of Miraflores, Lima - Perú Av.
                        Sol #9876
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              </>
            ))}
          </div>

          <div className="swiper-button-prev">
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="swiper-button-next">
            <i className="bx bx-chevron-right"></i>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default PopularSection;
