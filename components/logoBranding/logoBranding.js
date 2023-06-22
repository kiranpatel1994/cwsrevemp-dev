import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";

gsap.registerPlugin(ScrollTrigger);

export default function LogoBranding({ data }) {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".torusLandingContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: torusLanding,
    });

    gsap.set(".dragWithme", { top: "-10px" });
    const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });

    ScrollTrigger.create({
      trigger: ".gl_area",
      start: "-=259",
      endTrigger: "#end_anim",
      end: "+=1600",
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
      end: "+=1600",
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

    document.body.classList.add("logo-branding");
    return () => {
      document.body.classList.remove("logo-branding");
    };
  }, []);

  return (
    <main
      className="position-relative webApp_inner logoBrand_multi zindex-2 overflow-hidden"
      id="main"
    >
      <div className="banner__overlap">
        <div className="container-xl bbn_1">
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
        <div className="container-xl p-0">
          <div className="row g-0">
            <div className="col-12 col-md-7 ecom__info position-relative">
              {data.pageHeading && <h1>{data.pageHeading} </h1>}
              {data.bannerSubtitle && (
                <div className="sub_title play_fair-ttl">
                  <h2>{data.bannerSubtitle}</h2>
                </div>
              )}
              {data.bannerTitle && (
                <div className="moji_ttl">
                  <h3>{data.bannerTitle}</h3>
                </div>
              )}
              {data.bannerDescription && (
                <div
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: data.bannerDescription }}
                />
              )}
            </div>
            <div className="col-12 col-md-5 position-relative group__bild">
              {data.bannerImage.sourceUrl && (
                <div className="theme___bg">
                  <img
                    className="img-fluid w-100"
                    src={data.bannerImage.sourceUrl}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="gl_area">
        <div className="container-xl position-relative p-0">
          <div className="line_anim">
            <div className="profitDrag"></div>
            <div className="dragWithme">
              <img src="../images/smArrow.png" />
            </div>
          </div>
          <section className="row get_row g-0 sec-1" id="start_anim">
            <div className="col-1 benit__ttl">
              {data.benefitsHeading && (
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.benefitsHeading}</h3>
                </div>
              )}
            </div>
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
            <div className="col-1 wus__ttl">
              {data.whyUsHeading && (
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.whyUsHeading}</h3>
                </div>
              )}
            </div>
            <div className="col-11">
              <div className="row g-0 why__us align-items-center">
                <div className="col-md-7 maxim_effort position-relative">
                  {data.whyUsTitle && (
                    <div
                      dangerouslySetInnerHTML={{ __html: data.whyUsTitle }}
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
                {data.whyUsImage.sourceUrl && (
                  <div className="col-md-5 text-end">
                    <img
                      className="img-fluid"
                      src={data.whyUsImage.sourceUrl}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-3" id="end_anim">
            <div className="col-1 serv__ttl">
              {data.servicesHeading && (
                <div className="benifit_ttl align-self-center">
                  <h3 className="vr-title">{data.servicesHeading} </h3>
                </div>
              )}
            </div>
            <div className="col-11 time_acquainted">
              <div className="row g-0 why__us align-items-center">
                {data.service1Image.sourceUrl && (
                  <div className="col-12 col-md-6">
                    <img
                      className="img-fluid"
                      src={data.service1Image.sourceUrl}
                    />
                  </div>
                )}
                <div className="col-12 col-md-6 automate_work position-relative">
                  {data.service1Title && <h2>{data.service1Title}</h2>}
                  {data.service1Description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.service1Description,
                      }}
                    ></div>
                  )}
                  {data.service1ButtonLink && (
                    <div className="d-table mt-3">
                      <a
                        className="btn btn-yellow ft-gilroy_b fw-bold"
                        href={data.service1ButtonLink}
                      >
                        <strong>{data.service1ButtonText}</strong>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="row g-0 why__us align-items-center">
                <div className="col-md-7 automate_work position-relative">
                  {data.service2Title && <h2>{data.service2Title}</h2>}
                  {data.service2Description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.service2Description,
                      }}
                    ></div>
                  )}
                </div>
                {data.service2Image.sourceUrl && (
                  <div className="col-md-5">
                    <img
                      className="img-fluid"
                      src={data.service2Image.sourceUrl}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
