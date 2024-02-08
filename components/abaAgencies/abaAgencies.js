/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

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
import GoogleRankImg from "../../public/images/google-white.svg";
import DiamondImg from "../../public/images/diamond-white.svg";
import TopTalentImg from "../../public/images/topTalent-white.svg";
import AcquisitionImg from "../../public/images/acquisition-white.svg";
import QualityImg from "../../public/images/quality-white.svg";
import BusinessPickupImg from "../../public/images/business-pickup.png";
import BeautifulWorkImg1 from "../../public/images/beautiful-work-1.png";
import BeautifulWorkImg2 from "../../public/images/beautiful-work-2.png";
import BeautifulWorkImg3 from "../../public/images/beautiful-work-3.png";
import BeautifulWorkImg4 from "../../public/images/beautiful-work-4.png";
import BeautifulWorkImg5 from "../../public/images/beautiful-work-5.png";
import BeautifulWorkImg6 from "../../public/images/beautiful-work-6.png";
import BeautifulWorkImg7 from "../../public/images/beautiful-work-7.png";
import BeautifulWorkImg8 from "../../public/images/beautiful-work-8.png";
import BeautifulWorkImg9 from "../../public/images/beautiful-work-9.png";
import BeautifulWorkImg10 from "../../public/images/beautiful-work-10.png";
import BeautifulWorkImg11 from "../../public/images/beautiful-work-11.png";
import BeautifulWorkImg12 from "../../public/images/beautiful-work-12.png";
import BeautifulWorkImg13 from "../../public/images/beautiful-work-13.png";
import BeautifulWorkImg14 from "../../public/images/beautiful-work-14.png";
import BeautifulWorkImg15 from "../../public/images/beautiful-work-15.png";
import CompellingCopyImg from "../../public/images/compelling-copy.svg";
import DistinctiveDesignImg from "../../public/images/distinctive-design.svg";
import PopupEnrollmentFormImg from "../../public/images/popup-enrollment-form.svg";
import StrategicCareersImg from "../../public/images/strategic-careers-page.svg";
import BlogResourcesImg from "../../public/images/blog-and-resources.svg";
import ChatBoxImg from "../../public/images/chat-box.svg";
import OptionalUpgradeImg from "../../public/images/optional-upgrade-img.png";
import AbaAgencyImg1 from "../../public/images/aba-website-1.png";
import AbaAgencyImg2 from "../../public/images/aba-website-2.png";
import AbaAgencyImg3 from "../../public/images/aba-website-3.png";
import AbaAgencyImg4 from "../../public/images/aba-website-4.png";
import MobileResponsivenessImg from "../../public/images/mobile-responsiveness.png";
import CustomerServiceImg from "../../public/images/customer-service.png";
import QuickTurnaroundTimeImg from "../../public/images/quick-turnaround-time.png";
import HostingOptionsImg from "../../public/images/hosting-options.png";
import WebsiteSpeedImg from "../../public/images/website-speed.png";
import CompetitiveRatesImg from "../../public/images/competitive-rates.png";

export default function AbaAgencies({ data, abaPortfolio, logoBrands }) {
  console.log(logoBrands);
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
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 2.2,
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
                                    <img src={item.icon.sourceUrl} alt="" />
                                  </div>
                                  <p className="card-title">{item.title}</p>
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
                          className="btn btn-yellow rounded-pill px-5 d-inline-flex"
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
                                      <img
                                        src={item.featuredImage.node.sourceUrl}
                                        alt=""
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
                                    <img
                                      src={item.serviceIcon.sourceUrl}
                                      alt=""
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
                                            <img
                                              src={
                                                item.featuredImage.node
                                                  .sourceUrl
                                              }
                                              alt=""
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
                                          <img
                                            src={item.brochureImage.sourceUrl}
                                            alt=""
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
            <div className="row justify-content-between">
              {data.featureBlocks.map((item, i) => {
                return (
                  <div className="col-lg-4 mb-lg-0 mb-4" key={`feature-${i}`}>
                    <div className="d-flex align-items-center">
                      {item?.featureImage?.sourceUrl && (
                        <img
                          className="me-2"
                          src={item.featureImage.sourceUrl}
                          alt=""
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
                      <img
                        className="img-fluid"
                        src={item.blockImage.sourceUrl}
                        alt=""
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
    </main>
  );
}
