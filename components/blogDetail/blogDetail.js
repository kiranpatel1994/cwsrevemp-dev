import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetail({ blogDetail, relativeDetail }) {
  const date = new Date(blogDetail.date);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <main
      className="position-relative blog__detail zindex-2 overflow-hidden"
      id="main"
    >
      <section className="blog__cover">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <img
                className="w-100 img-fluid"
                src={
                  blogDetail.featuredImage !== null
                    ? blogDetail.featuredImage.node.sourceUrl
                    : "../images/placeholder-3.svg"
                }
                alt="blog banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bologDetail_center">
        <div className="container-xl p-0 bologDetail_container">
          <div className="bologDetail_max ms-auto me-auto">
            <div className="row tag_date">
              <div className="col-12 col-md-8">
                <ul className="list-inline blogs__tag justify-content-start">
                  {blogDetail.categories.nodes.length > 0 && (
                    <li className="list-inline-item">
                      <span className="special__tag">
                        {blogDetail.categories.nodes
                          .map((node) => node.name)
                          .join(",")}
                      </span>
                    </li>
                  )}
                  {blogDetail.tags.nodes.length > 0 && (
                    <li className="list-inline-item">
                      <span className="normal__tag">
                        <em className="fst-normal">
                          {blogDetail.tags.nodes
                            .map((node) => node.name)
                            .join(",")}
                        </em>
                      </span>
                    </li>
                  )}
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <div className="d-flex align-items-center justify-content-end">
                  <img src="../images/calendar.png" alt="date" />
                  <span className="date_tag">{formattedDate}</span>
                </div>
              </div>
            </div>

            <div className="title__content">
              <div className="row">
                <div className="col-12">
                  {blogDetail.title && <h1>{blogDetail.title}</h1>}
                  {blogDetail.postSettings.authorName && (
                    <div className="media__box d-flex align-items-center">
                      <img
                        src={
                          blogDetail.postSettings.authorImage !== null
                            ? blogDetail.postSettings.authorImage.sourceUrl
                            : "../images/logo_icon.png"
                        }
                        alt="Media bild"
                      />

                      <div className="blog_user">
                        {blogDetail.postSettings.authorName}
                      </div>
                    </div>
                  )}
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blogDetail.content }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {relativeDetail && (
        <section className="related-articles">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Related Articles </h2>
              </div>
            </div>
            <div className="artical__card">
              <Swiper
                slidesPerView={3}
                spaceBetween={90}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  319: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  500: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  991: {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="articlesSwiper"
              >
                {relativeDetail.map((item, index) => {
                  const date = new Date(item.node.date);
                  const options = {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  };
                  const formattedDate = date.toLocaleDateString(
                    "en-US",
                    options
                  );
                  return (
                    <SwiperSlide key={`blog-${index}`}>
                      <Link href={`/blog/${item.node.slug}`}>
                        <div className="card_max_width">
                          <figure>
                            <img
                              className="img-fluid w-100"
                              src={
                                item.node.postSettings.blogGridImage !== null
                                  ? item.node.postSettings.blogGridImage
                                      .sourceUrl
                                  : "../images/placeholder-1.svg"
                              }
                              alt="blogTemp"
                            />
                            <figcaption>
                              <ul className="list-inline blogs__tag mb-0">
                                {item.node.categories.nodes.length > 0 && (
                                  <li className="list-inline-item">
                                    <span className="special__tag">
                                      {item.node.categories.nodes
                                        .map((node) => node.name)
                                        .join(",")}
                                    </span>
                                  </li>
                                )}
                                {item.node.tags.nodes.length > 0 && (
                                  <li className="list-inline-item">
                                    <span className="normal__tag">
                                      <em className="fst-normal">
                                        {item.node.tags.nodes
                                          .map((node) => node.name)
                                          .join(",")}
                                      </em>
                                    </span>
                                  </li>
                                )}
                              </ul>
                              {item.node.title && <h3>{item.node.title}</h3>}
                              {item.node.excerpt && (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: item.node.excerpt,
                                  }}
                                ></div>
                              )}
                              {item.node.postSettings.authorName && (
                                <div className="media__box d-flex align-items-center">
                                  <img
                                    src={
                                      item.node.postSettings.authorImage !==
                                      null
                                        ? item.node.postSettings.authorImage
                                            .sourceUrl
                                        : "../images/logo_icon.png"
                                    }
                                    alt="Media bild"
                                  />
                                  <div className="blog_user">
                                    {item.node.postSettings.authorName}
                                    <span className="d-block w-100">
                                      {formattedDate}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </figcaption>
                          </figure>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
