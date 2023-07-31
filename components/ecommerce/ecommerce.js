import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";
import ecommerceBasket from "/public/lottie/ecommerce-basket.json";

gsap.registerPlugin(ScrollTrigger);

export default function Ecommerce({ data }) {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".torusLandingContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: torusLanding,
    });

    lottie.loadAnimation({
      container: document.querySelector(".ecommerceBasketContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: ecommerceBasket,
    });

    
    
    if (typeof(window) !== "undefined") {
      if (window.innerWidth >= 1024) {
        gsap.set(".dragWithme", { top: "-10px" });
        const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });
    
        ScrollTrigger.create({
          trigger: ".gl_area",
          start: "-=600",
          endTrigger: "#end_anim",
          end: "+=1100",
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
          end: "+=1100",
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
    
        const panels = gsap.utils.toArray(".gl_area .benifit_ttl_mb");
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


    document.body.classList.add("eCommerce");
    return () => {
      document.body.classList.remove("eCommerce");
    };
  }, []);

  return (
    <main
      className="position-relative zindex-2 eComm website_design_development overflow-hidden"
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
            <div className="floor-2">
              <img className="dt_2" src="../images/component103.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner_content position-relative overflow-hidden">
        <div className="container-xl p-0">
          <div className="row g-0">
            <div className="col-12 ecom__info position-relative">
              <div className="banner_content_info">
                <h1 className="main_title-h1">E-commerce <br className="d-md-none" /> Development </h1>
                {data.bannerTagline && (
                  <h2 className="sub_title play_fair-ttl">
                    {data.bannerTagline}
                  </h2>
                )}
                {data.bannerTitle && (
                  <div
                    className="banner-h3 moji_ttl banner-desc_mob banner-h3_mob position-relative"
                    dangerouslySetInnerHTML={{ __html: data.bannerTitle }}
                  ></div>
                )}
                <div className="d-lg-none bild-lp">
                  <img className="img-fluid" src="../images/lp-bnr.png" alt="laBnnar" />
                </div>
                {data.bannerDescription && (
                  <div
                    className="banner-desc moji_para position-relative mb-5 im_moji"
                    dangerouslySetInnerHTML={{ __html: data.bannerDescription }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block">
          {data.bannerImage && (
            <img className="laptop__setup" src={data.bannerImage.sourceUrl} />
          )}
        </div>
      </div>
      <div className="gl_area ecommerce_page">
        <div className="container-xl position-relative p-0">
          <div className="line_anim">
            <div className="profitDrag"></div>
            <div className="dragWithme">
              <img src="../images/smArrow.png" />
            </div>
          </div>
          <section className="row get_row g-0 sec-1 start_anim" id="start_anim">
            <div className="col-12 col-md-1 d-none d-md-block benit__ttl">
              <div className="benifit_ttl">
                <h3 className="vr-title">Benefits</h3>
              </div>
            </div>
            {data.benefitBlocks && (
              <div className="col-12 col-md-11 pd-30-mix">
                <div className="d-md-none">
                  <div className="benifit_ttl_mb mb-stl pd-48-15">
                    <h3 className="vr-title_mb">Benefits</h3>
                  </div>
                </div>
                <ul className="list-inline benifit__inner benefit_list benefit_list_mb row g-2">
                  {data.benefitBlocks.map((item, index) => {
                    return (
                      <li className="list-inline-item col-6 col-md-auto" key={`benefit-${index}`}>
                        <div className="ffk_btn d-flex flex-column justify-content-center">
                          <div className="d-md-none position-relative zindex-3 mb-3">
                            <img src="../images/enf-1.png" />
                          </div>
                          <span>{item.benefitBlockTitle}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </section>
          <section className="row get_row g-0 sec-2">
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
                <div className="col-md-8">
                  <div className="pd-48-15">
                    {data.whyUsTitle && (
                      <div
                        className="why-us-title"
                        dangerouslySetInnerHTML={{ __html: data.whyUsTitle }}
                      ></div>
                    )}
                    {data.whyUsDescription && (
                      <div
                        className="why-us-desc why-us-mob mb-5 mb-md-0"
                        dangerouslySetInnerHTML={{
                          __html: data.whyUsDescription,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="d-md-none pd-48-15">
                    <img className="img-fluid" src="../images/ecc.png" alt="eco1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block">
              {data.whyUsImage && (
                <img
                  className="secOnlineShoping"
                  src={data.whyUsImage.sourceUrl}
                />
              )}
            </div>
          </section>
          <section className="row get_row g-0 sec-3 end_anim" id="end_anim">
            <div className="col-12 col-md-1 d-none d-md-block serv__ttl d-flex">
              <div className="benifit_ttl align-self-center">
                <h3 className="vr-title">Service Details</h3>
              </div>
            </div>
            <div className="col-12 col-md-11 pd-30-mix">
              <div className="d-md-none">
                <div className="benifit_ttl_mb mb-stl pd-48-15">
                  <h3 className="vr-title_mb">Service Details </h3>
                </div>
              </div>
              <div className="row g-0 align-items-center">
                {data.serviceDetailImage && (
                  <div className="col-12 col-lg-6 order-2 order-lg-1">
                    <div className="pd-48-15">
                      <div className="ps-0 d-table me-auto ms-auto ms-lg-0">
                        <div className="serviceImg">
                          <div className="ecommerceBasket">
                            <div className="ecommerceBasketContainer" />
                          </div>
                          <img
                            className="img-fluid"
                            src={data.serviceDetailImage.sourceUrl}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                  <div className="pd-48-15">
                    <div className="wp_inner wp_inner_mob had_new ps-md-3 pe-md-3 ps-xxl-0 pe-xxl-0">
                      {data.serviceDetailTitle && (
                        <h3 className="text-32_b_white mb-3">
                          {data.serviceDetailTitle}
                        </h3>
                      )}
                      {data.serviceDetailDescription && (
                        <p
                          className="txlh_20_30 mb-4"
                          dangerouslySetInnerHTML={{
                            __html: data.serviceDetailDescription,
                          }}
                        />
                      )}
                      {data.serviceDetailList && (
                        <ul className="list-unstyled list_y_dots text-white">
                          {data.serviceDetailList.map((item, index) => {
                            return (
                              <li key={`service-${index}`}>
                                {item.serviceDetailPoint}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* {data.readyToSellText &&
                <div className="sellBig">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-12">
                                <h3>{data.readyToSellText}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            } */}
    </main>
  );
}
