import LineImage from "/public/images/lines.svg";
import Brand from "/public/images/branding.png";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
export default function Header({ logo }) {
  const router = useRouter();
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
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="container-xl bg-include p-0">
            <Link href="/" className="navbar-brand p-0">
              <img src={logo.sourceUrl} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto align-items-center justify-content-between w-100">
                <li className="nav-item ms-auto">
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
                <li className="nav-item">
                  <Link
                    className={
                      router.pathname == "/contact"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    href="/contact"
                  >
                    Get Started
                  </Link>
                </li>
                <li className="nav-item ms-auto">
                  <Link className="nav-link call-action" href="/contact">
                  Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
