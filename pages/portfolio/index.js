import PortfolioGallery from "../../components/portfolio/portfolioGallery";
import GraphAPI from "../../services/graphQL";

function Portfolio({ allPortfolioCat, allportfolioPagination }) {
  return (
    <main className="position-relative zindex-2">
      <PortfolioGallery
        data={allPortfolioCat}
        portfolios={allportfolioPagination}
      />
    </main>
  );
}

export default Portfolio;

export async function getStaticProps() {
  const limit = 15;
  const allportfolioPagination = await GraphAPI.allportfolioPagination(
    limit,
    ""
  );
  const allPortfolioCat = await GraphAPI.allPortfolioCat(15, null);
  return {
    props: {
      allPortfolioCat: allPortfolioCat.data.data?.portfolioCategories?.nodes,
      allportfolioPagination: allportfolioPagination.data.data?.portfolios,
    },
  };
}
