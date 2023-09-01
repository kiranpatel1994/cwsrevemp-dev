/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
function ServiceContact({ data }) {
  return (
    <div className="footerstarted">
      <div className="container-xl">
        <div className="row">
          <div className="col-12 text-center">
            {data.contactBlockTitle && <span>{data.contactBlockTitle}</span>}
            {data.contactBlockDescription && (
              <h3>{data.contactBlockDescription}</h3>
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
