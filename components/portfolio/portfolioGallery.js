/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { useState } from "react";
import GraphAPI from "../../services/graphQL";
import InfiniteScroll from "react-infinite-scroll-component";

/* eslint-disable @next/next/no-img-element */
function PortfolioGallery({ data, portfolios }) {
  const [portfolio, setPortfolio] = useState(portfolios);
  const [portfolioCat, setPortfolioCat] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [activeTabPortfolio, setActiveTabPortfolio] = useState(null);
  const updateSelectedCat = async (e) => {
    setSelectedCat(e.target.innerText);
    const selectedCategoryPortfolios = data.filter((element) =>
      element.name.toLowerCase().includes(e.target.innerText.toLowerCase())
    );
    setActiveTabPortfolio(selectedCategoryPortfolios[0].portfolios);
  };
  const handleInfiniteScroll = async (e, c) => {
    if (e === selectedCat && c !== null) {
      const portfolioCatPagination = await GraphAPI.allPortfolioCatPagination(
        15,
        c,
        selectedCat
      );

      const updatedEdges = [
        ...activeTabPortfolio.edges,
        ...portfolioCatPagination.data.data.portfolioCategories.nodes[0]
          .portfolios.edges,
      ];
      const updatedPageInfo =
        portfolioCatPagination.data.data.portfolioCategories.nodes[0].portfolios
          .pageInfo;

      const updatedPortfolioData = {
        ...activeTabPortfolio,
        edges: updatedEdges,
        pageInfo: updatedPageInfo,
      };
      setActiveTabPortfolio(updatedPortfolioData);
    }
  };

  const handleLoadMore = async (c) => {
    const portfolioPagination = await GraphAPI.allportfolioPagination(15, c);

    const updatedEdges = [
      ...portfolio.edges,
      ...portfolioPagination.data.data?.portfolios.edges,
    ];
    const updatedPageInfo = portfolioPagination.data.data?.portfolios.pageInfo;

    const updatedPortfolioData = {
      ...portfolio,
      edges: updatedEdges,
      pageInfo: updatedPageInfo,
    };
    setPortfolio(updatedPortfolioData);
  };
  return (
    <section className="am_project">
      <div className="container-xl p-0">
        <div className="row g-0">
          <div className="col-12 text-center">
            <h1>
              Take a look at our amazing <em>projects</em>.
            </h1>
          </div>
        </div>

        <div className="nav_mixitup">
          <div className="allProject_box">
            <ul className="list-inline text-center mb-0" role="tablist">
              {portfolio && (
                <li
                  className="list-inline-item active"
                  data-bs-toggle="tab"
                  data-bs-target="#all"
                  role="tab"
                  aria-controls="all"
                  aria-selected="true"
                >
                  <a>
                    <span>All projects </span>
                  </a>
                </li>
              )}
              {data.map((item, index) => {
                if (item?.portfolios?.edges?.length) {
                  return (
                    <li
                      key={`nav-tabs-${index}`}
                      className="list-inline-item"
                      data-bs-toggle="tab"
                      data-bs-target={`#${item.slug}`}
                      role="tab"
                      aria-controls={item.slug}
                      aria-selected="false"
                      onClick={updateSelectedCat}
                    >
                      <a>
                        <span data-portfolio={item.portfolios}>
                          {item.name}
                        </span>
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          {/* <div className="option_tags">
              <div className="option-1">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#">Industry tag </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Industry tag </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Industry tag </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Industry tag </a>
                  </li>
                </ul>
              </div>
            </div> */}
        </div>
      </div>
      <div className="project-contaner overflow-hidden">
        <div className="container-fluid">
          <div className="tab-content clearfix">
            {portfolio && (
              <div
                className="tab-pane active fade show active"
                id="all"
                role="tabpanel"
                aria-labelledby="all-tab"
                tabIndex="0"
              >
                <InfiniteScroll
                  dataLength={portfolio?.edges?.length}
                  next={() =>
                    handleLoadMore(
                      portfolio.edges[portfolio.edges.length - 1].cursor
                    )
                  }
                  hasMore={portfolio.pageInfo?.hasNextPage ? true : false}
                  loader={<h4 className="loading_portfolio">Loading...</h4>}
                  endMessage={
                    <h4 className="portfolio_lastline">
                      Yay! you have seen it all.
                    </h4>
                  }
                >
                  <div className="row g-15">
                    {portfolio?.edges?.map((item, index) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-xl-4 project-col"
                          key={`allPortfolio-${index}`}
                        >
                          <div className="gif_placer">
                            <div className="gif_box">
                              <img
                                className="img-fluid w-100"
                                src={
                                  item?.node?.featuredImage?.node?.sourceUrl
                                    ? item.node.featuredImage.node.sourceUrl
                                    : "images/placeholder.png"
                                }
                              />
                            </div>
                            <div className="gradient_wall">
                              {item?.node?.portfolioSettings?.portfolioUrl && (
                                <Link
                                  href={
                                    item.node.portfolioSettings.portfolioUrl
                                  }
                                  className="explore_btn"
                                  target="_blank"
                                >
                                  <span>
                                    Explore <img src="images/down-right.png" />
                                  </span>
                                </Link>
                              )}
                              <div className="gradient_box">
                                {item.node.title && <h3>{item.node.title}</h3>}
                                <span className="fake_button">
                                  {item?.node?.portfolioCategories?.nodes
                                    ?.length && (
                                    <span className="fake_button_1">
                                      {item.node.portfolioCategories.nodes
                                        .map((node) => node.name)
                                        .join(",")}
                                    </span>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </InfiniteScroll>
              </div>
            )}
            {data.map((item, index) => {
              if (item?.portfolios?.edges?.length) {
                let cursor = activeTabPortfolio
                  ? activeTabPortfolio.edges[
                      activeTabPortfolio.edges.length - 1
                    ].cursor
                  : item.portfolios.edges[item.portfolios.edges.length - 1]
                      .cursor;
                return (
                  <div
                    key={`nav-tab-content-${index}`}
                    className="tab-pane fade"
                    id={item.slug}
                    role="tabpanel"
                    aria-labelledby={`${item.slug}-tab`}
                    tabIndex="0"
                  >
                    <InfiniteScroll
                      dataLength={
                        activeTabPortfolio === null
                          ? item?.portfolios?.edges?.length
                          : activeTabPortfolio.edges?.length
                      }
                      next={() => handleInfiniteScroll(item.name, cursor)}
                      hasMore={
                        (activeTabPortfolio &&
                          activeTabPortfolio?.pageInfo?.hasNextPage) ||
                        (activeTabPortfolio === null &&
                          item?.portfolios?.pageInfo?.hasNextPage)
                          ? true
                          : false
                      }
                      loader={<h4 className="loading_portfolio">Loading...</h4>}
                      endMessage={
                        <h4 className="portfolio_lastline">
                          Yay! you have seen it all.
                        </h4>
                      }
                    >
                      <div className="row g-15">
                        {activeTabPortfolio === null
                          ? item?.portfolios?.edges.map((item, index) => {
                              return (
                                <div
                                  className="col-12 col-md-6 col-lg-4 project-col"
                                  key={`portfolio-index-${index}`}
                                >
                                  <div className="gif_placer">
                                    <div className="gif_box">
                                      <img
                                        className="img-fluid w-100"
                                        src={
                                          item.node.featuredImage.node.sourceUrl
                                            ? item.node.featuredImage.node
                                                .sourceUrl
                                            : "images/placeholder.png"
                                        }
                                      />
                                    </div>
                                    <div className="gradient_wall">
                                      {item.node.portfolioSettings
                                        .portfolioUrl && (
                                        <Link
                                          href={
                                            item.node.portfolioSettings
                                              .portfolioUrl
                                          }
                                          className="explore_btn"
                                          target="_blank"
                                        >
                                          <span>
                                            Explore{" "}
                                            <img src="images/down-right.png" />
                                          </span>
                                        </Link>
                                      )}
                                      <div className="gradient_box">
                                        {item.node.title && (
                                          <h3>{item.node.title}</h3>
                                        )}
                                        {item?.node?.portfolioCategories?.nodes
                                          ?.length && (
                                          <span className="fake_button">
                                            {item.node.portfolioCategories.nodes
                                              .map((node) => node.name)
                                              .join(",")}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          : activeTabPortfolio.edges.map((item, index) => {
                              return (
                                <div
                                  className="col-12 col-md-6 col-lg-4 project-col"
                                  key={`portfolio-index-${index}`}
                                >
                                  <div className="gif_placer">
                                    <div className="gif_box">
                                      <img
                                        className="img-fluid w-100"
                                        src={
                                          item.node.featuredImage.node.sourceUrl
                                            ? item.node.featuredImage.node
                                                .sourceUrl
                                            : "images/placeholder.png"
                                        }
                                      />
                                    </div>
                                    <div className="gradient_wall">
                                      {item.node.portfolioSettings
                                        .portfolioUrl && (
                                        <Link
                                          href={
                                            item.node.portfolioSettings
                                              .portfolioUrl
                                          }
                                          className="explore_btn"
                                          target="_blank"
                                        >
                                          <span>
                                            Explore{" "}
                                            <img src="images/down-right.png" />
                                          </span>
                                        </Link>
                                      )}
                                      <div className="gradient_box">
                                        {item.node.title && (
                                          <h3>{item.node.title}</h3>
                                        )}
                                        {item?.node?.portfolioCategories?.nodes
                                          ?.length && (
                                          <span className="fake_button">
                                            {item.node.portfolioCategories.nodes
                                              .map((node) => node.name)
                                              .join(",")}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                      </div>
                    </InfiniteScroll>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioGallery;
