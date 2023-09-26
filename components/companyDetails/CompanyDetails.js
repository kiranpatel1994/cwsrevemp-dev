/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
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

export default function CompanyDetails({
  details,
  list,
  themeData,
  testimonialSettings,
}) {
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
    slidesPerView: 1.2,
    spaceBetween: 20,
    autoplay: {
      delay: 10000,
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
    breakpoints: {
      768: {
        slidesPerView: 1.6,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2.6,
        spaceBetween: 20,
      },
    },
  };

  const first_row = list.slice(0, 7);
  const second_row = list.slice(7, 13);
  const third_row = list.slice(13, 20);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleArray(testimonialSettings.clientTestimonials);

  return (
    <>
      <main className="position-relative zindex-2">
        <section className="companyBanner">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1>
                  <em>Built </em> by you. <em>Boosted </em> by us.
                  <img src="/images/preview-22.png" />
                </h1>
                <p
                  className="companysubTitle"
                  dangerouslySetInnerHTML={{
                    __html: details.companySettings.companyTitle,
                  }}
                ></p>
                <p
                  className="banner-information"
                  dangerouslySetInnerHTML={{
                    __html: details.companySettings.companySubtitle,
                  }}
                ></p>
                <div className="demo-container">
                  <div className="progress-bar">
                    <div className="progress-bar-value"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stickyArea">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12">
                  <img
                    className="w-100 img-fluid opacity-50"
                    src="/images/meeting-new.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {details.companySettings.founderBlock && (
          <section className="founderArea">
            <div className="container p-lg-0">
              <div className="row g-36">
                {details.companySettings.founderBlock.map((item, index) => {
                  var adjustMb = "mb-" + (index + 1);

                  return (
                    <div
                      className="col-12 col-lg-4 founder-col"
                      key={`founderblock${index}`}
                    >
                      <div className="shapeBox">
                        {item.blockIcon.sourceUrl && (
                          <figure>
                            <img src={item.blockIcon.sourceUrl} />
                          </figure>
                        )}
                        <div className="limboTitle">
                          {item.blockTitle && (
                            <h4 className="mb-xl-1 mb-3">{item.blockTitle}</h4>
                          )}
                          {item.blockDescription && (
                            <p className={adjustMb}>{item.blockDescription}</p>
                          )}
                          <div className="dhareBoxArrow">
                            <img src="images/downArrow.svg" alt="" />
                          </div>
                          {item.blockTagline && (
                            <em
                              dangerouslySetInnerHTML={{
                                __html: item.blockTagline,
                              }}
                            ></em>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {details.companySettings.aboutFounder && (
          <section className="aboutFounder position-relative zindex-2">
            <div className="container p-xl-0">
              <div className="row g-36">
                <div className="col-12 col-xl-4 position-relative pt-lg-5">
                  <div className="founderInfo">
                    <h3>About the Founder </h3>
                    {details.companySettings.founderName && (
                      <h4 className="founder_name">
                        {details.companySettings.founderName}
                      </h4>
                    )}
                  </div>
                </div>
                <div className="col-12 col-xl-8 position-relative userContainer pt-4 mt-2">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="headLine"
                        dangerouslySetInnerHTML={{
                          __html: details.companySettings.aboutFounder,
                        }}
                      ></div>
                    </div>
                    <div
                      className="col-lg-12 column-count-2"
                      dangerouslySetInnerHTML={{
                        __html: details.companySettings.founderDescription,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {list && (
          <section className="ourTeam">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-4">
                  <h4 className="mb-xl-0 mb-4">Our team </h4>
                </div>
                <div className="col-xl-8">
                  <div className="subTitle">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: details.companySettings.teamDescription,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row team-section">
                <div className="col-12">
                  <ul className="teamList">
                    {list.map((item, index) => {
                      return (
                        <li key={`tab-list-${index}`}>
                          <h2>{item.node.title}</h2>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                item.node.memberSettings.memberDesignation,
                            }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
        {testimonialSettings.clientTestimonials && (
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
                        <div className="d-flex flex-xl-row flex-column align-items-start card-bunch">
                          {item.authorImage && (
                            <div className="sm-user-bild mb-xl-0 mb-4">
                              <div className="circle_area">
                                <img src={item.authorImage.sourceUrl} alt="" />
                              </div>
                            </div>
                          )}
                          {item.authorDescription && (
                            <div
                              className="para-side-detail"
                              dangerouslySetInnerHTML={{
                                __html: item.authorDescription,
                              }}
                            ></div>
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
        <div className="sngl-title companySnglTitle handAnimation" hidden>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 text-center">
                {themeData.phone && (
                  <h3>
                    <span>
                      Reach out to us at&nbsp;
                      <Link
                        className="text-decoration-none text-black"
                        href={`tel:${themeData.phone}`}
                      >
                        {themeData.phone}
                      </Link>
                    </span>
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
