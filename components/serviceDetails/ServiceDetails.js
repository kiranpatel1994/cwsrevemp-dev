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

export default function ServiceDetails({ cat }) {
  const perChunk = 2;
  const result = cat.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
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
        {result && (
          <section className="designFunctionality">
            <div className="line-last d-none">
              <img src="/images/lines.png" alt="line_off" />
            </div>
            <div className="container-xl p-0 setContainerFunctionality">
              <div className="row g-0 align-items-center">
              <div className="col-12 col-md-6 col-lg-5">
                <div className="center_title">The business <span>boost </span> you’re looking <br/> for is right here. </div>
              </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    spaceBetween={0}
                    mousewheel={true}
                    pagination={{
                      type: "progressbar",
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <a href="#" className="nw_card">
                        <div className="inner_infor">
                          <div className="yllo_box">
                            <img src="images/code.png" />
                          </div>
                          <div className="content-area">
                            <h2>Website Design and Development </h2>
                            <ul className="list-unstyled">
                              <li>UI design </li>
                              <li>Copywriting </li>
                              <li>Design and development </li>
                            </ul>
                            <div class="fk-btn">Explore more<span><img src="/images/img-stars.png" /></span></div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#" className="nw_card">
                        <div className="inner_infor">
                          <div className="yllo_box">
                            <img src="images/code.png" />
                          </div>
                          <div className="content-area">
                            <h2>Website Design and Development </h2>
                            <ul className="list-unstyled">
                              <li>UI design </li>
                              <li>Copywriting </li>
                              <li>Design and development </li>
                            </ul>
                            <div class="fk-btn">Explore more<span><img src="/images/img-stars.png" /></span></div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#" className="nw_card">
                        <div className="inner_infor">
                          <div className="yllo_box">
                            <img src="images/code.png" />
                          </div>
                          <div className="content-area">
                            <h2>Website Design and Development </h2>
                            <ul className="list-unstyled">
                              <li>UI design </li>
                              <li>Copywriting </li>
                              <li>Design and development </li>
                            </ul>
                            <div class="fk-btn">Explore more<span><img src="/images/img-stars.png" /></span></div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#" className="nw_card">
                        <div className="inner_infor">
                          <div className="yllo_box">
                            <img src="images/code.png" />
                          </div>
                          <div className="content-area">
                            <h2>Website Design and Development </h2>
                            <ul className="list-unstyled">
                              <li>UI design </li>
                              <li>Copywriting </li>
                              <li>Design and development </li>
                            </ul>
                            <div class="fk-btn">Explore more<span><img src="/images/img-stars.png" /></span></div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#" className="nw_card">
                        <div className="inner_infor">
                          <div className="yllo_box">
                            <img src="images/code.png" />
                          </div>
                          <div className="content-area">
                            <h2>Website Design and Development </h2>
                            <ul className="list-unstyled">
                              <li>UI design </li>
                              <li>Copywriting </li>
                              <li>Design and development </li>
                            </ul>
                            <div class="fk-btn">Explore more<span><img src="/images/img-stars.png" /></span></div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* <div className="container-xl setContainerFunctionality">
              {result.map((item, index) => {
                return (
                  <div className="row alternative-row" key={`catblock${index}`}>
                    {item.map((element, j) => {
                      return (
                        <div
                          className="col-12 col-md-6 box-col"
                          key={`catwrap${j}`}
                        >
                          <Link
                            href={`/services/${element.node.slug}`}
                            className="box-design"
                          >
                            <div className="content-area ">
                              <h5 className="text-white">
                                {element.node.name}
                              </h5>
                              {element.node.portfolioCategoriesSettings
                                .listDescription && (
                                <ul className="list-unstyled">
                                  {element.node.portfolioCategoriesSettings.listDescription.map(
                                    (desc, k) => {
                                      return (
                                        <li key={`catdesc${k}`}>
                                          <span>{desc.listPoint}</span>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              )}
                              <div className="fk-btn">
                                Explore more
                                <span>
                                  <img src="/images/img-stars.png" />
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div> */}
          </section>
        )}
      </main>
    </>
  );
}
