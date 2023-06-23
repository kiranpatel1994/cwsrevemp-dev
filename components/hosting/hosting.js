import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";
import cloudServer from "/public/lottie/cloud-server.json";
import hostingServer from "/public/lottie/daily-backups";

gsap.registerPlugin(ScrollTrigger);

export default function Hosting({ data }) {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".torusLandingContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: torusLanding,
    });

    lottie.loadAnimation({
      container: document.querySelector(".cloudServerContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: cloudServer,
    });

    lottie.loadAnimation({
      container: document.querySelector(".hostingServerContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: hostingServer,
    });

    gsap.set(".dragWithme", { top: "-10px" });
    const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });

    ScrollTrigger.create({
      trigger: ".gl_area",
      start: "-=259",
      endTrigger: "#end_anim",
      end: "+=1500",
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
      end: "+=1500",
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
    document.body.classList.add("hosting");
    return () => {
      document.body.classList.remove("hosting");
    };
  }, []);

  return (
    <main
      className="position-relative hosting_inner zindex-2 overflow-hidden"
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
      <div className="banner_content position-relative overflow-hidden">
        <div className="container-xl p-0">
          <div className="row g-0">
            <div className="col-12 ecom__info position-relative">
              <h1>Hosting </h1>
              <div className="sub_title play_fair-ttl d-flex justify-content-start align-items-center ">
                {data.bannerTagline && <h2>{data.bannerTagline}</h2>}
                <div className="hostingServer ms-5">
                  <div
                    className="hostingServerContainer"
                    style={{ width: "65px" }}
                  />
                </div>
              </div>
              {data.bannerTitle && (
                <div
                  className="moji_ttl"
                  dangerouslySetInnerHTML={{ __html: data.bannerTitle }}
                ></div>
              )}
              {data.bannerDescription && (
                <p className="mb-4">{data.bannerDescription}</p>
              )}
            </div>
          </div>
        </div>
        {data.bannerImage.sourceUrl && (
          <div className="mix_bland">
            {/* <img className="laptopp__setup" src={data.bannerImage.sourceUrl} /> */}
            <div className="cloudServer">
              <div className="cloudServerContainer" />
            </div>
          </div>
        )}
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
                <h3 className="vr-title">Why Us</h3>
              </div>
            </div>
            <div className="col-11">
              <div className="row g-0 why__us align-items-center">
                <div className="col-md-7">
                  {data.whyUsTitle && <h2>{data.whyUsTitle}</h2>}
                  <div
                    dangerouslySetInnerHTML={{ __html: data.whyUsDescription }}
                  ></div>
                </div>
                {data.whyUsImage.sourceUrl && (
                  <div className="col-md-5">
                    <div className="theme__bg">
                      <img
                        className="img-fluid"
                        src={data.whyUsImage.sourceUrl}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-2">
            <div className="col-1 wus__ttl">
              <div className="benifit_ttl">
                <h3 className="vr-title">Here’s why:</h3>
              </div>
            </div>
            <div className="col-11">
              <div className="row g-0 information__box">
                {data.heresWhyBlocks.map((item, index) => {
                  return (
                    <div className="col-md-4" key={`hereByblock${index}`}>
                      <div className="text-center information__title">
                        {item.blockTitle && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.blockTitle,
                            }}
                          ></div>
                        )}
                        {item.blockDescription && (
                          <p>{item.blockDescription}</p>
                        )}
                        {item.blockTagline && <h6>{item.blockTagline}</h6>}
                      </div>
                      {item.blockNotifications.map((notification, i) => {
                        return (
                          <div
                            className="notification_box"
                            key={`notifyblock${i}`}
                          >
                            <div className="notification__child">
                              <div className="d-flex align-items-start">
                                {notification.notificationUserImage
                                  .sourceUrl && (
                                  <img
                                    className="profileThumb"
                                    src={
                                      notification.notificationUserImage
                                        .sourceUrl
                                    }
                                  />
                                )}
                                <div className="noti__inner">
                                  <div className="d-flex align-items-center">
                                    {notification.notificationUser && (
                                      <h4>{notification.notificationUser}</h4>
                                    )}
                                    {notification.notificationUsername && (
                                      <span className="uName">
                                        {notification.notificationUsername}
                                      </span>
                                    )}
                                  </div>
                                  {notification.notificationDescription && (
                                    <p>
                                      {notification.notificationDescription}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-3" id="end_anim">
            <div className="col-1 serv__ttl d-flex">
              <div className="benifit_ttl align-self-center">
                <h3 className="vr-title">Service Details</h3>
              </div>
            </div>
            <div className="col-11">
              <div className="row g-0 align-items-center">
                <div className="col-md-6">
                  <div className="ps-0 d-table ms-0 me-auto">
                    <img
                      className="img-fluid"
                      src={data.serviceDetailImage.sourceUrl}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="wp_inner had_new">
                    {data.serviceDetailTitle && (
                      <h3 className="text-32_b_white mb-3">
                        {data.serviceDetailTitle}
                      </h3>
                    )}
                    {data.serviceDetailDescription && (
                      <p className="txlh_20_30 mb-4">
                        {data.serviceDetailDescription}
                      </p>
                    )}

                    <ul className="list-unstyled list_y_dots text-white">
                      {data.serviceDetailPoints.map((item, i) => {
                        return (
                          <li key={`servicepoint${i}`}>
                            {item.serviceDetailPoint}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="footerstarted">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 text-center">
              {data.contactBlockTitle && <span>{data.contactBlockTitle}</span>}
              {data.contactBlockDescription && (
                <h3>{data.contactBlockDescription}</h3>
              )}
              <Link href="/contact" className="fk-btn">
                I`m in
                <span>
                  <img src="/images/img-stars.png" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
