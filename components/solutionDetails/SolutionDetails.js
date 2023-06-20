import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Lottie from 'react-lottie';
import lottieBalancingShape from "../../public/lottie/balancing-shape.json"
import shootingStars from "../../public/lottie/shooting-star.json"


import SwiperCore, { Navigation, Pagination, EffectCreative, EffectCoverflow, Autoplay, Keyboard, Mousewheel } from 'swiper';
import Link from "next/link";

export default function SolutionDetails({ detail, tags }) {
    SwiperCore.use([Navigation, Pagination, EffectCreative, Autoplay, Keyboard, Mousewheel]);
    const solutionDivClass = "hideItemOverflow";
    const [solutionClass, setSolutionClass] = useState(solutionDivClass);

    const handleShowMore = () => {
        setSolutionClass("hideItemOverflow visibleClip");
    }

    const balancingShapeOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieBalancingShape,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const shootingStarsOptions = {
        loop: true,
        autoplay: true,
        animationData: shootingStars,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <main className="solutionDetail position-relative zindex-2">
                <section className="workFlow">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center solutionInformation">
                                    <div className="balancingShape">
                                        <Lottie options={balancingShapeOptions} />
                                    </div>
                                    <h1>Your workflow just got <em className="text-active">simplified.</em> </h1>
                                    <p>Customizable web pages that speed up operations with less effort and more accuracy. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {detail.portfoliosToShowAsFeatured &&
                    <section className="carouselSection">
                        <div className="container-xl">
                            <div className="row">
                                <div className="col-12">
                                    <div className="carouselSlider position-relative">
                                        <Swiper
                                            effect={"coverflow"}
                                            centeredSlides={true}
                                            slidesPerView={2}
                                            loop={true}
                                            observer={true}
                                            observeParents={true}
                                            coverflowEffect={{
                                                rotate: 0,
                                                stretch: 120,
                                                grabCursor: true,
                                                depth: 410,
                                                modifier: 1,
                                                slideShadows: false,
                                            }}
                                            pagination={{ clickable: true, }}
                                            modules={[EffectCoverflow, Pagination]}
                                            className="centerSlider"
                                        >
                                            {detail.portfoliosToShowAsFeatured.map((item, index) => {
                                                return (
                                                    <SwiperSlide key={`slideblock${index}`}>
                                                        <div className="slider-inner">
                                                            <img src={item.portfolioSettings.modalImage.sourceUrl} />
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                        {/* <img className="img-fluid" src="/images/sliderPlace.png" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                {detail.companyCards &&
                    <section className="companyCard">
                        <div className="container-xl p-0">
                            <div className="row">
                                {detail.companyCards.map((item, index) => {
                                    return (
                                        <div className="col-12 col-md-6 col-lg-4 companyCol" key={`companyblock${index}`}>
                                            <div className="cardinner text-center">
                                                {item.companyCardImage.sourceUrl &&
                                                    <div className="top-tile">
                                                        <img src={item.companyCardImage.sourceUrl} />
                                                    </div>
                                                }
                                                <div className="tileContent">
                                                    {item.companyCardTitle &&
                                                        <h6>{item.companyCardTitle}</h6>
                                                    }
                                                    {item.companyCardDescription &&
                                                        <p>{item.companyCardDescription}</p>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                }
                {tags &&
                    <section className="skyndroket">
                        <div className="sootingStarBlock">
                            <Lottie options={shootingStarsOptions} />
                        </div>
                        <div className="container-xl position-relative zindex-2">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h4>Choose your <em className="text-active">solution.</em> </h4>
                                    <p>Boost your business processes from good to great. </p>
                                    {/* <div className="roket-cr">
                                <img src="/images/roket.png" />
                            </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="smokeContainer">
                            {/* <div className="smokeBG"></div> */}
                            <div className="container-xl p-0 position-relative zindex-2">
                                <div className="row g-0">
                                    <div className="col-12">
                                        <div className="cloudContainer text-center">
                                            <h4>Our Work </h4>
                                            <h6>Trusted by industry leaders. </h6>
                                        </div>
                                        <div className="tabInner">
                                            <div className="tabPanel">
                                                <ul className="nav nav-pills" role="tablist">
                                                    {tags.map((item, index) => {
                                                        return (
                                                            <li className="nav-item" key={`link${index}`}>
                                                                <a className={index == 0 ? "nav-link active" : "nav-link"} data-bs-toggle="pill" href={`#${item.slug}`}>{item.name}</a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className="tab-content">
                                                {tags.map((item, index) => {
                                                    return (
                                                        <div id={item.slug} className={index == 0 ? "tab-pane active" : "tab-pane"} key={`tagblock${index}`}>
                                                            {item.portfolios &&
                                                                <div className={`${solutionClass}`}>
                                                                    <div className="row">
                                                                        {item.portfolios.nodes.map((elem, j) => {
                                                                            return (
                                                                                <div className="col-12 col-md-6 col-lg-4 tab-col" key={`tagWrap${j}`}>
                                                                                    {elem.featuredImage.node.sourceUrl &&
                                                                                        <a className="d-block ov-h" href="#">
                                                                                            <img className="img-fluid w-100" src={elem.featuredImage.node.sourceUrl} />
                                                                                        </a>
                                                                                    }
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            }
                                                            <div className="showMore">
                                                                <Link href="javascript:void(0)" onClick={handleShowMore} className="centerClip">Show More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 16l-6-6h12z" /></svg> </Link>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                {/* </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                <section className="readyProject">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-12">
                                <div className="readyProjectInner">
                                    <h2>Ready to start your project? </h2>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a className="btn btn-yellow" href="#">Get in touch </a> </li>
                                        <li className="list-inline-item"><a className="btn btn-blue" href="#">Get Instant Quote </a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}