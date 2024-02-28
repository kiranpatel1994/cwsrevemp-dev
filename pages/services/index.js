import Head from "next/head";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ServiceDetails from "../../components/serviceDetails/ServiceDetails";
import { useEffect } from "react";
import GraphAPI, { replaceImgUrls } from "../../services/graphQL";
function Services({ portfolioCategories, serviceBanner }) {
  useEffect(() => {
    document.body.classList.add("services");
    return () => {
      document.body.classList.remove("services");
    };
  }, []);
  return (
    <ServiceDetails
      cat={replaceImgUrls(portfolioCategories)}
      title={serviceBanner}
    />
  );
}

export default Services;

export async function getStaticProps() {
  const portfolioCat = await GraphAPI.portfolioDetails();
  const serviceBanner = await GraphAPI.serviceDetails();
  return {
    props: {
      portfolioCategories: portfolioCat.data.data.portfolioCategories.edges,
      serviceBanner: serviceBanner.data?.data?.pageBy?.services,
    },
  };
}
