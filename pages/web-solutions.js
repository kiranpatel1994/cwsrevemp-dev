import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SolutionDetails from "../components/solutionDetails/SolutionDetails";
import { useEffect } from "react";
import GraphAPI from "../services/graphQL";

function Solutions({ solutionDetails, tagSettings }) {
  useEffect(() => {
    document.body.classList.add("solutions");
    return () => {
      document.body.classList.remove("solutions");
    };
  }, []);
  return <SolutionDetails detail={solutionDetails} tags={tagSettings} />;
}

export default Solutions;

export async function getStaticProps() {
  const solutionD = await GraphAPI.solutionDetails();
  const portfolioTag = await GraphAPI.portfolioTags();
  return {
    props: {
      solutionDetails: solutionD.data.data.pageBy.solutionsSettings,
      tagSettings: portfolioTag.data.data.portfolios.nodes,
    },
  };
}
