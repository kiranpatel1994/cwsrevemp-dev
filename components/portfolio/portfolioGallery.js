/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { useState } from "react";
import GraphAPI from "../../services/graphQL";

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
  const handleLoadMoreCat = async (e) => {
    const lastItemCursor = e.target.getAttribute("data-attrib");
    const portfolioCatPagination = await GraphAPI.allPortfolioCatPagination(
      15,
      lastItemCursor,
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
  };
  const handleLoadMore = async () => {
    const lastItemCursor = portfolio.edges[portfolio.edges.length - 1];
    const portfolioPagination = await GraphAPI.allportfolioPagination(
      15,
      lastItemCursor.cursor
    );

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
                <div className="row g-15">
                  {portfolio?.edges?.map((item, index) => {
                    return (
                      <div
                        className="col-12 col-md-6 col-lg-4 project-col"
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
                                href={item.node.portfolioSettings.portfolioUrl}
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
                                  <span className="fake_button">
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
                  {portfolio.pageInfo?.hasNextPage && (
                    <div className="text-center load__center">
                      <button
                        className="load__more d-table ms-auto me-auto"
                        type="button"
                        onClick={handleLoadMore}
                      >
                        <span className="rotating">
                          <img src="../images/loaderr.png" alt="loader" />
                        </span>
                        <h6>Load More </h6>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            {data.map((item, index) => {
              if (item?.portfolios?.edges?.length) {
                return (
                  <div
                    key={`nav-tab-content-${index}`}
                    className="tab-pane fade"
                    id={item.slug}
                    role="tabpanel"
                    aria-labelledby={`${item.slug}-tab`}
                    tabIndex="0"
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

                    {activeTabPortfolio &&
                      activeTabPortfolio?.pageInfo?.hasNextPage && (
                        <div className="text-center load__center">
                          <button
                            className="load__more d-table ms-auto me-auto"
                            type="button"
                            onClick={handleLoadMoreCat}
                          >
                            <span className="rotating">
                              <img
                                data-attrib={
                                  activeTabPortfolio.edges[
                                    activeTabPortfolio.edges.length - 1
                                  ].cursor
                                }
                                src="../images/loaderr.png"
                                alt="loader"
                              />
                            </span>
                            <h6>Load More </h6>
                          </button>
                        </div>
                      )}
                    {activeTabPortfolio === null &&
                      item?.portfolios?.pageInfo?.hasNextPage && (
                        <div className="text-center load__center">
                          <button
                            className="load__more d-table ms-auto me-auto"
                            type="button"
                            onClick={handleLoadMoreCat}
                          >
                            <span className="rotating">
                              <img
                                data-attrib={
                                  item.portfolios.edges[
                                    item.portfolios.edges.length - 1
                                  ].cursor
                                }
                                src="../images/loaderr.png"
                                alt="loader"
                              />
                            </span>
                            <h6>Load More </h6>
                          </button>
                        </div>
                      )}
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
