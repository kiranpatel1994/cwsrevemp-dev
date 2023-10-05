/* eslint-disable react/jsx-no-target-blank */
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
    slidesPerView: 2,
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
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1800: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  const obfuscatedImage = "/api/obfuscated-image/single-image";
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

  shuffleArray(details?.companySettings?.testimonialBlocks);

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
              <div className="row g-36 align-items-center">
                <div className="col-12 col-xl-4 position-relative pt-lg-5">
                  <div className="founderInfo">
                    <h3>About the Founder </h3>
                    <div className="img_bilder mb-3">
                      <img
                        className="img-fluid w-100"
                        src={obfuscatedImage}
                        onContextMenu={handleContextMenu}
                        alt="self_por"
                        data-robots="noindex"
                      />
                    </div>
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
                  <div className="row mt-3 align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="d-block">
                        <a
                          class="btn btn-yellow d-table"
                          href="https://www.linkedin.com/in/martin-klein-cws"
                          target="_blank"
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"
                                fill="rgba(7,4,43,1)"
                              ></path>
                            </svg>{" "}
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="sign_name">Signature Here!</div>
                    </div>
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
        {details.companySettings.testimonialBlocks && (
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
                {details.companySettings.testimonialBlocks.map(
                  (item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="raw-card">
                          <div className="d-flex flex-xl-row flex-column align-items-start card-bunch">
                            {item.authorImage && (
                              <div className="sm-user-bild mb-xl-0 mb-4">
                                <div className="circle_area">
                                  <img
                                    src={item.authorImage.sourceUrl}
                                    alt=""
                                  />
                                </div>
                              </div>
                            )}
                            {item.authorDescription && (
                              <div
                                className="para-side-detail"
                                dangerouslySetInnerHTML={{
                                  __html: item.authorDescription,
                                }}
                              />
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
                  }
                )}

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
