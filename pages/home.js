import React, { useEffect } from "react";
import GraphAPI from "../services/graphQL";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Home = ({ homeSettings, portfolioList, testimonialSettings }) => {
  // Add Class in Body
  useEffect(() => {
    document.body.classList.add("newHome");
    return () => {
      document.body.classList.remove("newHome");
    };
  }, []);

  const perChunk = 6; // items per chunk
  const result = portfolioList.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
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
    slidesPerView: 2.6,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const handleModal = (title, content, image, url) => {
    document.querySelector(".sideModal-title h3").innerHTML = title;
    document.querySelector(".modal-content").innerHTML = content;
    document.querySelector(".sideModal-title a").href = url;
    document.querySelector(".main-project-data").src = image;
    document.querySelector(".side-modal").classList.toggle("side-modal-off");
    ["overflow-hidden", "toggleShadow"].map((v) =>
      document.querySelector("body").classList.toggle(v)
    );
  };
  const handleMouseEnter = (e) => {
    var list;
    list = document.querySelectorAll(".bild-cont");
    for (var i = 0; i < list.length; ++i) {
      list[i].classList.add("hovOnRemove");
    }
    e.currentTarget.classList.remove("hovOnRemove");
  };

  const handleCheck = () => {
    document.querySelector(".side-modal").classList.toggle("side-modal-off");
    ["overflow-hidden", "toggleShadow"].map((v) =>
      document.querySelector("body").classList.toggle(v)
    );
  };

  const handleMouseLeave = (e) => {
    var listR;
    listR = document.querySelectorAll(".bild-cont");
    for (var i = 0; i < listR.length; ++i) {
      listR[i].classList.remove("hovOnRemove");
    }
  };

  const handleClose = () => {
    document.querySelector(".side-modal").classList.toggle("side-modal-off");
    ["overflow-hidden", "toggleShadow"].map((v) =>
      document.querySelector("body").classList.toggle(v)
    );
  };

  const scroll2El = (elID) => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop,
      behavior: "smooth",
    });
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };

  return (
    <main>
      <section className="homeBanner">
        <div className="container-xl position-relative">
          <div className="row g-0 position-relative">
            <div className="col-12">
              <div
                className="title text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1>
                  <span>{homeSettings.bannerTitle}</span>{" "}
                </h1>
                <div className="new-title">
                  <em>
                    <TypeAnimation
                      sequence={["Simplify.", 300, "Best."]}
                      speed={500}
                      deletionSpeed={300}
                      cursor={true}
                      wrapper="span"
                      repeat={Infinity}
                    />{" "}
                  </em>{" "}
                  your workflow.
                </div>
              </div>
              <div className="bannerVideo">
                <iframe
                  width="100%"
                  height="642"
                  src="https://www.youtube.com/embed/k2maqlyUuVw?showinfo=0&controls=0&autoplay=1&mute=1&loop=1"
                  title="YouTube video player"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="scrollForMore">
            <button onClick={onBtnClick} goto="contacts">
              <div className="inner-cirl">
                <div className="arrow-svg">
                  <img src="images/arrow.svg" />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="brandWeServe">
            <div className="brandIcon shopify">
                <img className="normlImg" src="images/shopify-brand-gray.svg" alt="" />
                <img className="hoverImg" src="images/shopify-brand-color.svg" alt="" />
            </div>
            <div className="brandIcon wordpress">
                <img className="normlImg" src="images/wordpress-brand-gray.png" alt="" />
                <img className="hoverImg" src="images/wordpress-brand-color.png" alt="" />
            </div>
            <div className="brandIcon framer">
                <img className="normlImg" src="images/framer-brand-gray.svg" alt="" />
                <img className="hoverImg" src="images/framer-brand-color.svg" alt="" />
            </div>
        </div>
      </section>
      {result && (
        <section className="project-area">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 position-relative">
                <div className="banner-projects">
                  {result.map((item, index) => {
                    return (
                      <div className="project-part" key={index}>
                        {item.map((i, j) => {
                          return (
                            <div
                              className="bild-cont"
                              key={j}
                              onMouseLeave={(e) => handleMouseLeave(e)}
                              onMouseEnter={(e) => handleMouseEnter(e)}
                              onClick={() =>
                                handleModal(
                                  i.node.title,
                                  i.node.content,
                                  i.node.portfolioSettings.modalImage.sourceUrl,
                                  i.node.portfolioSettings.portfolioUrl
                                )
                              }
                            >
                              <Link href="javascript:void(0)">
                                <img
                                  className=""
                                  src={i.node.featuredImage.node.sourceUrl}
                                />
                                {/* <Image className='' width={} height={} src={i.node.featuredImage.node.sourceUrl} /> */}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="d-table ms-auto me-auto center-button-project">
            <Link href="#" className="btn btn-yellow">
              <span>View Portfolio </span>{" "}
              <img src="/images/fire_1f525.png" alt="" />
            </Link>
          </div>
        </section>
      )}
      {testimonialSettings.clientTestimonials && (
        <section className="about-us">
          <div className="floating-object"></div>
          <div className="aboutUs-title position-relative zindex-2">
            <div className="row">
              <div className="col-12 about-info overflow-hidden">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                  {homeSettings.testimonialsTitle}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {homeSettings.testimonialsSubtitle}
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
                      <div className="d-flex align-items-start card-bunch">
                        {item.authorImage && (
                          <div className="sm-user-bild">
                            <img src={item.authorImage.sourceUrl} alt="" />
                          </div>
                        )}
                        {item.authorDescription && (
                          <div className="para-side-detail">
                            <p>{item.authorDescription}</p>
                          </div>
                        )}
                      </div>
                      <div className="other-detail">
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
      {homeSettings.processBlocks && (
        <section className="simple-process">
          <div className="container-xl position-relative zindex-2">
            <div className="row">
              <div className="col-12">
                {homeSettings.processMainTitle && (
                  <div className="text-center overflow-hidden">
                    <h2
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      dangerouslySetInnerHTML={{
                        __html: homeSettings.processMainTitle,
                      }}
                    ></h2>
                  </div>
                )}

                <div className="card-items">
                  <div className="row g-37">
                    {homeSettings.processBlocks.map((item, index) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-lg-3 card-items-cols"
                          key={index}
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay="300"
                        >
                          <div className="card-container">
                            {item.processImage && (
                              <div className="card-bild">
                                <img src={item.processImage.sourceUrl} alt="" />
                              </div>
                            )}
                            <div className="card-mor-detail">
                              <h6 className="title-cr">{item.processTitle}</h6>
                              <p>{item.processDescription}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;

export async function getStaticProps() {
  const homeJson = await GraphAPI.homeSettings();
  const portfolioJson = await GraphAPI.portfolioListingSettings();
  const testimonial = await GraphAPI.clientTestimonialSettings();
  return {
    props: {
      testimonialSettings:
        testimonial.data.data.acfOptionsThemeOptions.themeSettings,
      homeSettings: homeJson.data.data.pageBy.homeSettings,
      portfolioList: portfolioJson.data.data.portfolios.edges,
    },
  };
}
