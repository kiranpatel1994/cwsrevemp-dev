import getGravityForm from "../utilities/gravity-forms";
import { useEffect } from "react";
import ContactDetail from "../components/contactDetail/contactDetail";
import GraphAPI from "../services/graphQL";

export default function Contact({ form, themeDetail }) {
  const { title, description } = form;
  useEffect(() => {
    document.body.classList.add("contact");
    return () => {
      document.body.classList.remove("contact");
    };
  }, []);

  return <ContactDetail data={themeDetail} form={form} />;
}

export async function getStaticProps() {
  const form = await getGravityForm(1);
  const themeRes = await GraphAPI.themeOptions();
  return {
    props: {
      form: form,
      themeDetail: themeRes.data.data.acfOptionsThemeOptions.themeSettings,
    },
  };
}
