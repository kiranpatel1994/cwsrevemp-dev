import Head from "next/head";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ServiceDetails from "../../components/serviceDetails/ServiceDetails";
import { useEffect } from "react";
import GraphAPI from "../../services/graphQL";
function Services({ portfolioCategories }) {
  useEffect(() => {
    document.body.classList.add("services");
    return () => {
      document.body.classList.remove("services");
    };
  }, []);
  return <ServiceDetails cat={portfolioCategories} />;
}

export default Services;

export async function getStaticProps() {
  const portfolioCat = await GraphAPI.portfolioDetails();
  return {
    props: {
      portfolioCategories: portfolioCat.data.data.portfolioCategories.edges,
    },
  };
}
