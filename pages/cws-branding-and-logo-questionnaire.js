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
    <main>
      <h1>CWS – Branding and Logo Questionnaire</h1>
      <ApolloProvider client={client}>
        <GravityForm form={form} />
      </ApolloProvider>
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
