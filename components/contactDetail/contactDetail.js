import { GravityFormsForm } from "../../generated/graphql";
import GravityForm from "../../components/GravityForm";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  cache: new InMemoryCache(),
});
export default function ContactDetail({ data, form }) {
  return (
    <main>
      <div className="letsTalk_inner position-relative">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h1 className="position-relative text-center">
                Let`s talk innovation.
                {data.phone && (
                  <a href={`tel:` + data.phone} className="d-block w-100">
                    {data.phone}
                  </a>
                )}
              </h1>
            </div>
            <div className="col-12 col-md-6">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <ul className="list-unstyled social_inner">
                    {data.email && (
                      <li>
                        <div className="d-flex align-items-center">
                          <img src="../images/email.png" alt="email" />

                          <a className="ms-3" href={`tel:` + data.email}>
                            {data.email}
                          </a>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  <ul className="list-unstyled social_inner">
                    {data.addressLink && (
                      <li>
                        <div className="d-flex align-items-start">
                          <img src="../images/pin-point.png" alt="pinPoint" />
                          <a
                            className="ms-3"
                            href={data.addressLink}
                            rel="noreferrer"
                            target="_blank"
                            dangerouslySetInnerHTML={{
                              __html: data.addressText,
                            }}
                          ></a>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-container">
          <div className="progress-bar">
            <div className="progress-bar-value"></div>
          </div>
        </div>
      </div>
      {/* <h1>{title}</h1>
      <p>{description}</p> */}
      <div className="talkBanner position-relative">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="form_container">
                <div className="text-center">
                  <h2>
                    Questions? We`re here. <br />
                    We`d love to hear from you.
                  </h2>
                </div>
                <ApolloProvider client={client}>
                  <GravityForm form={form} />
                </ApolloProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-placeholder">
        <img
          className="img-fluid w-100"
          src="../images/mapPlace.png"
          alt="map"
        />
      </div>
    </main>
  );
}
