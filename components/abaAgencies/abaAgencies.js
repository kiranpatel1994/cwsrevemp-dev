/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

import SwiperCore, {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";
import HandshakeImg from "../../public/images/human-hand.png";
import gettingStartImg from "../../public/images/gettingStartImg.png";
import BusinessPickupImg from "../../public/images/business-pickup.png";

export default function AbaAgencies({
  data,
  abaPortfolio,
  logoBrands,
  homeSettings,
  testimonialSettings,
}) {
  const parts = 3;
  const chunkSize = Math.ceil(homeSettings?.businessImageSlider.length / parts);

  const businessImageArray = Array.from({ length: parts }, (_, index) =>
    homeSettings?.businessImageSlider.slice(
      index * chunkSize,
      (index + 1) * chunkSize
    )
  );
  SwiperCore.use([
    Navigation,
    Pagination,
    EffectCreative,
    Autoplay,
    Keyboard,
    Mousewheel,
  ]);
  var settingsB = {
    // Install modules
    modules: [Navigation, Pagination, EffectCreative],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      319: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },
    },
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".torusLandingContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: torusLanding,
    });

    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) {
        gsap.set(".dragWithme", { top: "-10px" });
        const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });

        ScrollTrigger.create({
          trigger: ".gl_area",
          start: "-=600",
          endTrigger: "#end_anim",
          end: "+=6400",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: liftArow,
          once: true,
        });

        gsap.to(".profitDrag", { scaleY: 0 });
        const action = gsap.to(".profitDrag", {
          scaleY: "100%",
          transformOrigin: "top bottom",
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: "#start_anim",
          start: "-=600",
          endTrigger: "#end_anim",
          end: "+=6400",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: action,
          once: true,
        });

        // const panels = gsap.utils.toArray(".gl_area .benifit_ttl");
        const panels = gsap.utils.toArray([
          ".gl_area .benifit_ttl",
          ".gl_area .benifit_ttl_mb",
        ]);
        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "-=600",
            end: "center",
            markers: false,
            onEnter: () => {
              panels[i].classList.add("activate");
            },
            // onEnterBack: () => {
            //   panels[i].classList.remove("activate");
            // },
          });
        });
      } else {
        gsap.set(".dragWithme", { top: "-10px" });
        const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });

        ScrollTrigger.create({
          trigger: ".gl_area",
          start: "-=200",
          endTrigger: ".end_anim",
          end: "bottom +=300",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: liftArow,
          once: true,
        });

        gsap.to(".profitDrag", { scaleY: 0 });
        const action = gsap.to(".profitDrag", {
          scaleY: "100%",
          transformOrigin: "top bottom",
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: ".start_anim",
          start: "-=200",
          endTrigger: ".end_anim",
          end: "bottom +=300",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: action,
          once: true,
        });

        const panels = gsap.utils.toArray([
          ".gl_area .benifit_ttl",
          ".gl_area .benifit_ttl_mb",
        ]);
        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "-=250",
            end: "center",
            markers: false,
            onEnter: () => {
              panels[i].classList.add("activate");
            },
            // onEnterBack: () => {
            //   panels[i].classList.remove("activate");
            // },
          });
        });
      }
    }

    document.body.classList.add("aba-agencies");

    return () => {
      document.body.classList.remove("aba-agencies");
    };
  }, []);

  return (
    <main>
      <div className="banner__overlap">
        <div className="container-xl bbn_1">
          <div className="bottom_shape">
            <div className="floor-1">
              <div className="torusLandingLottie">
                <div className="torusLandingContainer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="abaAgencyBanner">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {data?.abaTitle && (
                <div dangerouslySetInnerHTML={{ __html: data.abaTitle }}></div>
              )}
              {data?.abaDescription && (
                <div
                  dangerouslySetInnerHTML={{ __html: data.abaDescription }}
                ></div>
              )}
              <div className="text-center">
                <img src={HandshakeImg.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abaAgencyVideoSec">
        <div className="abaAgencyVideo">
          {data?.bannerVideo?.mediaItemUrl && (
            <video autoPlay muted loop playsInline>
              <source src={data.bannerVideo.mediaItemUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="abaAgencyVideoContent">
            <div className="container">
              {data?.bannerSubtitle && (
                <div
                  dangerouslySetInnerHTML={{ __html: data.bannerSubtitle }}
                ></div>
              )}
              {data?.bannerSubdescription && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.bannerSubdescription,
                  }}
                ></div>
              )}
              <Link
                href="/contact"
                className="btn btn-yellow ft-gilroy_b fw-bold d-inline-flex px-5"
              >
                Get my website started
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="abaNeeds">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 px-lg-0">
              <div className="title text-center mb-5 pb-5">
                <img className="torusImg mb-4 pb-3" src={TorusImg.src} alt="" />
                <h3 className="text-white ft-gilroy_b fw-bold mb-4 pb-2">
                  When you team up with us, you become the proud owner of a
                  stand-out website that shows off your agency's message and
                  brings in more clients and employees.
                </h3>
                <a
                  href="#"
                  className="btn btn-yellow ft-gilroy_b fw-bold d-inline-flex px-5"
                >
                  Get my website started
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-auto col-md-4 mb-md-0 mb-4">
              <div className="needBox">
                <div className="boxContent">
                  <img src={PuzzleImg.src} alt="" />
                  <h3>100+</h3>
                  <p>ABA therapy clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-auto col-md-4 mb-md-0 mb-4">
              <div className="needBox">
                <div className="boxContent">
                  <img src={WebDesignImg.src} alt="" />
                  <h3>2 ABA</h3>
                  <p>
                    Websites launched <br />
                    monthly
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-auto col-md-4">
              <div className="needBox">
                <div className="boxContent">
                  <img src={StarsImg.src} alt="" />
                  <h3>5</h3>
                  <p>
                    <a href="#">Star client reviews</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="abaScrollSection">
        <div className="container-xl px-lg-3 pe-3 ps-0">
          <div className="gl_area aba-agency_inner">
            <div className="container-xl position-relative p-0">
              <div className="line_anim">
                <div className="profitDrag"></div>
                <div className="dragWithme">
                  <img src="../images/smArrow.png" />
                </div>
              </div>
              <section
                className="row get_row g-0 sec-1 start_anim"
                id="start_anim"
              >
                <div className="col-12 col-md-1 d-none d-md-block benit__ttl">
                  <div className="benifit_ttl">
                    <h3 className="vr-title">Benefits</h3>
                  </div>
                </div>
                <div className="col-12 col-md-11 ps-5 pt-md-5">
                  <div className="d-md-none">
                    <div className="benifit_ttl_mb mb-stl">
                      <h3 className="vr-title_mb">Benefits</h3>
                    </div>
                  </div>
                  {data?.benefitsTitle && (
                    <div
                      className="title mb-5"
                      dangerouslySetInnerHTML={{
                        __html: data.benefitsTitle,
                      }}
                    ></div>
                  )}
                  <div className="aba-benefitsBlock">
                    {data?.benefitDescription && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.benefitDescription,
                        }}
                      ></div>
                    )}
                    <div className="abaBenefits">
                      <div className="row">
                        {data.benefitBlocks.map((item, i) => {
                          return (
                            <div
                              className="col-xxl col-lg-3 col-md-4"
                              key={`block-${i}`}
                            >
                              <div className="card benefitCard">
                                <div className="card-body">
                                  <div className="card-icon mb-3">
                                    <Image
                                      src={item.icon.sourceUrl}
                                      alt=""
                                      width={30}
                                      height={30}
                                    />
                                  </div>
                                  {item?.title && (
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.title,
                                      }}
                                    ></div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="row get_row g-0 kickStartSec">
                <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
                  <div className="pd-48-15">
                    <div className="benifit_ttl whyUs_title align-self-center">
                      <h3 className="vr-title">Why Us</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-11">
                  <div className="row g-0 why__us align-items-center">
                    <div className="col-12 col-lg-7 ps-5">
                      <div className="">
                        <div className="d-md-none">
                          <div className="benifit_ttl_mb mb-stl">
                            <h3 className="vr-title_mb">Why Us</h3>
                          </div>
                        </div>
                        {data?.whyUsTitle && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data.whyUsTitle,
                            }}
                          ></div>
                        )}
                        {data?.whyUsDescription && (
                          <div
                            className="mb-3"
                            dangerouslySetInnerHTML={{
                              __html: data.whyUsDescription,
                            }}
                          ></div>
                        )}
                        <Link
                          href="/contact"
                          className="btn btn-yellow rounded-pill px-5 d-inline-flex"
                        >
                          Get my site started
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5 text-lg-end text-center groupImg ps-lg-0 ps-5">
                      <img className="img-fluid" src={gettingStartImg.src} />
                    </div>
                  </div>
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-6 ps-5">
                      <img
                        className="img-fluid"
                        src={BusinessPickupImg.src}
                        alt=""
                      />
                    </div>
                    <div className="col-12 col-lg-6 ps-lg-3 ps-5 mt-lg-0 mt-4">
                      <div className="">
                        {data?.businessTitle && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data.businessTitle,
                            }}
                          ></div>
                        )}
                        {data?.businessDescription && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data.businessDescription,
                            }}
                          ></div>
                        )}
                        <Link
                          href="/contact"
                          className="btn btn-yellow rounded-pill px-5 d-inline-flex mt-3"
                        >
                          Get my site started
                        </Link>
                      </div>
                    </div>
                  </div>
                  {abaPortfolio[0]?.portfolios?.nodes?.length && (
                    <div className="row g-0 align-items-center beautifulWork">
                      <div className="col-lg-12">
                        <div className="work-slider-area">
                          <h2 className="text-warning fw-bold">
                            Check out <br />
                            our beautiful <br />
                            work.
                          </h2>
                          <Swiper className="slider-scroller" {...settingsB}>
                            {abaPortfolio[0].portfolios.nodes.map((item, i) => {
                              return (
                                <SwiperSlide key={`swipe-${i}`}>
                                  {item?.featuredImage?.node?.sourceUrl && (
                                    <Link href={`/portfolio/${item.slug}`}>
                                      <Image
                                        src={item.featuredImage.node.sourceUrl}
                                        alt=""
                                        className="rounded-4"
                                        width={508}
                                        height={344}
                                      />
                                    </Link>
                                  )}
                                </SwiperSlide>
                              );
                            })}
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section className="row get_row g-0 serviceDetailSec">
                <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
                  <div className="pd-48-15">
                    <div className="benifit_ttl align-self-center">
                      <h3 className="vr-title">Service Details</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-11">
                  <div className="d-md-none ps-md-0 ps-5">
                    <div className="benifit_ttl_mb mb-stl">
                      <h3 className="vr-title_mb">Service Details</h3>
                    </div>
                  </div>
                  <div className="row service_details ps-5">
                    <div className="col-12">
                      {data?.serviceTitle && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.serviceTitle,
                          }}
                        ></div>
                      )}
                    </div>
                    {data?.serviceBlocks?.length && (
                      <>
                        {data.serviceBlocks.map((item, i) => {
                          return (
                            <div
                              className="col-xl-4 col-lg-6"
                              key={`service-${i}`}
                            >
                              <div className="card serviceDetailCard">
                                {item?.serviceIcon?.sourceUrl && (
                                  <div className="card-icon">
                                    <Image
                                      src={item.serviceIcon.sourceUrl}
                                      alt=""
                                      width={50}
                                      height={50}
                                    />
                                  </div>
                                )}
                                <div className="card-body">
                                  <h3 className="text-warning text-center fw-bold mb-3">
                                    {item?.serviceBlockTitle}
                                  </h3>
                                  {item?.serviceBlockDescription && (
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.serviceBlockDescription,
                                      }}
                                    ></div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              </section>

              <section
                className="row get_row g-0 optional_upgrades end_anim"
                id="end_anim"
              >
                <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
                  <div className="pd-48-15">
                    <div className="benifit_ttl align-self-center">
                      <h3 className="vr-title">Optional Upgrades</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-11 ps-lg-5 time_acquainted">
                  <div className="row g-0 align-items-center seo_package">
                    <div className="col-12 col-lg-6 ps-5 leftColumn">
                      <div className="d-md-none">
                        <div className="benifit_ttl_mb mb-stl">
                          <h3 className="vr-title_mb">Optional Upgrades</h3>
                        </div>
                      </div>
                      <div className="benifit_ttl_mb mb-stl mb-2">
                        <h3 className="vr-title_mb">SEO Package</h3>
                      </div>
                      {data?.seoTitle && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.seoTitle,
                          }}
                        ></div>
                      )}
                      {data?.seoDescription && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.seoDescription,
                          }}
                        ></div>
                      )}
                      <Link
                        href="/contact"
                        className="btn btn-blue rounded-pill text-white px-5"
                      >
                        I need this
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      {data?.seoImage?.sourceUrl && (
                        <div className="optionalImgOuter">
                          {data?.seoImage?.sourceUrl && (
                            <img
                              className="optionalImg"
                              src={data.seoImage.sourceUrl}
                              alt=""
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row get_row g-0 branding_package">
                    <div className="col-12 brandingPackageCol">
                      <div className="row g-0 align-items-center justify-content-between">
                        <div className="col-12 col-lg-9 ps-5">
                          <div className="benifit_ttl_mb mb-stl mb-2">
                            <h3 className="vr-title_mb">Branding Package</h3>
                          </div>
                          {data?.brandingTitle && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data.brandingTitle,
                              }}
                            ></div>
                          )}
                          {data?.brandingDescription && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data.brandingDescription,
                              }}
                            ></div>
                          )}
                          <Link
                            href="/contact"
                            className="btn btn-blue rounded-pill text-white px-5"
                          >
                            I need this
                          </Link>
                        </div>
                      </div>
                      {logoBrands[0]?.portfolios?.nodes?.length && (
                        <div className="row g-0 align-items-center beautifulWork">
                          <div className="col-lg-12">
                            <div className="work-slider-area">
                              <h2 className="text-primary fw-bold">
                                Check out <br />
                                our beautiful <br />
                                branding.
                              </h2>
                              <Swiper
                                className="slider-scroller"
                                {...settingsB}
                              >
                                {logoBrands[0].portfolios.nodes.map(
                                  (item, i) => {
                                    return (
                                      <SwiperSlide key={`logo-${i}`}>
                                        {item?.featuredImage?.node
                                          ?.sourceUrl && (
                                          <Link
                                            href={`/portfolio/${item.slug}`}
                                          >
                                            <Image
                                              src={
                                                item.featuredImage.node
                                                  .sourceUrl
                                              }
                                              alt=""
                                              className="rounded-4"
                                              width={508}
                                              height={344}
                                            />
                                          </Link>
                                        )}
                                      </SwiperSlide>
                                    );
                                  }
                                )}
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                              </Swiper>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row get_row g-0 branding_package brochureFlyer">
                    <div className="col-12 brandingPackageCol fingerTipCol">
                      <div className="row g-0 align-items-center justify-content-between">
                        <div className="col-12 col-lg-9 ps-5">
                          <div className="benifit_ttl_mb mb-stl mb-2">
                            <h3 className="vr-title_mb">
                              Brochures and Flyers
                            </h3>
                          </div>
                          {data?.brochureTitle && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data.brochureTitle,
                              }}
                            ></div>
                          )}
                          <Link
                            href="/contact"
                            className="btn btn-blue rounded-pill text-white px-5"
                          >
                            I need this
                          </Link>
                        </div>
                      </div>
                      {data?.listOfBrochures?.length && (
                        <div className="row g-0 align-items-center beautifulWork">
                          <div className="col-lg-12">
                            <div className="work-slider-area">
                              <h2 className="text-primary fw-bold">
                                Check out <br />
                                our beautiful <br />
                                printed work.
                              </h2>
                              <Swiper
                                className="slider-scroller"
                                {...settingsB}
                              >
                                {data.listOfBrochures.map((item, i) => {
                                  return (
                                    <SwiperSlide key={`brochure-${i}`}>
                                      {item?.brochureImage?.sourceUrl && (
                                        <Link href="javascript:void(0)">
                                          <Image
                                            src={item.brochureImage.sourceUrl}
                                            alt=""
                                            width={508}
                                            height={344}
                                          />
                                        </Link>
                                      )}
                                    </SwiperSlide>
                                  );
                                })}
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                              </Swiper>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="abaFeatures">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12">
              {data?.featureTitle && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.featureTitle,
                  }}
                ></div>
              )}
            </div>
          </div>
          {data?.featureBlocks?.length && (
            <div className="row justify-content-between gy-4 gx-5">
              {data.featureBlocks.map((item, i) => {
                return (
                  <div className="col-lg-4 mb-lg-0 mb-4" key={`feature-${i}`}>
                    <div className="d-flex align-items-center">
                      {item?.featureImage?.sourceUrl && (
                        <Image
                          className="me-2"
                          src={item.featureImage.sourceUrl}
                          alt=""
                          width={56}
                          height={56}
                        />
                      )}
                      <h4 className="mb-0 text-white fw-bold">
                        {item?.featureBlockTitle}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="text-center mt-lg-5">
            <Link href="/contact" className="btn btn-yellow d-inline-flex">
              Get my site started
            </Link>
          </div>
        </div>
      </section>
      <section className="abaWebsites">
        <div className="container-fluid">
          <div className="row justify-content-center mb-5 pb-3">
            <div
              className="col-xl-6"
              dangerouslySetInnerHTML={{
                __html: data.aboutTitle,
              }}
            ></div>
          </div>
          {data?.aboutImages?.length && (
            <div className="row mb-5 pb-3 gy-4">
              {data.aboutImages.map((item, i) => {
                return (
                  <div
                    className="col-lg-3 col-md-6 col-11 text-center"
                    key={`about-${i}`}
                  >
                    {item?.blockImage?.sourceUrl && (
                      <Image
                        className="img-fluid"
                        src={item.blockImage.sourceUrl}
                        alt=""
                        width={420}
                        height={324}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
          <div className="text-center">
            <Link href="/contact" className="btn btn-blue rounded-pill px-4">
              I need a site like this
            </Link>
          </div>
        </div>
      </section>
      <section className="all-business bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-xl-6">
              <div className="update-pseudo">
                <div className="" data-aos="fade-up" data-aos-duration="1000">
                  <img
                    className="flyingImg mb-2"
                    src="../images/rectangle3434.png"
                  />
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: homeSettings.businessTitle,
                    }}
                  ></h2>
                  <em className="yello-title-em">
                    {homeSettings.businessSubtitle}
                  </em>
                </div>
              </div>
            </div>
            {businessImageArray && (
              <div className="col-12 col-xl-6 mt-xl-0 mt-4 pt-xl-0 pt-3">
                <div className="d-none d-xl-block">
                  <div className="vr-row-parent">
                    {businessImageArray.map((item, index) => {
                      const directionV = index === 1 ? true : false;
                      return (
                        <div className="child-row" key={`ibi-${index}`}>
                          <Swiper
                            direction={"vertical"}
                            slidesPerView={4.2}
                            spaceBetween={50}
                            autoplay={{
                              delay: 1500,
                              disableOnInteraction: false,
                              reverseDirection: directionV,
                            }}
                            loop={true}
                            breakpoints={{
                              1200: {
                                slidesPerView: 5.5,
                                spaceBetween: 20,
                              },
                              1400: {
                                slidesPerView: 4.5,
                                spaceBetween: 30,
                              },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                          >
                            {item.map((element, elementIndex) => {
                              return (
                                <SwiperSlide key={`eleI-${elementIndex}`}>
                                  <div className="sub-child">
                                    <img
                                      src={element.businessImage.sourceUrl}
                                    />
                                  </div>
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container-fluid p-0 d-xl-none">
          <div className="row g-0">
            <div className="col-12">
              <div className="vr-row-parent">
                {businessImageArray.map((item, index) => {
                  const directionV = index === 1 ? true : false;
                  return (
                    <div className="child-row" key={`ibi-${index}`}>
                      <Swiper
                        //direction={"vertical"}
                        slidesPerView={4.2}
                        spaceBetween={50}
                        autoplay={{
                          delay: 1500,
                          disableOnInteraction: false,
                          reverseDirection: directionV,
                        }}
                        loop={true}
                        breakpoints={{
                          319: {
                            slidesPerView: 2,
                            spaceBetween: 14,
                          },
                          360: {
                            slidesPerView: 2.5,
                            spaceBetween: 14,
                          },
                          425: {
                            slidesPerView: 3,
                            spaceBetween: 14,
                          },
                          568: {
                            slidesPerView: 4,
                            spaceBetween: 14,
                          },
                          768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                          1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                          },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        {item.map((element, elementIndex) => {
                          return (
                            <SwiperSlide key={`eleI-${elementIndex}`}>
                              <div className="sub-child">
                                <img src={element.businessImage.sourceUrl} />
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {testimonialSettings.clientTestimonials.length > 0 && (
        <section className="about-us">
          {/* <div className="floating-object"></div> */}
          <div className="aboutUs-title position-relative zindex-2">
            <div className="row">
              <div className="col-12 about-info overflow-hidden">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                  {testimonialSettings.testimonialsThemeTitle}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {testimonialSettings.testimonialsThemeSubtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="slider-area">
            <Swiper className="slider-scroller" {...settingsB}>
              {testimonialSettings.clientTestimonials.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="raw-card">
                      <div className="mb-4">
                        {item.authorDescription && (
                          <div
                            className="para-side-detail"
                            dangerouslySetInnerHTML={{
                              __html: item.authorDescription,
                            }}
                          />
                        )}
                      </div>
                      <div className="other-detail d-flex align-items-center">
                        {item.authorImage && (
                          <div className="sm-user-bild">
                            <div className="circle_area">
                              <img src={item.authorImage.sourceUrl} alt="" />
                            </div>
                          </div>
                        )}
                        <h5>
                          {item.authorName}
                          <span>{item.authorDesignation}</span>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </section>
      )}
    </main>
  );
}
