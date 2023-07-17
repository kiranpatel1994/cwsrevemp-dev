/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
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
import { gsap } from "gsap/dist/gsap";

export default function ServiceDetails({ cat }) {
  useEffect(() => {
    gsap.to(".scroll_tag", {
      delay: 1,
      duration: 2,
      keyframes: {
        ease: "none",
        easeEach: "power1",
        x: [0, 150, 320, 0],
        y: [0, 100, -40, 0],
      },
      opacity: 0,
    });
  });

  return (
    <>
      <main className="serviceDetail position-relative zindex-2">
        <section className="eyeFriendly">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="service-title text-center">
                  <h1>
                    <em>Eye-catching </em> design
                    <img src="/images/blue_plus_sign.png" /> <br />
                    <em>user-friendly </em> functionality
                    <img src="/images/preview-24.png" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {cat && (
          <section className="designFunctionality">
            <div className="line-last d-none">
              <img src="/images/lines.png" alt="line_off" />
            </div>
            <div className="scroll_tag">
              <img src="/images/scroll_anim.png" alt="scroll_off" />
            </div>
            <div className="container-xl p-0 setContainerFunctionality">
              <div className="row g-0 align-items-center">
                <div className="col-12 col-md-6 col-lg-5">
                  <div className="center_title">
                    The business <span>boost </span> you’re looking <br /> for
                    is right here.{" "}
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    mousewheel={true}
                    pagination={{
                      type: "progressbar",
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="mySwiper"
                  >
                    {cat.map((item, index) => {
                      return (
                        <SwiperSlide key={`catblock${index}`}>
                          <Link
                            href={`/services/${item.node.slug}`}
                            className="nw_card"
                          >
                            <div className="inner_infor">
                              <div className="yllo_box">
                                <img
                                  src={
                                    item.node.portfolioCategoriesSettings
                                      .categoryIcon?.sourceUrl
                                      ? item.node.portfolioCategoriesSettings
                                          .categoryIcon?.sourceUrl
                                      : "images/code.png"
                                  }
                                />
                              </div>
                              <div className="content-area">
                                <h2>{item.node.name}</h2>
                                <div></div>
                                <ul className="list-unstyled">
                                  {item.node.portfolioCategoriesSettings.listDescription.map(
                                    (desc, k) => {
                                      return (
                                        <li key={`catdesc${k}`}>
                                          <span>{desc.listPoint}</span>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                                <div className="fk-btn">
                                  Explore more
                                  <span>
                                    <img src="/images/img-stars.png" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
