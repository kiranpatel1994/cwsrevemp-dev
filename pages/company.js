import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CompanyDetails from "../components/companyDetails/CompanyDetails";
import { useEffect } from "react";
import GraphAPI from "../services/graphQL";
function Company({ companySettings, memberList }) {
  useEffect(() => {
    document.body.classList.add("company");
    return () => {
      document.body.classList.remove("company");
    };
  }, []);

  return <CompanyDetails details={companySettings} list={memberList} />;
}

export default Company;

export async function getStaticProps() {
  const companyData = await GraphAPI.companyDetails();
  const members = await GraphAPI.teamDetails();
  return {
    props: {
      companySettings: companyData.data.data.pageBy,
      memberList: members.data.data.members.edges,
    },
  };
}
