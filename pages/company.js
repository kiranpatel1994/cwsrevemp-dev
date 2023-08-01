import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CompanyDetails from "../components/companyDetails/CompanyDetails";
import { useEffect } from "react";
import GraphAPI from "../services/graphQL";
function Company({ companySettings, memberList, themeDetail }) {
  useEffect(() => {
    document.body.classList.add("company");
    return () => {
      document.body.classList.remove("company");
    };
  }, []);

  return (
    <CompanyDetails
      details={companySettings}
      list={memberList}
      themeData={themeDetail}
    />
  );
}

export default Company;

export async function getStaticProps() {
  const companyData = await GraphAPI.companyDetails();
  const members = await GraphAPI.teamDetails();
  const themeRes = await GraphAPI.themeOptions();
  return {
    props: {
      companySettings: companyData.data.data.pageBy,
      memberList: members.data.data.members.edges,
      themeDetail: themeRes.data.data.acfOptionsThemeOptions.themeSettings,
    },
  };
}
