/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
function ServiceContact({ data }) {
  const router = useRouter();
  return (
    <div className="footerstarted">
      <div className="container-xl">
        <div className="row">
          <div className="col-12 text-center">
            {data.contactBlockTitle && (
              <span>
                {router.asPath === "/services/logo-design-and-branding"
                  ? "Tell your story without words."
                  : router.asPath === "/services/ecommerce"
                  ? "Ready to sell, big time?"
                  : data.contactBlockTitle}
              </span>
            )}
            {data.contactBlockDescription && (
              <h3>
                {router.asPath === "/services/ecommerce"
                  ? "Let's talk innovation."
                  : router.asPath === "/services/white-label"
                  ? "Let's team up."
                  : data.contactBlockDescription}
              </h3>
            )}
            <Link href="/contact" className="fk-btn footerstarted_btn">
              I`m in
              <span>
                <img src="/images/img-stars.png" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceContact;
