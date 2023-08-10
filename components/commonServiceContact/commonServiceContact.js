/* eslint-disable @next/next/no-img-element */
import GravityForm from "../GravityForm";
import GravityFormsForm from "../GravityFormsForm";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  cache: new InMemoryCache(),
});

function ServiceContact({ data, form }) {
  return (
    <div className="form__inner bg-white-shape">
      <div className="container-xl">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            {data.contactBlockTitle && (
              <h3 className="text-white">{data.contactBlockTitle}</h3>
            )}
            {data.contactBlockDescription && (
              <p className="text-white">{data.contactBlockDescription}</p>
            )}
            {data.contactBlockTagLine && (
              <p className="text-white">
                <strong>{data.contactBlockTagLine}</strong>
              </p>
            )}
            <ul className="list-unstyled social_inner mb-0">
              {data.phone && (
                <li>
                  <div className="d-flex align-items-center">
                    <img src="../images/telephone.png" alt="phone" />
                    <a className="ms-3 text-white" href={`tel:` + data.phone}>
                      {data.phone}
                    </a>
                  </div>
                </li>
              )}
              {data.email && (
                <li>
                  <div className="d-flex align-items-center">
                    <img src="../images/email.png" alt="email" />
                    <a className="ms-3 text-white" href={`tel:` + data.email}>
                      {data.email}
                    </a>
                  </div>
                </li>
              )}
              {data.addressLink && (
                <li>
                  <div className="d-flex align-items-center">
                    <img src="../images/pin-point.png" alt="pinPoint" />
                    <a
                      className="ms-3 text-white"
                      href={data.addressLink}
                      target="_blank"
                      rel="noreferrer"
                      dangerouslySetInnerHTML={{
                        __html: data.addressText,
                      }}
                    ></a>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <div className="bg__form">
              <div className="text-center">
                <h3>Intake Form </h3>
              </div>
              <div className="placeholder__form form_container">
                <ApolloProvider client={client}>
                  <GravityForm form={form} />
                </ApolloProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceContact;
