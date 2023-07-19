import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import lottie from "lottie-web";
import lottieBalancingShape from "/public/lottie/balancing-shape.json";
import shootingStars from "/public/lottie/shooting-star.json";

import SwiperCore, {
  Navigation,
  Pagination,
  EffectCreative,
  EffectCoverflow,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper";
import Link from "next/link";

export default function SolutionDetails({ detail, tags }) {
  SwiperCore.use([
    Navigation,
    Pagination,
    EffectCreative,
    Autoplay,
    Keyboard,
    Mousewheel,
  ]);
  
  // const swiperRef = useRef(null);
  // useEffect(() => {
  //   const portfolioSwiper = document.querySelector('.carouselSlider .swiper');
  //   portfolioSwiper.onmouseenter = () => {
  //     console.log('stop autoplay');
  //     console.log(settingsB);
  //     swiperRef.portfolioSwiper.autoplay.stop();
  //   };
  //   portfolioSwiper.onmouseleave = () => {
  //     console.log('start autoplay');
  //     swiperRef.portfolioSwiper.autoplay.start();
  //   }
  // })

  var settingsB = {
    // Install modules
    // ref : {swiperRef},
    modules: [EffectCoverflow, Pagination, Autoplay],
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 120,
      grabCursor: true,
      depth: 410,
      modifier: 1,
      slideShadows: false,
    },
    pagination: { clickable: true },
    
  };

 
  
  useEffect(() => {
    

    lottie.loadAnimation({
      container: document.querySelector(".balancingShapeContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: lottieBalancingShape,
    });

    lottie.loadAnimation({
      container: document.querySelector(".shootingStarsContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: shootingStars,
    });
  }, []);

  const handleShowMore = () => {
    setSolutionClass("hideItemOverflow visibleClip");
  };

  const balancingShapeOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieBalancingShape,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const shootingStarsOptions = {
    loop: true,
    autoplay: true,
    animationData: shootingStars,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <main className="solutionDetail position-relative zindex-2">
        <section className="workFlow">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="text-center solutionInformation">
                  <div className="balancingShape">
                    <div className="balancingShapeContainer" />
                  </div>
                  <h1>
                    Your workflow just got
                    <em className="text-active"> simplified.</em>
                  </h1>
                  <p>
                    Get customizable web pages that speed up operations with
                    less effort and more accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {detail.portfoliosToShowAsFeatured && (
          <section className="carouselSection">
            <div className="container-xl">
              <div className="row">
                <div className="col-12">
                  <div className="carouselSlider position-relative" >
                    <Swiper className="portfolioSwiper" {...settingsB}>
                      {detail.portfoliosToShowAsFeatured.map((item, index) => {
                        return (
                          <SwiperSlide key={`slideblock${index}`}>
                            <div className="slider-inner">
                              <img
                                src={
                                  item.portfolioSettings.modalImage.sourceUrl
                                }
                              />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                    {/* <img className="img-fluid" src="/images/sliderPlace.png" /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {detail.companyCards && (
          <section className="companyCard">
            <div className="container-xl p-0">
              <div className="row">
                {detail.companyCards.map((item, index) => {
                  return (
                    <div
                      className="col-12 col-md-6 col-lg-4 companyCol"
                      key={`companyblock${index}`}
                    >
                      <div className="cardinner text-center">
                        {item.companyCardImage.sourceUrl && (
                          <div className="top-tile">
                            <img src={item.companyCardImage.sourceUrl} />
                          </div>
                        )}
                        <div className="tileContent">
                          {item.companyCardTitle && (
                            <h6>{item.companyCardTitle}</h6>
                          )}
                          {item.companyCardDescription && (
                            <p>{item.companyCardDescription}</p>
                          )}
                        </div>
                        {/* <div className="tileBtn">
                          <Link
                            className="btn btn-yellow btn-sm mt-4 d-inline-flex"
                            href="/contact"
                          >
                            I Need This
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        {tags && (
          <section className="skyndroket">
            <div className="sootingStarBlock">
              <div className="shootingStarsContainer" />
            </div>
            <div className="container-xl position-relative zindex-2">
              <div className="row">
                <div className="col-12 text-center">
                  <h4>
                    Choose your <em className="text-active">solution.</em>
                  </h4>
                  <p>Boost your business processes from good to great. </p>
                  {/* <div className="roket-cr">
                                <img src="/images/roket.png" />
                            </div> */}
                </div>
              </div>
            </div>
            <div className="smokeContainer solutionProject">
              {/* <div className="smokeBG"></div> */}
              <div className="container-xl p-0 position-relative zindex-2">
                <div className="row g-0">
                  <div className="col-12">
                    <div className="cloudContainer text-center">
                      <h4>Our Work </h4>
                      <h6>Trusted by industry leaders. </h6>
                    </div>
                    <div className="tabInner">
                      <div className="tab-content">
                        <div>
                          <div>
                            <div className="row">
                              {tags.map((elem, j) => {
                                return (
                                  <div
                                    className="col-12 col-md-6 col-lg-4 tab-col"
                                    key={`tagWrap${j}`}
                                  >
                                    {elem.featuredImage.node.sourceUrl && (
                                      <div className="projectBlock d-block ov-h" href="#">
                                        <img
                                          className="img-fluid w-100"
                                          src={
                                            elem.featuredImage.node.sourceUrl
                                          }
                                        />
                                        <a href="#" className="exploreLink">Explore <img src="images/explore-arrow.svg" /></a>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="readyProject">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="readyProjectInner">
                  <h2>Ready to start your project? </h2>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="btn btn-yellow" href="#">
                        Get in touch
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn btn-blue" href="#">
                        See Our Work
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
