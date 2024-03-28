import { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
function PortfolioDetailContent({ data, relativeData }) {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gll__inner_box",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
    tl.to(".in_project", {
      duration: 0.3,
      opacity: 0,
      pointerEvents: "none",
    });

    gsap.set(".button_arround", { opacity: 0 });
    const pl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gll__inner",
        start: "top top",
        end: "bottom +=500",
        toggleActions: "play reset play reset",
        markers: false,
      },
    });
    pl.to(".button_arround", { duration: 0.3, opacity: 1 });
  });

  return (
    <main className="position-relative zindex-2 in_project_main">
      <section className="in_project">
        <div className="container-xl project_container p-xl-0">
          <div className="row g-xl-0">
            <div className="col-12 col-md-8 col-xl-10 text-center text-md-start mb-5 mb-md-0">
              {data.title && <h1>{data.title}</h1>}
              <div className="list-out-tag">
                {data.portfolioTags?.nodes?.length && (
                  <ul className="list-inline">
                    {data.portfolioTags.nodes.map((item, index) => {
                      return (
                        <li className="list-inline-item" key={`tag-${index}`}>
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              {data.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.content,
                  }}
                ></div>
              )}
            </div>
            {data?.portfolioSettings?.portfolioUrl && (
              <div className="col-12 col-md-4 col-xl-2 align-self-md-end">
                <Link
                  href={data.portfolioSettings.portfolioUrl}
                  className="site_link ms-auto me-auto m-xl-0"
                  target="_blank"
                >
                  <span>Go to website </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.548"
                    height="17.548"
                    viewBox="0 0 17.548 17.548"
                  >
                    <g
                      id="Group_5436"
                      data-name="Group 5436"
                      transform="translate(-6 -6)"
                    >
                      <path
                        id="Path_10679"
                        data-name="Path 10679"
                        d="M22.086,23.548a1.328,1.328,0,0,1-1.024-.439L6.439,8.486A1.448,1.448,0,0,1,8.486,6.439L23.109,21.062a1.414,1.414,0,0,1,0,2.047,1.328,1.328,0,0,1-1.024.439Z"
                        fill="#fdb627"
                      />
                      <path
                        id="Path_10680"
                        data-name="Path 10680"
                        d="M20.829,22.212H8.383a1.383,1.383,0,1,1,0-2.766H19.446V8.383a1.383,1.383,0,1,1,2.766,0V20.829A1.307,1.307,0,0,1,20.829,22.212Z"
                        transform="translate(1.336 1.336)"
                        fill="#fdb627"
                      />
                    </g>
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="gll__inner_box">
        {data?.portfolioSettings?.portfolioGallery?.length && (
          <div className="gll__inner">
            <div className="container-fluid">
              {data.portfolioSettings.portfolioGallery.map((item, index) => {
                return (
                  <div
                    className={
                      index === 1 || index === 2
                        ? "row gll__inner-col grid-2 g-1 g-xl-2"
                        : "row gll__inner-col"
                    }
                    key={`gallery-img-${index}`}
                  >
                    <div className="col-12">
                      <img className="w-100 img-fluid" src={item.sourceUrl} />
                    </div>
                  </div>
                );
              })}
              {data?.portfolioSettings?.portfolioUrl && (
                <div className="button_arround">
                  <Link
                    href={data.portfolioSettings.portfolioUrl}
                    className="site_link"
                    target="_blank"
                  >
                    <span>Go to website </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.548"
                      height="17.548"
                      viewBox="0 0 17.548 17.548"
                    >
                      <g
                        id="Group_5436"
                        data-name="Group 5436"
                        transform="translate(-6 -6)"
                      >
                        <path
                          id="Path_10679"
                          data-name="Path 10679"
                          d="M22.086,23.548a1.328,1.328,0,0,1-1.024-.439L6.439,8.486A1.448,1.448,0,0,1,8.486,6.439L23.109,21.062a1.414,1.414,0,0,1,0,2.047,1.328,1.328,0,0,1-1.024.439Z"
                          fill="#fdb627"
                        />
                        <path
                          id="Path_10680"
                          data-name="Path 10680"
                          d="M20.829,22.212H8.383a1.383,1.383,0,1,1,0-2.766H19.446V8.383a1.383,1.383,0,1,1,2.766,0V20.829A1.307,1.307,0,0,1,20.829,22.212Z"
                          transform="translate(1.336 1.336)"
                          fill="#fdb627"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
        {relativeData.length && (
          <div className="more_content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 text-center">
                  <h2>
                    More like <span>this</span>.
                  </h2>
                </div>
              </div>
              <div className="project-contaner overflow-hidden">
                <div className="row g-15 justify-content-center">
                  {relativeData.map((item, index) => {
                    return (
                      <div
                        className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0"
                        key={`relative-${index}`}
                      >
                        <div className="gif_placer">
                          <div className="gif_box">
                            {item?.featuredImage?.node?.sourceUrl && (
                              <img
                                className="img-fluid w-100"
                                src={item?.featuredImage?.node?.sourceUrl}
                              />
                            )}
                          </div>
                          <div className="gradient_wall">
                            {item?.slug && (
                              <Link href={item.slug} className="explore_btn">
                                <span>
                                  Explore <img src="../images/down-right.png" />
                                </span>
                              </Link>
                            )}
                            <div className="gradient_box">
                              {item.title && <h3>{item.title}</h3>}
                              <span className="fake_button">
                                {item.portfolioCategories?.nodes
                                  .map((node) => node.name)
                                  .join(",")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-center lets_talk_post">
                <Link href="/contact" className="lets_talk">
                  <em>Let's talk </em>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35.798"
                      height="35.799"
                      viewBox="0 0 35.798 35.799"
                    >
                      <g
                        id="down-right"
                        transform="translate(-8.485 17.899) rotate(-45)"
                      >
                        <path
                          id="Path_10679"
                          data-name="Path 10679"
                          d="M29.2,31.313a1.915,1.915,0,0,1-1.477-.633L6.633,9.586A2.088,2.088,0,1,1,9.586,6.633L30.68,27.727a2.039,2.039,0,0,1,0,2.953,1.915,1.915,0,0,1-1.477.633Z"
                          transform="translate(0)"
                          fill="#07042b"
                        />
                        <path
                          id="Path_10680"
                          data-name="Path 10680"
                          d="M26.948,28.943H8.995a1.995,1.995,0,0,1,0-3.99H24.953V8.995a1.995,1.995,0,0,1,3.99,0V26.948A1.885,1.885,0,0,1,26.948,28.943Z"
                          transform="translate(2.37 2.37)"
                          fill="#07042b"
                        />
                      </g>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default PortfolioDetailContent;
