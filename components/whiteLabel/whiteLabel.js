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

export default function WhiteLabel({ data, themeOptions, form }) {
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
      end: "+=1400",
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
      end: "+=1400",
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
    document.body.classList.add("white-label");
    return () => {
      document.body.classList.remove("white-label");
    };
  }, []);

  return (
    <main
      className="position-relative whitelabel_inner zindex-2 overflow-hidden"
      id="main"
    >
      <div className="banner__overlap">
        <div className="container-xl bbn_1">
          <div className="design_development_container"></div>
          <div className="bottom_shape">
            <div className="floor-1">
              <div className="torusLandingLottie">
                <div className="torusLandingContainer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single__banBild">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <img src="../images/group-meeting.png" alt="topRight" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner_content position-relative overflow-hidden">
        <div className="container-xl p-0">
          <div className="row g-0">
            <div className="col-12 col-md-7 ecom__info position-relative">
              <h1>White Label Solutions </h1>
              {data.bannerTagline && (
                <div className="sub_title play_fair-ttl">
                  <h2>{data.bannerTagline}</h2>
                </div>
              )}
              {data.bannerTitle && (
                <div
                  className="moji_ttl"
                  dangerouslySetInnerHTML={{ __html: data.bannerTitle }}
                ></div>
              )}
              {data.bannerDescription && (
                <div
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: data.bannerDescription }}
                ></div>
              )}
            </div>
            {data.bannerImage && (
              <div className="col-12 col-md-5 position-relative group__bild">
                <img className="img-fluid" src={data.bannerImage.sourceUrl} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="gl_area hosting_page">
        <div className="container-xl position-relative p-0">
          <div className="line_anim">
            <div className="profitDrag"></div>
            <div className="dragWithme">
              <img src="../images/smArrow.png" />
            </div>
          </div>
          <section className="row get_row g-0 sec-1" id="start_anim">
            <div className="col-1 benit__ttl">
              <div className="benifit_ttl">
                <h3 className="vr-title">Benefits</h3>
              </div>
            </div>
            <div className="col-11">
              <div className="row g-0 why__us align-items-center">
                <div className="col-md-7">
                  {data.benefitTagline && (
                    <div className="mb-3">
                      <h2>{data.benefitTagline}</h2>
                    </div>
                  )}
                  {data.benefitTitle && (
                    <p>
                      <strong>{data.benefitTitle}</strong>
                    </p>
                  )}
                  {data.benefitDescription && (
                    <div
                      className="benefit-desc"
                      dangerouslySetInnerHTML={{
                        __html: data.benefitDescription,
                      }}
                    ></div>
                  )}
                </div>
                {data.benefitImage && (
                  <div className="col-md-5">
                    <img
                      className="img-fluid"
                      src={data.benefitImage.sourceUrl}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="row get_row why__usc g-0 sec-2" id="end_anim">
            <div className="col-1 serv__ttl">
              <div className="benifit_ttl align-self-center">
                <h3 className="vr-title">Why Us </h3>
              </div>
            </div>
            <div className="col-11">
              {data.whyUsBlocks && (
                <div className="pattern__card">
                  <div className="row">
                    {data.whyUsBlocks.map((item, index) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-lg-3 pattern__child"
                          key={`whyUs-${index}`}
                        >
                          <div
                            className="y_shape_bg"
                            dangerouslySetInnerHTML={{
                              __html: item.whyUsBlockTitle,
                            }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="why__us pb-0 text-center">
                {data.whiteLabelServiceTitle && (
                  <h2>{data.whiteLabelServiceTitle}</h2>
                )}
                {data.whiteLabelServicePoints && (
                  <div className="service__label">
                    <div className="row align-items-center">
                      {data.whiteLabelServicePoints.map((item, index) => {
                        return (
                          <div
                            className="col-12 col-md-4"
                            key={`whyUs-${index}`}
                          >
                            <div className="d-flex align-items-center">
                              {item.whiteLabelServiceImage && (
                                <img
                                  src={item.whiteLabelServiceImage.sourceUrl}
                                />
                              )}
                              {item.whiteLabelServicePoint && (
                                <p>
                                  <strong>{item.whiteLabelServicePoint}</strong>
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="form__inner bg-white-shape">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              {data.contactBlockTitle && (
                <h3 className="text-white">{data.contactBlockTitle}</h3>
              )}
              {data.contactBlockDescription && (
                <p className="text-white">{data.contactBlockDescription}</p>
              )}
              {data.contactBlockTagLine && (
                <p className="text-white">
                  <strong>{data.contactBlockTagLine}</strong>
                </p>
              )}
              <ul className="list-unstyled social_inner mb-0">
                {themeOptions.phone && (
                  <li>
                    <div className="d-flex align-items-center">
                      <img src="../images/telephone.png" alt="phone" />
                      <a
                        className="ms-3 text-white"
                        href={`tel:` + themeOptions.phone}
                      >
                        {themeOptions.phone}
                      </a>
                    </div>
                  </li>
                )}
                {themeOptions.email && (
                  <li>
                    <div className="d-flex align-items-center">
                      <img src="../images/email.png" alt="email" />
                      <a
                        className="ms-3 text-white"
                        href={`tel:` + themeOptions.email}
                      >
                        {themeOptions.email}
                      </a>
                    </div>
                  </li>
                )}
                {themeOptions.addressLink && (
                  <li>
                    <div className="d-flex align-items-center">
                      <img src="../images/pin-point.png" alt="pinPoint" />
                      <a
                        className="ms-3 text-white"
                        href={themeOptions.addressLink}
                        target="_blank"
                        rel="noreferrer"
                        dangerouslySetInnerHTML={{
                          __html: themeOptions.addressText,
                        }}
                      ></a>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <div className="bg__form">
                <div className="text-center">
                  <h3>Intake Form </h3>
                </div>
                <div className="placeholder__form form_container">
                  <ApolloProvider client={client}>
                    <GravityForm form={form} />
                  </ApolloProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
