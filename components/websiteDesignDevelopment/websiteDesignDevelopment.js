/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";

export default function WebsiteDesignDev({ data }) {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".torusLandingContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: torusLanding,
    });

    if (typeof window !== "undefined") {
      gsap.set(".dragWithme", { top: "-10px" });
      const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });

      gsap.to(".profitDrag", { scaleY: 0 });
      const action = gsap.to(".profitDrag", {
        scaleY: "100%",
        transformOrigin: "top bottom",
        ease: "none",
      });
      const panels = gsap.utils.toArray(".gl_area .benifit_ttl");

      if (window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: ".gl_area",
          start: "-=600",
          endTrigger: "#end_anim",
          end: "+=3000",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: liftArow,
          once: true,
        });

        ScrollTrigger.create({
          trigger: "#start_anim",
          start: "-=600",
          endTrigger: "#end_anim",
          end: "+=3000",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: action,
          once: true,
        });

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

        const panels = gsap.utils.toArray([".gl_area .benifit_ttl_mb"]);
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

    document.body.classList.add("webDev");
    return () => {
      document.body.classList.remove("webDev");
    };
  }, []);

  return (
    <main
      className="position-relative zindex-2 website_design_development overflow-hidden"
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
            <div className="floor-2">
              <img className="dt_1" src="../images/design.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner_content position-relative overflow-hidden">
        <div className="container-xl p-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="banner_content_info">
                <h1>Web Design and Development </h1>
                {data.bannerSubtitle && (
                  <h2 className="sub_title play_fair-ttl mb-4 pb-2">
                    {data.bannerSubtitle}
                  </h2>
                )}
                {data.bannerTitle && (
                  <div
                    className="banner-h3 moji_ttl"
                    dangerouslySetInnerHTML={{ __html: data.bannerTitle }}
                  ></div>
                )}
                <div className="d-md-none col_bild">
                  <img
                    className="w-100 img-fluid"
                    src="../images/op-lap.png"
                    alt="ff"
                  />
                </div>
                {data.bannerDescription && (
                  <div
                    className="banner-desc mb-4 moji_para position-relative im_moji"
                    dangerouslySetInnerHTML={{ __html: data.bannerDescription }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
        {data.bannerImage && (
          <img className="laptop_setup" src={data.bannerImage.sourceUrl} />
        )}
      </div>
      <div className="gl_area websiteDesign">
        <div className="container-xl position-relative p-0">
          <div className="line_anim">
            <div className="profitDrag"></div>
            <div className="dragWithme">
              <img src="../images/smArrow.png" />
            </div>
          </div>
          <section className="row get_row g-0 sec-1 start_anim" id="start_anim">
            <div className="col-12 col-md-1 d-none d-md-block benit__ttl">
              {data.benefitsTitle && (
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.benefitsTitle}</h3>
                </div>
              )}
            </div>
            <div className="col-12 col-md-11 pd-30-mix">
              <div className="d-md-none">
                {data.benefitsTitle && (
                  <div className="benifit_ttl_mb pd-48-15">
                    <h3 className="vr-title_mb">{data.benefitsTitle}</h3>
                  </div>
                )}
              </div>
              {data.benefitsBlocks && (
                <ul className="list-inline benifit__inner benefit_list benefit_list_mb row g-2">
                  {data.benefitsBlocks.map((item, index) => {
                    return (
                      <li
                        className="list-inline-item col-6 col-md-auto"
                        key={`benefit-${index}`}
                      >
                        <div className="ffk_btn d-flex flex-column justify-content-center">
                          <div className="d-md-none position-relative zindex-3 mb-3">
                            <img src="../images/bnf-1.png" />
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
          <section className="row get_row g-0 sec-2 banifit_up">
            <div className="col-12 col-md-1 d-none d-md-block wus__ttl">
              <div className="benifit_ttl">
                <h3 className="vr-title">Why Us</h3>
              </div>
            </div>
            <div className="col-12 col-md-11 pd-30-mix">
              <div className="d-md-none">
                <div className="benifit_ttl_mb mb-stl pd-48-15">
                  <h3 className="vr-title_mb">Why Us</h3>
                </div>
              </div>
              <div className="row g-0 why__us align-items-center">
                <div className="col-12 col-lg-7">
                  <div className="pd-48-15">
                    {data.whyUsTitle && (
                      <div
                        className="d-flex align-items-center flex-cols-m"
                        dangerouslySetInnerHTML={{ __html: data.whyUsTitle }}
                      ></div>
                    )}
                    {data.whyUsDescription && (
                      <div
                        className="why-us-desc"
                        dangerouslySetInnerHTML={{
                          __html: data.whyUsDescription,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                {data.whyUsImage && (
                  <div className="col-12 col-lg-5">
                    {/* <img className="img-fluid w-100" src={data.whyUsImage.sourceUrl} /> */}
                    <img
                      className="img-fluid w-100"
                      src="../images/count.png"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-3">
            <div className="col-12 col-md-1 d-none d-md-block wordp__ttl">
              <div className="benifit_ttl">
                <h3 className="vr-title">WordPress</h3>
              </div>
            </div>
            <div className="col-12 col-md-11 pd-30-mix">
              <div className="row g-0 wp_m_info align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="d-none d-md-block pe-md-3 pe-xxl-0">
                    <img className="img-fluid" src="../images/wp-in.png" />
                  </div>
                  <div className="d-md-none pd-48-15">
                    <div className="d-flex align-items-center mb-4">
                      <div className="benifit_ttl_mb me-4">
                        <h3 className="vr-title_mb">WordPress </h3>
                      </div>
                      <img
                        className="benifit_wp img-fluid"
                        src="../images/WordPress-Logo-Free-Download-PNG.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="wp_inner ps-md-3 pe-md-3 ps-xxl-0 pe-xxl-0 pd-48-15">
                    {data.wordpressTitle && (
                      <h3 className="text-35_b_white mb-3">
                        {data.wordpressTitle}
                      </h3>
                    )}
                    {data.wordpressDescription && (
                      <p className="txlh_20_30 mb-4">
                        {data.wordpressDescription}
                      </p>
                    )}
                    <h4 className="txlh_20_30 mb-3 ft-gilroy_b text-white">
                      With Word Press, you can easily:
                    </h4>
                    {data.wordpressPointList && (
                      <ul className="list_y_dots list-unstyled text-white mb-4">
                        {data.wordpressPointList.map((item, index) => {
                          return (
                            <li key={`list-${index}`}>{item.wordpressPoint}</li>
                          );
                        })}
                      </ul>
                    )}
                    {data.getQuoteLink && (
                      <div className="d-table d-100-sm">
                        <a
                          className="btn btn-yellow ft-gilroy_b fw-bold"
                          href={data.getQuoteLink}
                        >
                          Get A Quote
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row g-0">
                <div className="col-md-7">
                  <div className="wp_inner ps-lg-5 remove-lg-5-ps">
                    <div className="pd-48-15">
                      {data.customSitesTitle && (
                        <h3 className="text-35_b_white mb-3">
                          {data.customSitesTitle}
                        </h3>
                      )}
                      {/* {data.customSitesDescription &&
                                              <p className="txlh_20_30 mb-4">{data.customSitesDescription}</p>
                                          } */}
                    </div>
                  </div>
                </div>
                {data.customSitesImage && (
                  <div className="col-md-5 d-none d-md-block">
                    <div className="pd-48-15">
                      <div className="ps-0 sp-top-1">
                        <img
                          className="img-fluid w-100"
                          src={data.customSitesImage.sourceUrl}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {data.customSitesBlocks && (
                <div className="op_up customSites_up">
                  <ul className="list-inline benifit__inner">
                    {data.customSitesBlocks.map((item, index) => {
                      return (
                        <li
                          className="list-inline-item"
                          key={`custom-${index}`}
                        >
                          <div className="ffk_btn">
                            <span>{item.customSitesBlockTitle}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </section>
          <section className="row get_row g-0 sec-4">
            <div className="col-12 col-md-1 d-none d-md-block serviced__ttl">
              <div className="benifit_ttl">
                <h3 className="vr-title">Service Details</h3>
              </div>
            </div>
            <div className="col-12 col-md-11 pd-30-mix">
              <div className="d-md-none">
                <div className="benifit_ttl_mb mb-stl pd-48-15">
                  <h3 className="vr-title_mb">Service Details </h3>
                </div>
              </div>
              <div className="row g-0">
                <div className="col-12 col-lg-7 order-2 order-lg-1">
                  <div className="wp_inner had_new ps-lg-5 mouse_content_cols remove-lg-5-ps">
                    <div className="pd-48-15">
                      {data.serviceDetailsTitle && (
                        <div
                          className="d-flex align-items-center text-35_b_white mb-3 mouse_content_bild"
                          dangerouslySetInnerHTML={{
                            __html: data.serviceDetailsTitle,
                          }}
                        ></div>
                      )}
                      {data.serviceDetailsDescription && (
                        <div
                          className="service-desc txlh_20_30"
                          dangerouslySetInnerHTML={{
                            __html: data.serviceDetailsDescription,
                          }}
                        ></div>
                      )}
                      {data.serviceDetailsSubtitle && (
                        <h4 className="txlh_20_30 mb-4 ft-gilroy_b text-white text-yy-md">
                          {data.serviceDetailsSubtitle}
                        </h4>
                      )}
                      {data.seeOurWorkLink && (
                        <div className="d-table d-100-sm">
                          <a
                            href={data.seeOurWorkLink}
                            className="btn btn-yellow"
                          >
                            <span>See our work </span>
                            <img src="/images/preview-22.png" alt="" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2">
                  <div className="pd-48-15">
                    <div className="ps-0 hand_pen">
                      <img
                        className="img-fluid w-100"
                        src="../images/hand.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-5 end_anim" id="end_anim">
            <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
              <div className="benifit_ttl">
                <h3 className="vr-title">Service Details</h3>
              </div>
            </div>
            <div className="col-12 col-md-11 pd-30-mix">
              <div className="row g-0 align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="pd-48-15">
                    <div className="ps-0 d-table">
                      <img
                        className="img-fluid"
                        src="../images/svdetails.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="pd-48-15 mouse_content_cols">
                    <div className="wp_inner had_new">
                      {data.designBlockTitle && (
                        <h3 className="text-32_b_white mb-3">
                          {data.designBlockTitle}
                        </h3>
                      )}
                      {data.designBlockDescription && (
                        <div
                          className="txlh_20_30 mb-4"
                          dangerouslySetInnerHTML={{
                            __html: data.designBlockDescription,
                          }}
                        ></div>
                      )}
                      {data.designBlockSubTitle && (
                        <div
                          className="txlh_20_30 mb-5 ft-gilroy_b text-white"
                          dangerouslySetInnerHTML={{
                            __html: data.designBlockSubTitle,
                          }}
                        ></div>
                      )}
                      <div className="d-table d-100-sm">
                        {data.seeOurWorkLinkDesign && (
                          <a
                            href={data.seeOurWorkLinkDesign}
                            className="btn btn-yellow"
                          >
                            <span>See our work </span>
                            <img src="/images/preview-22.png" alt="" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
