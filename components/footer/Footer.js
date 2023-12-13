/* eslint-disable @next/next/no-img-element */
import brand from "/public/images/foot-branding.png";
import telephoneImg from "/public/images/telephone.png";
import emailImg from "/public/images/email.png";
import pinPointImg from "/public/images/pin-point.png";
import callSignImg from "/public/images/calling_sign.png";
import Link from "next/link";
export default function Footer({ settings }) {
  return (
    <footer>
      <div className="d-flex">
        <div className="ft-child">
          <div className="social-side">
            {/* <ul className="list-unstyled">
              {settings.linkedinLink && (
                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href={settings.linkedinLink}>
                    <span className="icon icon-linkedin"></span>
                  </Link>
                </li>
              )}
              {settings.facebookLink && (
                <li
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <Link href={settings.facebookLink}>
                    <span className="icon icon-facebook"></span>
                  </Link>
                </li>
              )}
              {settings.instagramLink && (
                <li
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <Link href={settings.instagramLink}>
                    <span className="icon icon-instagram"></span>
                  </Link>
                </li>
              )}
              {settings.twitterLink && (
                <li
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <Link href={settings.twitterLink}>
                    <span className="icon icon-twitter"></span>
                  </Link>
                </li>
              )}
            </ul> */}
          </div>
        </div>
        <div className="ft-child w-100">
          <div className="container">
            <div className="row adjust-container">
              <div className="col-12 col-lg-3">
                <div
                  className="foot-branding"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Link href="/">
                    <img
                      src={
                        settings.footerLogo.sourceUrl
                          ? settings.footerLogo.sourceUrl
                          : brand.src
                      }
                      alt=""
                    />
                    <span className="cpyright">©</span>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <ul
                  className="list-unstyled placed-add mb-0"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {settings.phone && (
                    <li>
                      <div className="d-flex align-items-center justify-content-lg-start justify-content-center">
                        <img src={telephoneImg.src} alt="" />
                        <Link href={`tel:` + settings.phone}>
                          {settings.phone}
                        </Link>
                      </div>
                    </li>
                  )}
                  {settings.email && (
                    <li>
                      <div className="d-flex align-items-center justify-content-lg-start justify-content-center">
                        <img src={emailImg.src} alt="" />
                        <a href={`mailto:` + settings.email}>
                          {settings.email}
                        </a>
                      </div>
                    </li>
                  )}
                  {/* {settings.addressLink && (
                    <li>
                      <div className="d-flex align-items-start justify-content-lg-start justify-content-center">
                        <img src={pinPointImg.src} alt="" />
                        <a
                          href={settings.addressLink}
                          dangerouslySetInnerHTML={{
                            __html: settings.addressText,
                          }}
                        ></a>
                      </div>
                    </li>
                  )} */}
                </ul>
              </div>
              <div className="col-12 col-lg-6">
                <ul
                  className="list-unstyled d-flex align-items-center letstalk"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <li>
                    <img src={callSignImg.src} alt="" />
                  </li>
                  <li className="text-center">
                    <div className="contact-details">
                      <span>Let’s talk innovation. </span>
                      <a href="tel:201-212-6367" className="d-block w-100">
                        {settings.phone}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-footer">
        <div className="container">
          <div className="row justify-content-xxl-center">
            <div
              className="col-6 col-lg-auto pe-lg-5 serviceRow"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-offset="0"
            >
              <div className="mb-4">
                <label className="navLabel">Services & Specialties</label>
              </div>
              <div className="row">
                {/* <div className="col-lg-auto align-self-center">
                </div> */}
                <div className="col-lg-auto">
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/services/ui-ux-design-web-applications-development">
                        Custom Systems/Web applications
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/website-design-and-development">
                        Website Design and Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/logo-design-branding-agency">
                        Logo Design and Branding
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/social-media-management">
                        Social Media Management
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/services/printed-marketing-materials">
                        Printed Marketing Materials
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="col-lg-auto">
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/services/ecommerce-website-development">
                        Ecommerce Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/white-label-development-services">
                        White Label
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/web-hosting">Managed Hosting</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-lg-auto ps-xxl-5 ps-xl-4 solutionRow"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
              data-aos-offset="0"
            >
              <div className="mb-4">
                <label className="navLabel">Solutions</label>
              </div>
              <div className="row">
                {/* <div className="col-lg-auto align-self-center">
                </div> */}
                <div className="col-lg-auto">
                  <ul className="list-unstyled">
                    {/* <li>
                      <Link href="/services/property-management-websites">
                        Real Estate Property Pages
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/web-solutions">Company Intranet</Link>
                    </li>
                    <li>
                      <Link href="/web-solutions">Donation Pages</Link>
                    </li>
                    <li>
                      <Link href="/web-solutions">Payment Processing</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-auto">
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/web-solutions">Contact Database</Link>
                    </li>
                    <li>
                      <Link href="/web-solutions">Digital Forms</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trms_service">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <ul className="list-inline">
                <li className="list-inline-item me-md-3">
                  <Link href="/website-maintenance-plans">
                    Website maintenance plans
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/policies-condition">Terms of Service </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
