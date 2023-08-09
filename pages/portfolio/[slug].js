import { useRouter } from "next/router";
import PortfolioDetailContent from "../../components/portfolio/portfolioDetail";
import GraphAPI from "../../services/graphQL";
import Loader from "../../components/header/Loader";

function PortfolioDetail({ portfolioDetail, relativePortfolioDetail }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <PortfolioDetailContent
      data={portfolioDetail}
      relativeData={relativePortfolioDetail}
    />
  );
}

export default PortfolioDetail;

export async function getStaticPaths() {
  const portfolioSlug = await GraphAPI.allPortfolioSlug();
  const paths = portfolioSlug.data.data?.portfolios?.nodes?.map((item) => {
    return { params: { slug: item.slug } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const portfolioDetail = await GraphAPI.singlePortfolioSettings(params);
  const portfolioDetailData = portfolioDetail.data.data.portfolioBy;
  if (!portfolioDetailData) {
    return {
      notFound: true,
    };
  }
  const catName = portfolioDetailData.portfolioCategories?.nodes[0]?.name;
  const notIn = portfolioDetailData.portfolioId;
  const relativePortfolioDetail = await GraphAPI.relativePortfolioSettings(
    catName,
    notIn
  );
  return {
    props: {
      portfolioDetail: portfolioDetailData,
      relativePortfolioDetail:
        relativePortfolioDetail.data.data?.portfolioCategories?.nodes[0]
          ?.portfolios?.nodes,
    },
  };
}
