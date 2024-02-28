import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CompanyDetails from "../components/companyDetails/CompanyDetails";
import { useEffect } from "react";
import GraphAPI, { replaceImgUrls } from "../services/graphQL";
function Company({
  companySettings,
  memberList,
  themeDetail,
  testimonialSettings,
}) {
  useEffect(() => {
    document.body.classList.add("company");
    return () => {
      document.body.classList.remove("company");
    };
  }, []);

  return (
    <CompanyDetails
      details={replaceImgUrls(companySettings)}
      list={replaceImgUrls(memberList)}
      themeData={replaceImgUrls(themeDetail)}
      testimonialSettings={replaceImgUrls(testimonialSettings)}
    />
  );
}

export default Company;

export async function getStaticProps() {
  const companyData = await GraphAPI.companyDetails();
  const members = await GraphAPI.teamDetails();
  const themeRes = await GraphAPI.themeOptions();
  const testimonial = await GraphAPI.clientTestimonialSettings();
  return {
    props: {
      testimonialSettings:
        testimonial.data?.data?.acfOptionsThemeOptions.themeSettings,
      companySettings: companyData.data.data.pageBy,
      memberList: members.data.data.members.edges,
      themeDetail: themeRes.data.data.acfOptionsThemeOptions.themeSettings,
    },
  };
}
