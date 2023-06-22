import Head from "next/head";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useRouter } from "next/router";
import WebsiteDesignDev from "../../components/websiteDesignDevelopment/websiteDesignDevelopment";
import WebApp from "../../components/webApp/webApp";
import Hosting from "../../components/hosting/hosting";
import Ecommerce from "../../components/ecommerce/ecommerce";
import SocialMediaManagement from "../../components/socialMediaManagement/socialMediaManagement";
import WhiteLabel from "../../components/whiteLabel/whiteLabel";
import LogoBranding from "../../components/logoBranding/logoBranding";
import PrintedMarketing from "../../components/printedMarketing/printedMarketing";
import PropertyManagement from "../../components/propertyManagement/propertyManagement";
import getGravityForm from "../../utilities/gravity-forms";
import GraphAPI from "../../services/graphQL";
import Loader from "../../components/header/Loader";

function ServiceDetail({
  catDetail,
  webResDetail,
  webApplication,
  ecomDetail,
  hostingDetail,
  whiteLabelDetail,
  form,
  propertyManagementDetail,
  socialMediaDetail,
  logoDesignandBrandingDetail,
  printedMarketingDetail,
}) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div>
      {catDetail[0].node.id == "dGVybToz" && (
        <WebsiteDesignDev data={webResDetail} />
      )}
      {catDetail[0].node.id == "dGVybTo1" && <WebApp data={webApplication} />}
      {catDetail[0].node.id == "dGVybTo2NQ==" && (
        <Hosting data={hostingDetail} />
      )}
      {catDetail[0].node.id == "dGVybTo2" && <Ecommerce data={ecomDetail} />}
      {catDetail[0].node.id == "dGVybTo0" && (
        <SocialMediaManagement data={socialMediaDetail} />
      )}
      {catDetail[0].node.id == "dGVybTo2Ng==" && (
        <WhiteLabel
          data={whiteLabelDetail.pageBy.whitelabelSettings}
          themeOptions={whiteLabelDetail.acfOptionsThemeOptions.themeSettings}
          form={form}
        />
      )}
      {catDetail[0].node.id == "dGVybTo2OA==" && (
        <LogoBranding data={logoDesignandBrandingDetail} />
      )}
      {catDetail[0].node.id == "dGVybTo2OQ==" && (
        <PrintedMarketing data={printedMarketingDetail} />
      )}
      {catDetail[0].node.id == "dGVybTo2Nw==" && (
        <PropertyManagement data={propertyManagementDetail} form={form} />
      )}
    </div>
  );
}

export default ServiceDetail;

export async function getStaticPaths() {
  const portfolioCat = await GraphAPI.portfolioCategoriesListing();
  const paths = portfolioCat.data.data.portfolioCategories.edges.map(
    (item) => ({ params: { slug: item.node.slug } })
  );
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const webRes = await GraphAPI.websiteDesignAndDevelopment();
  const webApps = await GraphAPI.webApplication();
  const socialMedia = await GraphAPI.socialMediaManagement();
  const eComRes = await GraphAPI.ecomDetail();
  const hostRes = await GraphAPI.hostingDetail();
  const whiteLabel = await GraphAPI.whiteLabelDetail();
  const propertyManagement = await GraphAPI.propertyManagementDetail();
  const logoDesignandBranding = await GraphAPI.logoDesignandBrandingDetail();
  const printedMarketing = await GraphAPI.printedMarketingDetail();
  const jsonDetail = await GraphAPI.portfolioCategoriesSettings(params);
  const form = await getGravityForm(1);
  if (jsonDetail.data.data.portfolioCategories.edges.length == 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      catDetail: jsonDetail.data.data.portfolioCategories.edges,
      webResDetail: webRes.data.data.pageBy.websiteDesignAndDevelopment,
      webApplication:
        webApps.data.data.pageBy.customSystemsWebApplicationDevelopment,
      socialMediaDetail: socialMedia.data.data.pageBy.SocialMediaManagement,
      ecomDetail: eComRes.data.data.pageBy.ecommerceSettings,
      hostingDetail: hostRes.data.data.pageBy.hostingSettings,
      whiteLabelDetail: whiteLabel.data.data,
      propertyManagementDetail:
        propertyManagement.data.data.pageBy.propertyManagement,
      logoDesignandBrandingDetail:
        logoDesignandBranding.data.data.pageBy.logoDesignAndBrandingSettings,
      printedMarketingDetail:
        printedMarketing.data.data.pageBy.printedMarketingSettings,
      form: form,
    },
  };
}
