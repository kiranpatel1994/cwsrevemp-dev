import React, { useRef, useEffect } from "react";
import GraphAPI from "../services/graphQL";
import SwiperCore, {
    Navigation,
    Pagination,
    EffectCreative,
    Autoplay,
    Keyboard,
    Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HomeDetails from "../components/home/homeDetail";

const Home = ({ homeSettings, portfolioList, testimonialSettings }) => {
    // Add Class in Body
    useEffect(() => {
        document.body.classList.add("newHome");

        return () => {
            document.body.classList.remove("newHome");
        };
    }, []);
    return (
        <HomeDetails homeSettings={homeSettings} portfolioList={portfolioList} testimonialSettings={testimonialSettings} />
    )
};
export default Home;

export async function getStaticProps() {
    const homeJson = await GraphAPI.homeSettings();
    const portfolioJson = await GraphAPI.portfolioListingSettings();
    const testimonial = await GraphAPI.clientTestimonialSettings();
    return {
        props: {
            testimonialSettings: testimonial.data.data.acfOptionsThemeOptions.themeSettings,
            homeSettings: homeJson.data.data.pageBy.homeSettings,
            portfolioList: portfolioJson.data.data.portfolios.edges,
        },
    };
}