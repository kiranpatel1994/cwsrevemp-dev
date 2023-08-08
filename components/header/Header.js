import LineImage from "/public/images/lines.svg";
import callSignImg from "/public/images/calling_sign.png";
import Brand from "/public/images/branding.png";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
export default function Header({ logo }) {
  const router = useRouter();

  const ref = useRef(null);
  const handleClick = (event) => {
    let navbarButton = event.currentTarget.getAttribute("aria-expanded");
    let header = document.querySelector("header");
    if (navbarButton === "true") {
      header.classList.add("navOpen");
    } else {
      header.classList.remove("navOpen");
    }
  };

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Creative Web Services</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/logo_icon.png"
        ></link>
      </Head>
      <div className="line-last">
        <img src={LineImage.src} alt="" />
      </div>
      <header>
        <nav className="navbar navbar-expand-xl navbar-dark">
          <div className="container-xxl bg-include p-xxl-0">
            <Link href="/" className="navbar-brand p-0">
              <img src={logo.sourceUrl} alt="" />
            </Link>
            <Link className="d-xl-none mobileGetStarted" href="/contact">
              Get Started
            </Link>
            <button
              onClick={handleClick}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar" ref={ref}>
              <ul className="navbar-nav me-auto align-items-center justify-content-between w-100">
                <li className="nav-item ms-xl-auto">
                  <Link
                    className={
                      router.pathname == "/" ? "nav-link active" : "nav-link"
                    }
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      router.pathname == "/company"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    href="/company"
                  >
                    Company
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      router.pathname == "/portfolio"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    href="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      router.pathname == "/services" ||
                      router.pathname == "/services/[slug]"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    href="/services"
                  >
                    Services & Specialties
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      router.pathname == "/solutions"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    href="/solutions"
                  >
                    Solutions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      router.pathname == "/blog" ||
                      router.pathname == "/blog/[slug]"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>

                <li className="nav-item ms-auto d-xl-block d-none">
                  <Link className="nav-link call-action" href="/contact">
                    Get Started
                  </Link>
                </li>
              </ul>
              <ul className="headerCallSection m-0 list-unstyled d-xl-none d-flex flex-column align-items-center justify-content-center">
                <li>
                  <img className="callHand" src={callSignImg.src} alt="" />
                </li>
                <li className="text-center">
                  <div className="contact-details">
                    <span>Let’s talk innovation. </span>
                    <a href="tel:201-212-6367" className="d-block w-100">
                      201-212-6367
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
