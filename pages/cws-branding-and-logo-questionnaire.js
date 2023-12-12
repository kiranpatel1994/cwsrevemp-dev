import getGravityForm from "../utilities/gravity-forms";
import { useEffect } from "react";

import GravityForm from ".././components/GravityForm";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  cache: new InMemoryCache(),
});

export default function CWSBranding({ form }) {
  const { title, description } = form;
  useEffect(() => {
    document.body.classList.add("contact");
    return () => {
      document.body.classList.remove("contact");
    };
  }, []);

  return (
    <main className="position-relative zindex-2">
      <section className="companyBanner questionnaireBanner pb-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-lg-5 pb-lg-5">
              <h1 className="mb-lg-5 pb-lg-5 mb-0">
                CWS – Branding and Logo Questionnaire
              </h1>
              <div class="demo-container">
                <div class="progress-bar">
                  <div class="progress-bar-value"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="questionnaireForm">
        <div className="container">
          <div className="talkBanner position-relative">
            <div className="form_container">
              <ApolloProvider client={client}>
                <GravityForm form={form} />
              </ApolloProvider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const form = await getGravityForm(4);
  return {
    props: {
      form: form,
    },
  };
}
