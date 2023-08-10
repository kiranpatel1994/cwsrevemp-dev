import PortfolioGallery from "../../components/portfolio/portfolioGallery";
import GraphAPI from "../../services/graphQL";

function Portfolio({ allPortfolioCat, allportfolioPagination }) {
  return (
    <main className="position-relative zindex-2 am_project_main">
      <PortfolioGallery
        data={allPortfolioCat}
        portfolios={allportfolioPagination}
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
  return {
    props: {
      allPortfolioCat: allPortfolioCat.data.data?.portfolioCategories?.nodes,
      allportfolioPagination: allportfolioPagination.data.data?.portfolios,
    },
  };
}
