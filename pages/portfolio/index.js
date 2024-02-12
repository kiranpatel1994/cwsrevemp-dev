import PortfolioGallery from "../../components/portfolio/portfolioGallery";
import GraphAPI from "../../services/graphQL";

function Portfolio({
  allPortfolioCat,
  allPortfolio,
  allportfolioPagination,
  allPortfolioTags,
}) {
  return (
    <main className="position-relative zindex-2 am_project_main">
      <PortfolioGallery
        data={allPortfolioCat}
        allPortfolio={allPortfolio}
        portfolios={allportfolioPagination}
        tags={allPortfolioTags}
      />
    </main>
  );
}

export default Portfolio;

export async function getStaticProps() {
  const limit = process.env.NEXT_PUBLIC_PORTFOLIO_LIMIT;
  const allportfolioPagination = await GraphAPI.allportfolioPagination(
    limit,
    ""
  );
  const allPortfolioCat = await GraphAPI.allPortfolioCat(limit, null);
  const allPortfolio = await GraphAPI.allPortfolio();
  const allPortfolioTags = await GraphAPI.allPortfolioTags(500);
  const tagsCount = allPortfolioTags.data.data?.portfolioTags?.nodes.filter(
    (val, index) => {
      return val.count > 0;
    }
  );
  return {
    props: {
      allPortfolioCat: allPortfolioCat.data.data?.portfolioCategories?.nodes,
      allPortfolio: allPortfolio.data.data?.portfolioCategories?.nodes,
      allportfolioPagination: allportfolioPagination.data.data?.portfolios,
      allPortfolioTags: tagsCount,
    },
  };
}
