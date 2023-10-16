/* eslint-disable @next/next/no-img-element */
import LineImage from "/public/images/lines.svg";
import callSignImg from "/public/images/calling_sign.png";
import Brand from "/public/images/branding.png";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
export default function Header({ data, seo }) {
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
        <title>{seo?.title ? seo?.title : "Creative Web Services"}</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/logo_icon.png"
        ></link>
        {seo?.metaDesc && <meta name="description" content={seo.metaDesc} />}
        {seo?.title && <meta property="og:title" content={seo.title} />}
        {seo?.opengraphDescription && (
          <meta property="og:description" content={seo.opengraphDescription} />
        )}
        {seo?.focuskw && <meta name="keywords" content={seo.focuskw} />}
      </Head>
      <div className="line-last">
        <img src={LineImage.src} alt="" />
      </div>
      <header>
        <nav className="navbar navbar-expand-xl navbar-dark">
          <div className="container-xxl bg-include p-xxl-0">
            <Link href="/" className="navbar-brand p-0">
              <img src={data.headerLogo.sourceUrl} alt="" />
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
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      Home
                    </span>
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
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      Company
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      router.pathname == "/portfolio" ||
                      router.pathname == "/portfolio/[slug]"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    href="/portfolio"
                  >
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      Portfolio
                    </span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={
                      router.pathname == "/services" ||
                      router.pathname == "/services/[slug]"
                        ? "nav-link active dropdown-toggle"
                        : "nav-link dropdown-toggle"
                    }
                    href="/services"
                  >
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      Services & Specialties
                    </span>
                  </Link>
                  <ul class="dropdown-menu">
                    <li>
                      <Link
                        class="dropdown-item"
                        href="/services/ui-ux-design-web-applications-development"
                      >
                        Custom Systems/Web applications
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="dropdown-item"
                        href="/services/website-design-development"
                      >
                        Website Design and Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="dropdown-item"
                        href="/services/logo-design-and-branding"
                      >
                        Logo Design and Branding
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="dropdown-item"
                        href="/services/social-media-management"
                      >
                        Social Media Management
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="/services/ecommerce">
                        Ecommerce Development
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="/services/white-label">
                        White Label
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="/services/hosting">
                        Managed Hosting
                      </Link>
                    </li>
                  </ul>
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
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      Solutions
                    </span>
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
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      Blog
                    </span>
                  </Link>
                </li>

                <li className="nav-item ms-auto d-xl-block d-none">
                  <Link className="nav-link call-action" href="/contact">
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse.show"
                    >
                      Get Started
                    </span>
                  </Link>
                </li>
              </ul>
              <ul className="headerCallSection m-0 list-unstyled d-xl-none d-flex flex-column align-items-center justify-content-center">
                <li>
                  <img className="callHand" src={callSignImg.src} alt="" />
                </li>
                {data?.phone && (
                  <li className="text-center">
                    <div className="contact-details">
                      <span>Let’s talk innovation. </span>
                      <a href={`tel:${data.phone}`} className="d-block w-100">
                        {data.phone}
                      </a>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
