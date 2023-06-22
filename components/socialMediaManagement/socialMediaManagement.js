import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";
import socialLove from "/public/lottie/social-media.json";

gsap.registerPlugin(ScrollTrigger);

export default function SocialMediaManagement({ data }) {
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

    gsap.set(".dragWithme", { top: "-10px" });
    const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });

    ScrollTrigger.create({
      trigger: ".gl_area",
      start: "-=259",
      endTrigger: "#end_anim",
      end: "+=2500",
      markers: false,
      scrub: -2,
      pinSpacing: false,
      animation: liftArow,
      toggleActions: "play none none none",
      //   toggleClass: "active"
    });

    gsap.to(".profitDrag", { scaleY: 0 });
    const action = gsap.to(".profitDrag", {
      scaleY: "100%",
      transformOrigin: "top bottom",
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: "#start_anim",
      start: "-=270",
      endTrigger: "#end_anim",
      end: "+=2500",
      markers: false,
      scrub: -2,
      pinSpacing: false,
      animation: action,
      toggleActions: "play none none none",
      //   toggleClass: "active"
    });

    const panels = gsap.utils.toArray(".gl_area .benifit_ttl");
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "-=270",
        end: "-=270",
        markers: false,
        onEnter: () => {
          panels[i].classList.add("activate");
        },
        onEnterBack: () => {
          panels[i].classList.remove("activate");
        },
      });
    });

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
        <div className="container-xl p-0">
          <div className="row g-0">
            <div className="col-12 ecom__info position-relative">
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
      <div className="gl_area social-media-management">
        <div className="container-xl position-relative p-0">
          <div className="line_anim">
            <div className="profitDrag"></div>
            <div className="dragWithme">
              <img src="../images/smArrow.png" />
            </div>
          </div>
          <section className="row get_row g-0 sec-1" id="start_anim">
            {data.benefitsTitle && (
              <div className="col-1 benit__ttl">
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.benefitsTitle}</h3>
                </div>
              </div>
            )}
            <div className="col-11">
              {data.benefitsBlocks && (
                <ul className="list-inline benifit__inner">
                  {data.benefitsBlocks.map((item, index) => {
                    return (
                      <li className="list-inline-item" key={`benefit-${index}`}>
                        <div className="ffk_btn">
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
              <div className="col-1 wus__ttl">
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.whyUsHeading}</h3>
                </div>
              </div>
            )}
            <div className="col-11">
              <div className="row g-0 why__us align-items-center">
                <div className="col-md-7 maxim_effort position-relative">
                  <div
                    dangerouslySetInnerHTML={{ __html: data.whyUsTitle }}
                  ></div>
                  <div
                    className="whyUsDesc"
                    dangerouslySetInnerHTML={{ __html: data.whyUsDescription }}
                  ></div>
                </div>
                {data.whyUsImage && (
                  <div className="col-md-5">
                    <img className="whyUsImg" src={data.whyUsImage.sourceUrl} />
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-3" id="end_anim">
            <div className="floor-1">
              <div className="torusLandingLottie">
                <div className="torusLandingContainer" />
              </div>
              {/* <img className="dt_1" src="../images/ring_1.png" /> */}
            </div>
            {data.serviceDetailsHeading && (
              <div className="col-1 serv__ttl">
                <div className="benifit_ttl align-self-center">
                  <h3 className="vr-title">{data.serviceDetailsHeading}</h3>
                </div>
              </div>
            )}
            <div className="col-11 time_acquainted">
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
                          className="col-12 col-md-6 col-lg-4"
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
              <div className="row g-0 align-items-center z-2 position-relative pb-5 mb-5">
                <div className="col-12 pb-5">
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
    </main>
  );
}
