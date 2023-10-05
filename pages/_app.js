import "/public/fonts/googlefonts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "/public/fonts/stylesheet.css";
import "/public/fonts/gilroy/gilroy-font.css";
import "/public/fonts/icomoon/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "/public/css/app.css";
import "/public/css/app-extended.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Layout from "../components/Layout/layout";
import GraphAPI from "../services/graphQL";
gsap.registerPlugin(ScrollTrigger);

export default function MyApp({
  Component,
  pageProps,
  headerSettings,
  footerSettings,
  themeOptions,
  seo,
}) {
  useEffect(() => {
    async function loadBootstrap() {
      const bootstrap = await import(
        "bootstrap/dist/js/bootstrap.bundle.min.js"
      );
    }

    loadBootstrap();

    // if ("scrollRestoration" in window.history) {
    //   window.history.scrollRestoration = "manual";
    // }

    // counter js area
    const counters = document.querySelectorAll(".count");
    const speed = 600;
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);
        const increment = Math.trunc(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });

    //
    const showAnim = gsap
      .from("header", {
        yPercent: -130,
        paused: true,
        duration: 0.1,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "+=80",
      end: 99999,
      toggleClass: "activation",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleClose = () => {
    document.querySelector(".side-modal").classList.toggle("side-modal-off");
    ["overflow-hidden", "toggleShadow"].map((v) =>
      document.querySelector("body").classList.toggle(v)
    );
  };

  return (
    <>
      <Layout
        headerSettings={headerSettings}
        footerSettings={footerSettings}
        seo={seo}
      >
        <div className="main-shadow" onClick={handleClose}></div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const themeOptions = await GraphAPI.themeOptions();
  //console.log(ctx.router.pathname);
  const seo = await GraphAPI.seoSettings(ctx.router.pathname);
  return {
    headerSettings:
      themeOptions.data.data?.acfOptionsThemeOptions?.themeSettings,
    footerSettings:
      themeOptions.data.data?.acfOptionsThemeOptions?.themeSettings,
    seo: seo.data.data?.pageBy?.seo,
  };
};
