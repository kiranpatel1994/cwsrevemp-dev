import SwiperCore, { Navigation, Pagination, EffectCreative, Autoplay, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/effect-creative';
import { gsap } from "gsap/dist/gsap";
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import Link from 'next/link';
import GraphAPI from '../services/graphQL';

export default function Home({ homeSettings, portfolioList, testimonialSettings }) {
    useEffect(() => {
        document.body.classList.add('home');

        const maxRot = 70;
        const mouseMoveFunc = (evt) => {
            const percent = gsap.utils.normalize(0, innerWidth, evt.pageX);

            gsap.to([".web-icon", ".wp-icon", ".slider-tag-top", ".amz-icon"], {
                duration: 0.2,
                // x: percent * maxX - maxX / 2,
                rotationY: -(percent * maxRot - maxRot / 4),
                rotationX: -(percent * maxRot - maxRot / 2),
                overwrite: true
            });
        }

        document.addEventListener("mousemove", mouseMoveFunc);

        return () => {
            document.body.classList.remove('home');
        };
    }, []);

    const perChunk = 6 // items per chunk 
    const result = portfolioList.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])
    SwiperCore.use([Navigation, Pagination, EffectCreative, Autoplay, Keyboard, Mousewheel]);
    var settingsB = {
        // Install modules
        modules: [Navigation, Pagination, EffectCreative],
        slidesPerView: 2.6,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    var settingsC = {
        slidesPerView: 1.3,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, 0],
                opacity: 0
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
    }

    var bild1 = '<div class="menuSlider swipe-item-0"><img src="images/1.png" /></div>';
    var bild2 = '<div class="menuSlider swipe-item-1"><img src="images/2.png" /></div>';
    var bild3 = '<div class="menuSlider swipe-item-2"><img src="images/3.png" /></div>';
    var bild4 = '<div class="menuSlider swipe-item-3"><img src="images/4.png" /></div>';
    var bild5 = '<div class="menuSlider swipe-item-4"><img src="images/q5.png" /></div>';
    var bild6 = '<div class="menuSlider swipe-item-5"><img src="images/6.png" /></div>';
    var menu = [bild1, bild2, bild3, bild4, bild5, bild6];

    var settingsD = {
        slidesPerView: 1.9,
        spaceBetween: 30,
        centeredSlides: true,
        mousewheel: {
            invert: false,
        },
        // autoplay: {
        //     delay: 8000,
        //     disableOnInteraction: false,
        // },
        onSlideChange: function (e) {
            const index_currentSlide = e.realIndex;
            var el = document.querySelector('div[class*="object-bottom-center"]');
            for (let i = el.classList.length - 1; i >= 0; i--) {
                const className = el.classList[i];
                if (className.startsWith('swipe-item-')) {
                    el.classList.remove(className);
                }
            }
            document.querySelector('.object-bottom-center').classList.add('swipe-item-' + index_currentSlide);
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
    }

    const handleModal = (title, content, image, url) => {
        document.querySelector('.sideModal-title h3').innerHTML = title;
        document.querySelector('.modal-content').innerHTML = content;
        document.querySelector('.sideModal-title a').href = url;
        document.querySelector('.main-project-data').src = image;
        document.querySelector('.side-modal').classList.toggle('side-modal-off');
        ['overflow-hidden', 'toggleShadow'].map(v => document.querySelector('body').classList.toggle(v))
    }
    const handleMouseEnter = (e) => {
        var list;
        list = document.querySelectorAll(".bild-cont");
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.add('hovOnRemove');
        }
        e.currentTarget.classList.remove('hovOnRemove');
    }

    const handleCheck = () => {
        document.querySelector('.side-modal').classList.toggle('side-modal-off');
        ['overflow-hidden', 'toggleShadow'].map(v => document.querySelector('body').classList.toggle(v))

    }

    const handleMouseLeave = (e) => {
        var listR;
        listR = document.querySelectorAll(".bild-cont");
        for (var i = 0; i < listR.length; ++i) {
            listR[i].classList.remove('hovOnRemove');
        }
    }

    const handleClose = () => {
        document.querySelector('.side-modal').classList.toggle('side-modal-off');
        ['overflow-hidden', 'toggleShadow'].map(v => document.querySelector('body').classList.toggle(v))
    }

    const scroll2El = elID => {
        window.scrollTo({
            top: document.getElementById(elID).offsetTop,
            behavior: 'smooth',
        });
    };

    const onBtnClick = (e) => {
        e.preventDefault();
        const goto = e.target.getAttribute('goto');
        setTimeout(() => {
            scroll2El(goto);
        }, 100);
    }




    return (
        <>
            <main>
                <section className="banner-main overflow-hidden">
                    <div className="container-xl p-0 collection-slider--container">
                        <div className="row g-0 position-relative">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className='overflow-hidden pb-3'>
                                    <div className="banner-titles" data-aos="fade-up" data-aos-duration="1000">
                                        <h1><span>{homeSettings.bannerTitle}</span> </h1>
                                        <div className="new-title">
                                            <em>
                                                <TypeAnimation
                                                    sequence={['Simplify.', 300, 'Best.']}
                                                    speed={500}
                                                    deletionSpeed={300}
                                                    cursor={true}
                                                    wrapper="span"
                                                    repeat={Infinity}
                                                /> </em> your workflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-8 position-relative">
                                <div className="web-icon">
                                    <img src="/images/internetIcon.png" alt="" />
                                </div>
                                <div className="slider-tag-top">
                                    <div className="tag-trasn">
                                        <div className="d-flex align-items-start tag-flex">
                                            <div className="site-img">
                                                <img src="/images/group05.png" alt="" />
                                            </div>
                                            <div className="site-info">
                                                <em dangerouslySetInnerHTML={{ __html: homeSettings.bannerSubtitle }}></em>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {homeSettings.bannerSlider &&
                                    <div className="slider-device">
                                        <Swiper
                                            className='device-slider'
                                            {...settingsC}
                                        >
                                            {homeSettings.bannerSlider.map((item, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <img className="w-100" src={item.bannerImage.sourceUrl} alt="" />
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='scrollForMore'>
                            <button onClick={onBtnClick} goto="contacts">
                                <div className='inner-cirl'>
                                    <div className='arrow-svg'><img src='images/arrow.svg' /></div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="friendly-atmos" id="contacts">
                        <div className="container-xl p-0">
                            <div className="row g-0 align-items-center">
                                <div className="col-12 col-md-7 position-relative">
                                    <div className="face-information overflow-hidden" data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: homeSettings.friendlyTitle }}>
                                    </div>
                                    <div className="demo-container">
                                        <div className="progress-bar">
                                            <div className="progress-bar-value"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-5">
                                    <div className="atmos-faces">
                                        <img className="img-fluid" src={homeSettings.friendlyImage.sourceUrl ? homeSettings.friendlyImage.sourceUrl : "/images/face.png"} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-new">
                        <img className="cr-big" src="/images/path10397.png" alt="" />
                        <ul className="list-unstyled">
                            <li className="wp-icon">
                                <img src="/images/wordPress.png" alt="" />
                            </li>
                            <li className="amz-icon">
                                <img src="/images/amz.png" alt="" />
                            </li>
                            <li className="tag-website">
                                <div className="tag-trasn">
                                    <div className="d-flex align-items-center tag-flex">
                                        <div className="site-img">
                                            <img src="/images/1.png" alt="" />
                                        </div>
                                        <div className="site-info">
                                            <h5><span data-target="639" className="count">000</span>+ Websites </h5>
                                            <span className="site-span">Website developed </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="sub-banner">
                    <div className="container-fluid p-0">
                        <div className="left-icon-anim"><img src="/images/component103.png" alt="" /></div>
                        <div className="right-icon-anim"><img src="/images/rectangle3435.png" alt="" /></div>
                        <div className="row g-0">
                            <div className="col-12">
                                <div className="text-center center-text-opt">
                                    <h2 data-aos="fade-up" data-aos-duration="1000" className="text-white" dangerouslySetInnerHTML={{ __html: homeSettings.aboutTitle }}></h2>
                                    <em data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="text-white d-inline-block">{homeSettings.aboutSubtitle} </em>
                                </div>
                            </div>
                        </div>
                        {homeSettings.aboutSlider &&
                            <div className="menuall-slider" id="manual-slider" data-aos="fade-up" data-aos-duration="1000">

                                <Swiper
                                    onReachEnd={() => {
                                        setTimeout(function () {
                                            window.scrollTo({
                                                top: document.getElementById('moveToYellow').offsetTop,
                                                behavior: 'smooth',
                                            });
                                        }, 500);
                                    }}
                                    className='slider-object'
                                    {...settingsD}
                                >
                                    {homeSettings.aboutSlider.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="text-center">
                                                    <h2 className="text-white">{item.aboutDomain}</h2>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                    )}

                                    <div className="swiper-pagination"></div>
                                </Swiper>
                                <div className="object-bottom-center text-center swipe-item-0">
                                    <ul className='list-inline' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <li className='list-inline-item'>
                                            <img src="/images/torus.png" alt="" />
                                        </li>
                                        <li className='list-inline-item'>
                                            <img src="/images/torus-7b.png" alt="" />
                                        </li>
                                        <li className='list-inline-item'>
                                            <img src="/images/torus.png" alt="" />
                                        </li>
                                        <li className='list-inline-item'>
                                            <img src="/images/torus-7b.png" alt="" />
                                        </li>
                                        <li className='list-inline-item'>
                                            <img src="/images/torus.png" alt="" />
                                        </li>
                                        <li className='list-inline-item'>
                                            <img src="/images/torus-7b.png" alt="" />
                                        </li>
                                    </ul>
                                    <div className="flame-title">
                                        <h4>Wait, there’s more…<img src="/images/fire_1f525.png" alt="" /></h4>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </section>
                {homeSettings.whyUsBlocks &&
                    <section className="banner-yll" id="moveToYellow">
                        <div className="container-xl banner-after position-relative">
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h3>Why Choose Us</h3>
                                    </div>
                                    <div className="chooseUs-msg">
                                        <ul className="list-unstyled">
                                            {homeSettings.whyUsBlocks.map((item, index) => {
                                                return (
                                                    <li key={index} data-aos="fade-up" data-aos-duration="1000">
                                                        <div className="mini-card">
                                                            <div className="d-flex align-items-center">
                                                                <div className="mini-child">
                                                                    {item.whyUsTitle &&
                                                                        <h5>{item.whyUsTitle} </h5>
                                                                    }
                                                                    {item.whyUsDescription &&
                                                                        <p>
                                                                            {item.whyUsDescription}
                                                                        </p>
                                                                    }
                                                                </div>
                                                                {item.whyUsImage &&
                                                                    <div className="mini-child">
                                                                        <img className="right-bild-pull" src={item.whyUsImage.sourceUrl} alt="" />
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                <section className="all-business bg-white">
                    <div className="container-xl">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <div className="update-pseudo">
                                    <div className='overflow-hidden' data-aos="fade-up" data-aos-duration="1000">
                                        <h2 dangerouslySetInnerHTML={{ __html: homeSettings.businessTitle }}></h2>
                                        <em className="yello-title-em">{homeSettings.businessSubtitle}</em>
                                    </div>
                                </div>
                            </div>
                            {homeSettings.businessImage &&
                                <div className="col-12 col-md-6">
                                    {/* <img className="img-fluid" src={homeSettings.businessImage.sourceUrl} alt=""/> */}
                                    <div className="vr-row-parent">
                                        <div className="child-row">
                                            <div className="sub-child"><img src="images/short/aven.png" /></div>
                                            <div className="sub-child"><img src="images/short/volicity-9.png" /></div>
                                            <div className="sub-child"><img src="images/short/asgardia.png" /></div>
                                        </div>
                                        <div className="child-row">
                                            <div className="sub-child"><img src="images/short/a-lab.png" /></div>
                                            <div className="sub-child"><img src="images/short/cod-lab.png" /></div>
                                            <div className="sub-child"><img src="images/short/nira.png" /></div>
                                            <div className="sub-child"><img src="images/short/earth-2.png" /></div>
                                        </div>
                                        <div className="child-row">
                                            <div className="sub-child"><img src="images/short/fox-hub-2.png" /></div>
                                            <div className="sub-child"><img src="images/short/atica.png" /></div>
                                            <div className="sub-child"><img src="images/short/u-mark.png" /></div>
                                        </div>
                                        <div className="child-row">
                                            <div className="sub-child"><img src="images/short/lighting.png" /></div>
                                            <div className="sub-child"><img src="images/short/fox-hub.png" /></div>
                                            <div className="sub-child"><img src="images/short/ideaa.png" /></div>
                                            <div className="sub-child"><img src="images/short/hexa.png" /></div>
                                        </div>
                                        <div className="child-row">
                                            <div className="sub-child"><img src="images/short/solaytic.png" /></div>
                                            <div className="sub-child"><img src="images/short/tvit.png" /></div>
                                            <div className="sub-child"><img src="images/short/circle.png" /></div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
                {result &&
                    <section className="project-area">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                <div className="col-12 position-relative">
                                    <div className='banner-projects'>
                                        {result.map((item, index) => {
                                            return (
                                                <div className='project-part' key={index}>
                                                    {item.map((i, j) => {
                                                        return (
                                                            <div className='bild-cont' key={j} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)} onClick={() => handleModal(i.node.title, i.node.content, i.node.portfolioSettings.modalImage.sourceUrl, i.node.portfolioSettings.portfolioUrl)}>
                                                                <Link href='javascript:void(0)'>
                                                                    <img className='' src={i.node.featuredImage.node.sourceUrl} />
                                                                </Link>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })}


                                    </div>
                                    {/* <img className="w-100 img-fluid" src={homeSettings.portfolioImage ? homeSettings.portfolioImage.sourceUrl : "/images/anim-2.png"} alt=""/> */}
                                </div>
                            </div>
                        </div>
                        <div className="d-table ms-auto me-auto center-button-project">
                            <Link href="#" className="btn btn-yellow">
                                <span>View Portfolio </span> <img src="/images/fire_1f525.png" alt="" />
                            </Link>
                        </div>
                    </section>
                }
                <div className='side-modal'>
                    <div className='bg-container'>
                        <div className="side-modal-close" onClick={handleClose}>
                            <button type="button" className="btn btn-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" className='arrowLeft' fill="#FDB627" /></svg> Back
                            </button>
                        </div>
                        <div className='project-detail'>
                            <div className='sideModal-title'>
                                <h3>
                                    Hashkifa
                                </h3>
                                <div className="modal-content"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                                <Link href="#" className="btn btn-blue">Visit Websites </Link>
                            </div>
                            <div className='device-anim'>
                                <div className='site-image-anim1'>
                                    <div className='device-holder'>
                                        <div className='main-device'>
                                            <img src='images/macws.png' />
                                        </div>
                                        <div className='main-project-holder'>
                                            <img className='main-project-data' src='images/bild-full.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {testimonialSettings.clientTestimonials &&
                    <section className="about-us">
                        <div className="floating-object"></div>
                        <div className="container-xl position-relative zindex-2">
                            <div className="row">
                                <div className="col-12 about-info overflow-hidden">
                                    <h2 data-aos="fade-up" data-aos-duration="1000">{homeSettings.testimonialsTitle}</h2>
                                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">{homeSettings.testimonialsSubtitle}</p>
                                </div>
                            </div>
                        </div>

                        <div className="slider-area">
                            <Swiper
                                className='slider-scroller'
                                {...settingsB}
                            >
                                {testimonialSettings.clientTestimonials.map((item, index) => {

                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="raw-card">
                                                <div className="d-flex align-items-start card-bunch">
                                                    {item.authorImage &&
                                                        <div className="sm-user-bild">
                                                            <img src={item.authorImage.sourceUrl} alt="" />
                                                        </div>
                                                    }
                                                    {item.authorDescription &&
                                                        <div className="para-side-detail">
                                                            <p>{item.authorDescription}</p>
                                                        </div>
                                                    }
                                                </div>
                                                <div className="other-detail">
                                                    <h5>
                                                        {item.authorName}
                                                        <span>{item.authorDesignation}</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </div>
                    </section>
                }
                {homeSettings.processBlocks &&
                    <section className="simple-process">
                        <div className="container-xl position-relative zindex-2">
                            <div className="row">
                                <div className="col-12">
                                    {homeSettings.processMainTitle &&
                                        <div className="text-center overflow-hidden">
                                            <h2 data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: homeSettings.processMainTitle }}></h2>
                                        </div>
                                    }

                                    <div className="card-items">
                                        <div className="row g-37">
                                            {homeSettings.processBlocks.map((item, index) => {
                                                return (
                                                    <div className="col-12 col-md-6 col-lg-3 card-items-cols" key={index} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                                        <div className="card-container">
                                                            {item.processImage &&
                                                                <div className="card-bild">
                                                                    <img src={item.processImage.sourceUrl} alt="" />
                                                                </div>
                                                            }
                                                            <div className="card-mor-detail">
                                                                <h6 className="title-cr">{item.processTitle}</h6>
                                                                <p>{item.processDescription}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </main>
        </>
    )
}

export async function getStaticProps() {
    const homeJson = await GraphAPI.homeSettings();
    const portfolioJson = await GraphAPI.portfolioListingSettings();
    const testimonial = await GraphAPI.clientTestimonialSettings();
    return {
        props: {
            testimonialSettings: testimonial.data.data.acfOptionsThemeOptions.themeSettings,
            homeSettings: homeJson.data.data.pageBy.homeSettings,
            portfolioList: portfolioJson.data.data.portfolios.edges,
        }
    }
}
