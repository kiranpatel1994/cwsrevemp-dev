/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
import AbaAgencyImg1 from "../../public/images/aba-website-5.png";
import AbaAgencyImg2 from "../../public/images/aba-website-2.png";
import AbaAgencyImg3 from "../../public/images/aba-website-3.png";
import AbaAgencyImg4 from "../../public/images/aba-website-4.png";
import MobileResponsivenessImg from "../../public/images/mobile-responsiveness.png";
import CustomerServiceImg from "../../public/images/customer-service.png";
import QuickTurnaroundTimeImg from "../../public/images/quick-turnaround-time.png";
import HostingOptionsImg from "../../public/images/hosting-options.png";
import WebsiteSpeedImg from "../../public/images/website-speed.png";
import CompetitiveRatesImg from "../../public/images/competitive-rates.png";

export default function AbaAgencies() {
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
          end: "+=6000",
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
          end: "+=6000",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: action,
          once: true,
        });

        const panels = gsap.utils.toArray(".gl_area .benifit_ttl");
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
              <h1>
                ABA websites
                <em className="fw-bold text-warning"> built by experts</em>
              </h1>
              <p className="mb-4 pb-2">
                There’s a reason we’re the first choice for <br />
                hundreds of ABA agencies looking to impress online.
              </p>
              <div className="text-center">
                <img src={HandshakeImg.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abaAgencyVideoSec">
        <div className="abaAgencyVideo">
          <video autoPlay muted loop playsInline>
            <source
              src="https://cms.cwsio.com/wp-content/uploads/2024/02/aba-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="abaAgencyVideoContent">
            <div className="container">
              <h4 className="text-white fw-bold mb-4">
                We've teamed up with plenty of
                <span className="text-warning"> ABA operators like you.</span>
              </h4>
              <p className="fs-20 mb-4">
                Now it’s your turn for a great collab that will <br />
                <span className="text-warning"> make your agency stand out from the others.</span>
              </p>
              <a
                href="#"
                className="btn btn-yellow ft-gilroy_b fw-bold d-inline-flex px-5"
              >
                Get my website started
              </a>
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
                  <div className="title mb-5">
                    <h5 className="text-white fw-bold">
                      Your website is not just your online address. <br />
                      It’s a chance for you to show the world what you’ve got.
                    </h5>
                  </div>
                  <div className="aba-benefitsBlock">
                    <h4 className="fs-20 text-warning fw-semibold mb-3">
                      With a well-crafted website, you can
                    </h4>
                    <div className="abaBenefits">
                      <div className="row">
                        <div className="col-xxl col-lg-3 col-md-4">
                          <div className="card benefitCard">
                            <div className="card-body">
                              <div className="card-icon mb-3">
                                <img src={GoogleRankImg.src} alt="" />
                              </div>
                              <p className="card-title">
                                Rank higher on Google
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl col-lg-3 col-md-4">
                          <div className="card benefitCard">
                            <div className="card-body">
                              <div className="card-icon mb-3">
                                <img src={DiamondImg.src} alt="" />
                              </div>
                              <p className="card-title">
                                Showcase your unique approach
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl col-lg-3 col-md-4">
                          <div className="card benefitCard">
                            <div className="card-body">
                              <div className="card-icon mb-3">
                                <img src={TopTalentImg.src} alt="" />
                              </div>
                              <p className="card-title">
                                Attract top <br />
                                talent
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl col-lg-3 col-md-4">
                          <div className="card benefitCard">
                            <div className="card-body">
                              <div className="card-icon mb-3">
                                <img src={AcquisitionImg.src} alt="" />
                              </div>
                              <p className="card-title">
                                Engage prospective clients
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl col-lg-3 col-md-4">
                          <div className="card benefitCard">
                            <div className="card-body">
                              <div className="card-icon mb-3">
                                <img src={QualityImg.src} alt="" />
                              </div>
                              <p className="card-title">
                                Offer parents valuable resources
                              </p>
                            </div>
                          </div>
                        </div>
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
                        <h5 className="text-warning mb-3">
                          Just getting started? <br />
                          <span className="text-white">
                            The kickstart you’re looking for
                          </span>
                        </h5>
                        <p>
                          ABA start-ups count on us to define their vision,
                          establish a brand, and share their voice. With
                          friendly professionals who are here to help your
                          agency get off the ground fast, you’ll love a winning
                          combo of unmatched customer care and web design
                          expertise.
                        </p>
                        <a href="#" className="btn btn-yellow rounded-pill px-5 d-inline-flex">Get my site started</a>
                      </div>
                    </div>
                    <div class="col-lg-5 text-lg-end text-center groupImg ps-lg-0 ps-5">
                      <img class="img-fluid" src={gettingStartImg.src} />
                    </div>
                  </div>
                  <div className="row g-0 align-items-center">
                    <div class="col-lg-6 ps-5">
                      <img className="img-fluid" src={BusinessPickupImg.src} alt="" />
                    </div>
                    <div className="col-12 col-lg-6 ps-lg-3 ps-5 mt-lg-0 mt-4">
                      <div className="">
                        <h5 className="text-warning mb-3">
                          Been here a while? <br />
                          <span className="text-white">
                            Your business pick-me-up
                          </span>
                        </h5>
                        <p className="fs-20">
                          With web experts behind your project, you’ll get an
                          impressive product that brings out your agency’s
                          uniqueness. Our ABA sites don’t just look great. They
                          also incorporate ABA industry knowledge that targets
                          parents’ concerns and reaches potential employees.
                          Give your agency a boost with a striking online space
                          that is SEO-optimized.
                        </p>
                        <a href="#" className="btn btn-yellow rounded-pill px-5 d-inline-flex">Get my site started</a>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center beautifulWork">
                    <div className="col-lg-12">
                      <div className="work-slider-area">
                        <h2 className="text-warning fw-bold">
                          Check out <br />
                          our beautiful <br />
                          work.
                        </h2>
                        <Swiper className="slider-scroller" {...settingsB}>
                          <SwiperSlide>
                            <a href="#">
                              <img
                                src={BeautifulWorkImg1.src}
                                alt=""
                              />
                            </a>
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img
                                src={BeautifulWorkImg2.src}
                                alt=""
                              />
                            </a>
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img
                                src={BeautifulWorkImg3.src}
                                alt=""
                              />
                            </a>
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img
                                src={BeautifulWorkImg4.src}
                                alt=""
                              />
                            </a>
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img
                                src={BeautifulWorkImg5.src}
                                alt=""
                              />
                            </a>
                          </SwiperSlide>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-button-next"></div>
                        </Swiper>
                      </div>
                    </div>
                  </div>
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
                      <h5 className="text-white mb-3 text-center">
                        Here’s what goes into every ABA website <br />we create:
                      </h5>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={CompellingCopyImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">
                            Engaging Content
                          </h3>
                          <p className="card-content">
                            Our in-house copywriters use their ABA industry
                            knowledge to address parent concerns, share job
                            opportunities, and speak out what makes your agency
                            unique.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={DistinctiveDesignImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">
                            Customized Design
                          </h3>
                          <p className="card-content">
                            We create a unique design that reflects your
                            agency's identity and appeals to the people you want
                            to reach.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={PopupEnrollmentFormImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">
                            Pop-up Enrollment Form
                          </h3>
                          <p className="card-content">
                            Make it easy for viewers to give you important
                            information and access your services faster.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={StrategicCareersImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">
                            Strategic Careers Page
                          </h3>
                          <p className="card-content">
                            Show off your unique work environment. Attract top
                            talent to build a strong team that enhances therapy
                            quality and agency success.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={BlogResourcesImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">
                            Blog and Resources
                          </h3>
                          <p className="card-content">
                            Share useful information to demonstrate your
                            agency's expertise and build trust with your
                            audience.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={ChatBoxImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">
                            Chat Assistance
                          </h3>
                          <p className="card-content">
                            Offer quick, personalized information and support
                            for ABA therapy services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="row get_row g-0 optional_upgrades end_anim" id="end_anim">
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
                      <h5 className="mb-3">You want your business seen, <br />and so do we.</h5>
                      <p className="fs-20 mb-3 text-black">
                        Our SEO experts use specialized strategies like
                        keywords, backlinks, and meta tags to help your website
                        show up better on search engines. This way, more people
                        can find your website quickly.
                      </p>
                      <a href="#" className="btn btn-blue rounded-pill text-white px-5">I need this</a>
                    </div>
                    <div className="col-lg-6">
                      <div className="optionalImgOuter">
                        <img className="optionalImg" src={OptionalUpgradeImg.src} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="row get_row g-0 branding_package">
                    <div className="col-12 col-md-11 brandingPackageCol">
                      <div className="row g-0 align-items-center justify-content-between">
                        <div className="col-12 col-lg-9 ps-5">
                          <div className="benifit_ttl_mb mb-stl mb-2">
                            <h3 className="vr-title_mb">Branding Package</h3>
                          </div>
                          <h5 className="mb-2">Tell your story without words.</h5>
                          <p className="fs-20 mb-3 text-black">An iconic logo and branding get your business noticed and let people know what you have to offer. <b className="fw-semibold"> Our designers use color psychology and typography details as they work closely with you to create a look that forms the right impression in people’s minds.</b></p>
                          <a href="#" className="btn btn-blue rounded-pill text-white px-5">I need this</a>
                        </div>
                      </div>
                      <div className="row g-0 align-items-center beautifulWork">
                        <div className="col-lg-12">
                          <div className="work-slider-area">
                            <h2 className="text-primary fw-bold">
                              Check out <br />
                              our beautiful <br />
                              branding.
                            </h2>
                            <Swiper className="slider-scroller" {...settingsB}>
                              <SwiperSlide>
                                <a href="#">
                                  <img
                                    src={BeautifulWorkImg6.src}
                                    alt=""
                                  />
                                </a>
                              </SwiperSlide>
                              <SwiperSlide>
                                <a href="#">
                                  <img
                                    src={BeautifulWorkImg7.src}
                                    alt=""
                                  />
                                </a>
                              </SwiperSlide>
                              <SwiperSlide>
                                <a href="#">
                                  <img
                                    src={BeautifulWorkImg8.src}
                                    alt=""
                                  />
                                </a>
                              </SwiperSlide>
                              <SwiperSlide>
                                <a href="#">
                                  <img
                                    src={BeautifulWorkImg9.src}
                                    alt=""
                                  />
                                </a>
                              </SwiperSlide>
                              <SwiperSlide>
                                <a href="#">
                                  <img
                                    src={BeautifulWorkImg10.src}
                                    alt=""
                                  />
                                </a>
                              </SwiperSlide>
                              <div class="swiper-button-prev"></div>
                              <div class="swiper-button-next"></div>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row get_row g-0 branding_package brochureFlyer">
                    <div className="col-12 col-md-11 brandingPackageCol fingerTipCol">
                      <div className="row g-0 align-items-center justify-content-between">
                        <div className="col-12 col-lg-9 ps-5">
                          <div className="benifit_ttl_mb mb-stl mb-2">
                            <h3 className="vr-title_mb">Brochures and Flyers</h3>
                          </div>
                          <h5 className="mb-2">
                            Keep your business at everyone’s fingertips.
                          </h5>
                          <p className="fs-20 mb-3 text-black">Whether you choose flyers, brochures, or letterheads, we'll help you make the statement you want to make. <strong>Your design specialists here merge marketing strategy with eye-catching graphics to spread the word about your business and impact your audience.</strong></p>
                          <a href="#" className="btn btn-blue rounded-pill text-white px-5">I need this</a>
                        </div>
                      </div>
                      <div className="row g-0 align-items-center beautifulWork">
                        <div className="col-lg-12">
                          <div className="work-slider-area">
                            <h2 className="text-primary fw-bold">
                              Check out <br />
                              our beautiful <br />
                              printed work.
                            </h2>
                            <Swiper className="slider-scroller" {...settingsB}>
                              <SwiperSlide>
                                <a href="#">
                                  <img
                                    src={BeautifulWorkImg11.src}
                                    alt=""
                                  />
                                </a>
                              </SwiperSlide>
                              <SwiperSlide>
                                <a href="#">
                                  <img
                                    src={BeautifulWorkImg12.src}
                                    alt=""
                                  />
                                </a>
                              </SwiperSlide>
                              <SwiperSlide>
                                <a href="#">
                                  <img
                                    src={BeautifulWorkImg13.src}
                                    alt=""
                                  />
                                </a>
                              </SwiperSlide>
                              <SwiperSlide>
                                <a href="#">
                                  <img
                                    src={BeautifulWorkImg14.src}
                                    alt=""
                                  />
                                </a>
                              </SwiperSlide>
                              <SwiperSlide>
                                <a href="#">
                                  <img
                                    src={BeautifulWorkImg15.src}
                                    alt=""
                                  />
                                </a>
                              </SwiperSlide>
                              <div class="swiper-button-prev"></div>
                              <div class="swiper-button-next"></div>
                            </Swiper>
                          </div>
                        </div>
                      </div>
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
              <h2 className="text-white text-center fw-bold">
                Whether Wordpress, Webflow, custom, or others, <br />
                <span className="text-warning"> Your website is built by experts </span>
                who know just what you’re looking for.
              </h2>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-4 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <img className="me-2" src={MobileResponsivenessImg.src} alt="" />
                <h4 className="mb-0 text-white fw-bold">Mobile responsiveness</h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <img className="me-2" src={WebsiteSpeedImg.src} alt="" />
                <h4 className="mb-0 text-white fw-bold">High loading speed</h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <img className="me-2" src={CustomerServiceImg.src} alt="" />
                <h4 className="mb-0 text-white fw-bold">Continuous support</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt-lg-4 pt-lg-2">
            <div className="col-lg-4 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <img className="me-2" src={QuickTurnaroundTimeImg.src} alt="" />
                <h4 className="mb-0 text-white fw-bold">Quick turnaround</h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <img className="me-2" src={HostingOptionsImg.src} alt="" />
                <h4 className="mb-0 text-white fw-bold">Hosting and maintenance plans</h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <img className="me-2" src={CompetitiveRatesImg.src} alt="" />
                <h4 className="mb-0 text-white fw-bold">Competitive rates</h4>
              </div>
            </div>
          </div>
          <div className="text-center mt-lg-5">
            <a href="#" className="btn btn-yellow d-inline-flex">Get my site started</a>
          </div>
        </div>
      </section>
      <section className="abaWebsites">
        <div className="container-fluid">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-xl-6">
              <h2 className="text-center fw-bold text-primary">
                See how we’ve delivered for other ABA agencies like yours.
              </h2>
            </div>
          </div>
          <div className="row mb-5 pb-3 gy-4">
            <div className="col-lg-3 col-md-6 col-11 text-center">
              <img className="img-fluid" src={AbaAgencyImg1.src} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-11 text-center">
              <img className="img-fluid" src={AbaAgencyImg2.src} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-11 text-center">
              <img className="img-fluid" src={AbaAgencyImg3.src} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-11 text-center">
              <img className="img-fluid" src={AbaAgencyImg4.src} alt="" />
            </div>
          </div>
          <div className="text-center">
            <a href="#" className="btn btn-blue rounded-pill px-4">
              I need a site like this
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
