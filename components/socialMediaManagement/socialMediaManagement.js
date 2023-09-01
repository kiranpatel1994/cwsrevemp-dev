/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";
import socialLove from "/public/lottie/social-media.json";
import ServiceContact from "../commonServiceContact/commonServiceContact";

gsap.registerPlugin(ScrollTrigger);

export default function SocialMediaManagement({ data, themeOptions, form }) {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".torusLandingContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: torusLanding,
    });

    lottie.loadAnimation({
      container: document.querySelector(".socialLoveContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: socialLove,
    });

    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) {
        gsap.set(".dragWithme", { top: "-10px" });
        const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });

        ScrollTrigger.create({
          trigger: ".gl_area",
          start: "-=600",
          endTrigger: "#end_anim",
          end: "+=1800",
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
          end: "+=1800",
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

    document.body.classList.add("social-media");
    return () => {
      document.body.classList.remove("social-media");
    };
  }, []);

  return (
    <main
      className="position-relative sociaManagement zindex-2 overflow-hidden"
      id="main"
    >
      <div className="banner_content position-relative overflow-hidden">
        <div className="container p-lg-0">
          <div className="row g-0">
            <div className="col-12 ecom__info position-relative">
              <div className="banner_content_info">
                <h1>{data.pageHeading} </h1>
                {data.bannerSubtitle && (
                  <div className="sub_title play_fair-ttl">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.bannerSubtitle,
                      }}
                    ></div>
                  </div>
                )}
                <div className="moji_ttl">
                  <h3>
                    Let them say they saw you on
                    <span className="liftSwap position-relative">
                      <span>Facebook </span>
                      <span>Twitter </span>
                    </span>
                  </h3>
                </div>
                {data.bannerDescription && (
                  <div
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: data.bannerDescription }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gl_area social-media-management">
        <div className="container-xl position-relative p-0">
          <div className="line_anim">
            <div className="profitDrag"></div>
            <div className="dragWithme">
              <img src="../images/smArrow.png" />
            </div>
          </div>
          <section className="row get_row g-0 sec-1 start_anim" id="start_anim">
            {data.benefitsTitle && (
              <div className="col-md-1 d-none d-md-block benit__ttl">
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.benefitsTitle}</h3>
                </div>
              </div>
            )}
            <div className="col-md-11 pd-30-mix pd-48-15">
              <div className="d-md-none mb-4">
                {data.benefitsTitle && (
                  <div className="benifit_ttl_mb">
                    <h3 className="vr-title_mb">{data.benefitsTitle}</h3>
                  </div>
                )}
              </div>
              {data.benefitsBlocks && (
                <ul className="list-inline benifit__inner">
                  {data.benefitsBlocks.map((item, index) => {
                    return (
                      <li className="list-inline-item" key={`benefit-${index}`}>
                        <div className="ffk_btn">
                          <div className="d-md-none position-relative zindex-3">
                            <img src="../images/enf-1.png" />
                          </div>
                          <span>{item.benefitBlockTitle}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>
          <section className="row get_row g-0 sec-2">
            {data.whyUsHeading && (
              <div className="col-1 wus__ttl d-none d-md-block">
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.whyUsHeading}</h3>
                </div>
              </div>
            )}
            <div className="col-md-11 pd-30-mix pd-48-15">
              {data.whyUsHeading && (
                <div className="d-md-none mb-4">
                  <div className="benifit_ttl_mb">
                    <h3 className="vr-title_mb">{data.whyUsHeading}</h3>
                  </div>
                </div>
              )}
              <div className="row g-lg-0 why__us align-items-center">
                <div className="col-lg-7 maxim_effort position-relative">
                  <div
                    dangerouslySetInnerHTML={{ __html: data.whyUsTitle }}
                  ></div>
                  <div
                    className="whyUsDesc"
                    dangerouslySetInnerHTML={{ __html: data.whyUsDescription }}
                  ></div>
                </div>
                {data.whyUsImage && (
                  <div className="col-lg-5">
                    <img className="whyUsImg" src={data.whyUsImage.sourceUrl} />
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-3 end_anim" id="end_anim">
            <div className="floor-1">
              <div className="torusLandingLottie">
                <div className="torusLandingContainer" />
              </div>
              {/* <img className="dt_1" src="../images/ring_1.png" /> */}
            </div>
            {data.serviceDetailsHeading && (
              <div className="col-1 serv__ttl d-none d-md-block">
                <div className="benifit_ttl align-self-center">
                  <h3 className="vr-title">{data.serviceDetailsHeading}</h3>
                </div>
              </div>
            )}
            <div className="col-md-11 time_acquainted pd-30-mix pd-48-15">
              {data.serviceDetailsHeading && (
                <div className="d-md-none mb-5">
                  <div className="benifit_ttl_mb pb-5">
                    <h3 className="vr-title_mb">
                      {data.serviceDetailsHeading}
                    </h3>
                  </div>
                </div>
              )}
              <div className="socialLove">
                <div className="socialLoveInner">
                  <div className="socialLoveContainer" />
                </div>
              </div>
              {/* <div className="row g-0 why__us align-items-center">
                                {data.serviceDetailsDescription &&
                                    <div className="col-md-12 text-center automate_work position-relative">
                                        <div dangerouslySetInnerHTML={{ __html: data.serviceDetailsDescription }}></div>
                                    </div>
                                }
                            </div> */}
              {data.serviceDetailsContent && (
                <div className="box__container">
                  <div className="row">
                    {data.serviceDetailsContent.map((item, index) => {
                      return (
                        <div
                          className="col-12 col-lg-4"
                          key={`service${index}`}
                        >
                          <div className="box__bg">
                            <figure className="mb-0">
                              {item.icon && (
                                <div className="min-content">
                                  <img src={item.icon.sourceUrl} />
                                </div>
                              )}
                              <figcaption className="text-center">
                                <h3>{item.title} </h3>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                ></div>
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="row g-0 align-items-center z-2 position-relative pb-5 mb-5 neverHassleBlock">
                <div className="col-12 pb-md-5">
                  {data.automatedSubHeading && (
                    <h2 className="play_fair-white display-5 text-center">
                      {data.automatedSubHeading}
                    </h2>
                  )}
                </div>
              </div>
              {/* <div className="row g-0 why__us align-items-center">
                                {data.automatedImage &&
                                    <div className="col-md-5">
                                        <img className="img-fluid" src={data.automatedImage.sourceUrl} />
                                    </div>
                                }
                                <div className="col-md-7 automate_work position-relative">
                                    <div className="ps-5">
                                        <h2>{data.automatedHeading}</h2>
                                        {data.automatedContent &&
                                            <div className="list-unstyled list_y_dots text-white" dangerouslySetInnerHTML={{ __html: data.automatedContent }}>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div> */}
              {/* <div className="row g-0 why__us align-items-center z-2 position-relative">
                                <div className="col-md-5 automate_work position-relative">
                                    <div className="d-table ms-auto me-auto">
                                        <h2>{data.maintainingBlogHeading}</h2>
                                        <div className="list-unstyled list_y_dots text-white" dangerouslySetInnerHTML={{ __html: data.maintainingBlogContent }}></div>
                                    </div>
                                </div>
                                {data.maintainingBlogImage &&
                                    <div className="col-md-7">
                                        <img className="maintainingBlogImage img-fluid" src={data.maintainingBlogImage.sourceUrl} />
                                    </div>
                                }
                            </div> */}
            </div>
          </section>
        </div>
      </div>
      <ServiceContact data={themeOptions} />
    </main>
  );
}
