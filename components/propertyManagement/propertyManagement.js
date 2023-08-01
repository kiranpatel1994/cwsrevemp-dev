/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GravityFormsForm } from "../../generated/graphql";
import GravityForm from "../../components/GravityForm";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";

gsap.registerPlugin(ScrollTrigger);

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  cache: new InMemoryCache(),
});

export default function PropertyManagement({ data, form }) {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".torusLandingContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: torusLanding,
    });

    if (typeof(window) !== "undefined") {
      if (window.innerWidth >= 1024) {  
        gsap.set(".dragWithme", { top: "-10px" });
        const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });
    
        ScrollTrigger.create({
          trigger: ".gl_area",
          start: "-=600",
          endTrigger: "#end_anim",
          end: "+=2600",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: liftArow,
          once: true
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
          end: "+=2600",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: action,
          once: true
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
          once: true
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
          once: true
        });
    
        const panels = gsap.utils.toArray([".gl_area .benifit_ttl", ".gl_area .benifit_ttl_mb"]);
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

    document.body.classList.add("property-management");
    return () => {
      document.body.classList.remove("property-management");
    };
  }, []);

  return (
    <main
      className="position-relative prpertyManagement prpertyManagement_nw zindex-2 overflow-hidden"
      id="main"
    >
      <div className="banner__overlap">
        <div className="container bbn_1">
          <div className="design_development_container ecom_development_container"></div>
          <div className="bottom_shape">
            <div className="floor-1">
              <div className="torusLandingLottie">
                <div className="torusLandingContainer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner_content position-relative overflow-hidden">
        <div className="container p-lg-0">
          <div className="row g-xl-0">
            <div className="col-12 col-xl-8 ecom__info position-relative">
              <div className="banner_content_info">
                {data.pageHeading && <h1>{data.pageHeading} </h1>}
                {data.bannerSubtitle && (
                  <div className="sub_title play_fair-ttl">
                    <h2>{data.bannerSubtitle} </h2>
                  </div>
                )}
                {data.bannerTitle && (
                  <div className="moji_ttl">
                    <h3>{data.bannerTitle} </h3>
                  </div>
                )}
                <div className="d-none d-lg-block">
                  {data.bannerDescription && (
                    <div className="position-relative im_moji">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.bannerDescription,
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 my-xl-0 my-5">
              <div className="bg__form">
                <div className="text-center">
                  <h3>Intake Form </h3>
                </div>
                {/* add form here */}
                <div className="placeholder__form form_container">
                  <ApolloProvider client={client}>
                    <GravityForm form={form} />
                  </ApolloProvider>
                </div>
              </div>

              <div className="d-block d-lg-none text-center mt-lg-0 mt-4 pt-lg-0 pt-3 bannerDesc">
                {data.bannerDescription && (
                  <div className="position-relative im_moji">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.bannerDescription,
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gl_area site__management">
        <div className="container-xl position-relative p-0">
          <div className="line_anim">
            <div className="profitDrag"></div>
            <div className="dragWithme">
              <img src="../images/smArrow.png" />
            </div>
          </div>
          <section className="row get_row g-0 sec-1 start_anim" id="start_anim">
            <div className="col-12 col-md-1 d-none d-md-block benit__ttl">
              {data.mainHeading && (
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.mainHeading}</h3>
                </div>
              )}
            </div>
            <div className="col-md-11 col-12 pd-30-mix">
              <div className="work__efficient pd-48-15">
                <div className="d-md-none mb-4">
                  {data.mainHeading && (
                    <div className="benifit_ttl_mb">
                      <h3 className="vr-title_mb">{data.mainHeading}</h3>
                    </div>
                  )}
                </div>
                {data.benefitsDescription && (
                  <div
                    className="benefitDesc"
                    dangerouslySetInnerHTML={{
                      __html: data.benefitsDescription,
                    }}
                  ></div>
                )}
                {data.benefitsBlocks && (
                  <ul className="list-inline benifit__inner">
                    {data.benefitsBlocks.map((item, index) => {
                      return (
                        <li
                          className="list-inline-item"
                          key={`benefit${index}`}
                        >
                          <div className="ffk_btn">
                            <span>{item.benefitBlockTitle}</span>
                          </div>
                        </li>
                      );
                    })}
                    {data.benefitsLink.url && (
                      <li className="list-inline-item d-none">
                        <div className="d-table ms-auto me-auto center-button-project">
                          <a
                            href={data.benefitsLink.url}
                            className="btn btn-yellow"
                          >
                            <span className="me-2">
                              {data.benefitsLink.title}
                            </span>
                            <img src="/images/fire_1f525.png" alt="" />
                          </a>
                        </div>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-2">
            <div className="col-12 col-md-1 d-none d-md-block wus__ttl">
              {data.whyUsHeading && (
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.whyUsHeading}</h3>
                </div>
              )}
            </div>
            <div className="col-md-11 col-12 pd-30-mix">
              <div className="row g-0 why__us align-items-center pd-48-15">
                <div className="d-md-none mb-4">
                  {data.whyUsHeading && (
                    <div className="benifit_ttl_mb">
                      <h3 className="vr-title_mb">{data.whyUsHeading}</h3>
                    </div>
                  )}
                </div>
                <div className="col-12 online_property position-relative text-center">
                  {data.whyUsTitle && (
                    <div
                      className="h2"
                      dangerouslySetInnerHTML={{
                        __html: data.whyUsTitle,
                      }}
                    ></div>
                  )}
                  {data.whyUsDescription && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.whyUsDescription,
                      }}
                    ></div>
                  )}
                </div>
              </div>
              <div className="box__container pd-48-15">
                {data.whyUsContent && (
                  <div className="row g-xl-5 corporateBoxes align-items-end">
                    {data.whyUsContent.map((item, index) => {
                      return (
                        <div
                          className="col-12 col-lg-4 box__container_col"
                          key={`whyUs${index}`}
                        >
                          <div className="box__bg">
                            <div className="transparent_filter"></div>
                            <figure className="mb-0">
                              <div className="min-content">
                                <img src={item.icon.sourceUrl} />
                              </div>
                              <figcaption className="text-center">
                                <h3>{item.title} </h3>
                                <div
                                  className="mb-4"
                                  dangerouslySetInnerHTML={{
                                    __html: item.description,
                                  }}
                                ></div>
                                <a
                                  className="btn btn-yellow"
                                  href={item.buttonLink}
                                >
                                  {item.buttonText}
                                </a>
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-3 end_anim" id="end_anim">
            <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
              {data.serviceDetailsHeading && (
                <div className="benifit_ttl align-self-center">
                  <h3 className="vr-title">{data.serviceDetailsHeading}</h3>
                </div>
              )}
            </div>
            <div className="col-md-11 col-12 pd-30-mix time_acquainted ps-lg-5 pd-48-15">
              <div className="d-md-none mb-4">
                {data.serviceDetailsHeading && (
                  <div className="benifit_ttl_mb">
                    <h3 className="vr-title_mb">
                      {data.serviceDetailsHeading}
                    </h3>
                  </div>
                )}
              </div>
              <div className="row g-0 why__us align-items-center">
                {data.serviceDetailsTitle && (
                  <div className="col-12 automate_work">
                    <h2>{data.serviceDetailsTitle} </h2>
                  </div>
                )}
              </div>
              <div className="row why__us">
                <div className="col-12 col-lg-4 position-relative arrow_area">
                  {data.serviceDetailsSubtitle && (
                    <h4>{data.serviceDetailsSubtitle}</h4>
                  )}
                  {data.serviceDetailsDescription && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.serviceDetailsDescription,
                      }}
                    ></div>
                  )}
                </div>
                {data.serviceDetailsImage.sourceUrl && (
                  <div className="col-12 col-lg-8 mt-lg-0 mt-4 d-lg-block d-none">
                    <img
                      className="img-fluid"
                      src={data.serviceDetailsImage.sourceUrl}
                    />
                  </div>
                )}
                <div className="d-lg-none mt-4 text-center">
                  <img
                    className="img-fluid"
                    src="/images/management-mobile-img.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="row g-0 why__us align-items-lg-center">
                {data.socialMediaImage.sourceUrl && (
                  <div className="col-lg-5 text-lg-start text-center order-lg-0 order-1 mb-lg-0 mb-5 pb-lg-0 pb-5">
                    <img
                      className="img-fluid"
                      src={data.socialMediaImage.sourceUrl}
                    />
                  </div>
                )}
                <div className="col-lg-7 automate_work position-relative mt-lg-0 mt-5 pb-lg-0 pb-5 order-lg-1 order-0">
                  <div className="d-table ms-lg-auto me-auto">
                    {data.socialMediaHeading && (
                      <h4>{data.socialMediaHeading}</h4>
                    )}
                    {data.socialMediaDescription && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.socialMediaDescription,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row g-0 why__us align-items-center">
                <div className="col-12 col-lg-6 automate_work position-relative">
                  <div className="d-table ms-lg-auto me-auto">
                    {data.flexiblePaymentOptionsHeading && (
                      <h4>{data.flexiblePaymentOptionsHeading}</h4>
                    )}
                    {data.flexiblePaymentOptionsDescription && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.flexiblePaymentOptionsDescription,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                {data.flexiblePaymentOptionsImage.sourceUrl && (
                  <div className="col-12 col-lg-6 text-lg-start text-center">
                    <img
                      className="img-fluid"
                      src={data.flexiblePaymentOptionsImage.sourceUrl}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="last-container">
        <div className="container">
          <div className="row g-0 why__us align-items-center">
            <div className="col-12 automate_work">
              {data.experienceMarketingAndServiceHeading && (
                <div
                  className="text-center expMarketingHeading"
                  dangerouslySetInnerHTML={{
                    __html: data.experienceMarketingAndServiceHeading,
                  }}
                />
              )}
            </div>
          </div>
          <div className="row lc-container">
            {data.services.map((item, index) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-4"
                  key={`service${index}`}
                >
                  <div className="d-flex flex-md-row flex-column align-items-center">
                    <img src={item.icon.sourceUrl} />
                    <span>{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {data.experienceMarketingButtonUrl && (
            <div className="d-md-table ms-auto me-auto">
              <a
                className="btn btn-yellow"
                href={data.experienceMarketingButtonUrl}
              >
                {data.experienceMarketingButtonText}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="desktop__container">
        <div className="container">
          <div className="row g-0 why__us align-items-center">
            <div className="col-12 automate_work">
              <div className="text-center">
                <h2>{data.simplifiedPropertyManagementHeading} </h2>
              </div>
            </div>
          </div>
          <div className="row desk_top mb-5">
            <div className="row">
              {data.propertyManagementScreens.map((item, index) => {
                return (
                  <div
                    className="col-12 col-md-6 col-lg-4"
                    key={`property-${index}`}
                  >
                    <img
                      className="img-fluid"
                      src={item.screenImage.sourceUrl}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {data.propertyManagementButtonLink && (
            <div className="d-md-table ms-auto me-auto">
              <a
                className="btn btn-yellow"
                href={data.propertyManagementButtonLink}
              >
                {data.propertyManagementButtonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
