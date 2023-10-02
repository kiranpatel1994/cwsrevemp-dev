/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useState } from "react";
import GraphAPI from "../../services/graphQL";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

function PortfolioGallery({ data, portfolios, tags, allPortfolio }) {
  const router = useRouter();
  const [tag, setTag] = useState(tags);
  const [portfolio, setPortfolio] = useState(null);
  const [portfolioCat, setPortfolioCat] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [activeTabPortfolio, setActiveTabPortfolio] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [matchingCategory, setMatchingCategory] = useState(null);
  const limit = process.env.NEXT_PUBLIC_PORTFOLIO_LIMIT;

  const handleAllPortfolio = () => {
    router.push(router.pathname, undefined, { shallow: true });
    setSelectedCat(null);
    const siblingElements = document.querySelectorAll(".tag-li");
    siblingElements.forEach((siblingElement) => {
      siblingElement.classList.remove("active");
    });
    setSelectedTag(null);
    setTag(tags);
    setPortfolio({ ...portfolios });
  };

  const handleSelectTag = (e) => {
    e.preventDefault();
    document.querySelector(".tab-loader")?.classList.remove("d-none");
    setSelectedTag(e.target.getAttribute("data-slug"));
    // const siblingElements = document.querySelectorAll(".tag-li");
    // siblingElements.forEach((siblingElement) => {
    //   siblingElement.classList.remove("active");
    // });
    const closestElement = e.target.closest(".tag-li");
    if (closestElement) {
      console.log("here");
      closestElement.classList.add("active");
    }
    if (selectedCat) {
      router.push(
        `?category=${encodeURIComponent(selectedCat)}&tag=${encodeURIComponent(
          e.target.getAttribute("data-slug")
        )}`,
        undefined,
        {
          shallow: true,
        }
      );
    } else {
      router.push(
        `?tag=${encodeURIComponent(e.target.getAttribute("data-slug"))}`,
        undefined,
        {
          shallow: true,
        }
      );
    }
    updateSelectedTag(e.target.getAttribute("data-slug"), null);
  };

  const updateSelectedTag = async (selectedTag, selectedCat) => {
    if (selectedCat) {
      const portfolioCatFilterPagination =
        await GraphAPI.allPortfolioCatPagination(500, null, selectedCat);
      const filteredCatPortfolio =
        portfolioCatFilterPagination.data.data.portfolioCategories?.nodes[0].portfolios.edges.filter(
          (portfolio) => {
            const tags = portfolio.node.portfolioTags.nodes;
            return tags.some((tag) => tag.slug === selectedTag);
          }
        );
      setActiveTabPortfolio({
        ...activeTabPortfolio,
        edges: filteredCatPortfolio,
      });
    } else {
      const allPortfolioForTag = await GraphAPI.allportfolioPagination(
        500,
        null
      );
      const filteredAllPortfolio =
        allPortfolioForTag.data.data?.portfolios.edges.filter((portfolio) => {
          const tags = portfolio.node.portfolioTags.nodes;
          return tags.some((tag) => tag.slug === selectedTag);
        });
      setPortfolio({ ...portfolio, edges: filteredAllPortfolio });
    }
    document.querySelector(".tab-loader")?.classList.add("d-none");
  };

  const handleSelectCat = (e, category) => {
    e.preventDefault();
    router.push(
      `?category=${encodeURIComponent(e.target.getAttribute("data-slug"))}`,
      undefined,
      {
        shallow: true,
      }
    );
    updateSelectedCat(e.target.getAttribute("data-slug"));
  };

  const updateSelectedCat = async (catSlug) => {
    // const siblingElements = document.querySelectorAll(".tag-li");
    // siblingElements.forEach((siblingElement) => {
    //   siblingElement.classList.remove("active");
    // });
    if (!selectedTag) {
      setSelectedTag(null);
    }
    const selectedCategoryPortfolios = data.filter(
      (element) => element.slug.toLowerCase() === catSlug.toLowerCase()
    );
    const selectedCategoryFromAllPortfolios = allPortfolio.filter(
      (element) => element.slug.toLowerCase() === catSlug.toLowerCase()
    );
    const portfolioTags =
      selectedCategoryFromAllPortfolios[0].portfolios.edges.flatMap((item) =>
        item.node.portfolioTags.nodes.map((tag) => ({
          name: tag.name,
          slug: tag.slug,
        }))
      );
    const uniquePortfolioTags = Array.from(
      new Set(portfolioTags.map((tag) => tag.name))
    ).map((name) => {
      const tag = portfolioTags.find((tag) => tag.name === name);
      return {
        name: name,
        slug: tag.slug,
      };
    });
    setTag(uniquePortfolioTags);
    setActiveTabPortfolio(selectedCategoryPortfolios[0].portfolios);
  };
  const handleInfiniteScroll = async (e, c) => {
    if (e === selectedCat && c !== null) {
      const portfolioCatPagination = await GraphAPI.allPortfolioCatPagination(
        limit,
        c,
        selectedCat
      );

      const updatedEdges = [
        ...activeTabPortfolio.edges,
        ...portfolioCatPagination.data.data.portfolioCategories?.nodes[0]
          .portfolios.edges,
      ];
      const updatedPageInfo =
        portfolioCatPagination.data.data.portfolioCategories?.nodes[0]
          .portfolios.pageInfo;

      const updatedPortfolioData = {
        ...activeTabPortfolio,
        edges: updatedEdges,
        pageInfo: updatedPageInfo,
      };
      setActiveTabPortfolio(updatedPortfolioData);
    }
  };

  const handleLoadMore = async (c) => {
    const portfolioPagination = await GraphAPI.allportfolioPagination(limit, c);
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

  useEffect(() => {
    setPortfolio(portfolios);
  }, [portfolios]);

  useEffect(() => {
    setSelectedCat(null);
    setSelectedTag(null);
    const categorySlug = router.query.category;
    const tagSlug = router.query.tag;
    if (categorySlug) {
      var routerCategory = data.find(
        (item) => item.slug.toLowerCase() === categorySlug.toLowerCase()
      );

      if (routerCategory) {
        setSelectedCat(categorySlug);
        updateSelectedCat(categorySlug);
      }
    }
    if (tagSlug) {
      const routerTag = tags.find(
        (item) => item.slug.toLowerCase() === tagSlug.toLowerCase()
      );
      if (routerTag) {
        setSelectedTag(tagSlug);
        updateSelectedTag(tagSlug, categorySlug);
      }
    }
  }, [router.query.category, router.query.tag]);

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
                  className={
                    selectedCat === null
                      ? "list-inline-item active"
                      : "list-inline-item"
                  }
                  data-bs-toggle="tab"
                  data-bs-target="#all"
                  role="tab"
                  aria-controls="all"
                  aria-selected="true"
                  onClick={handleAllPortfolio}
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
                      className={
                        item.slug === selectedCat
                          ? "list-inline-item active"
                          : "list-inline-item"
                      }
                      data-bs-toggle="tab"
                      data-bs-target={`#${item.slug}`}
                      role="tab"
                      aria-controls={item.slug}
                      aria-selected="false"
                      onClick={handleSelectCat}
                      data-slug={item.slug}
                    >
                      <a>
                        <span data-slug={item.slug}>{item.name}</span>
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          {tag && (
            <div className="option_tags">
              <div className="option-1">
                <ul className="list-inline mb-0">
                  {tag.map((item, index) => {
                    return (
                      <li
                        className={
                          item.slug === selectedTag
                            ? "list-inline-item tag-li active"
                            : "list-inline-item tag-li"
                        }
                        key={`tag-${index}`}
                        onClick={handleSelectTag}
                        data-slug={item.slug}
                      >
                        <a data-slug={item.slug}>
                          <span data-slug={item.slug}>{item.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="project-contaner overflow-hidden">
        <div className="container-fluid">
          <div className="tab-loader d-none">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="tab-content clearfix">
            {portfolio && (
              <div
                className={
                  selectedCat === null
                    ? "tab-pane active fade show"
                    : "tab-pane"
                }
                id="all"
                role="tabpanel"
                aria-labelledby="all-tab"
                tabIndex="0"
              >
                <InfiniteScroll
                  dataLength={portfolio?.edges?.length}
                  next={() =>
                    handleLoadMore(
                      portfolio.edges[portfolio.edges.length - 1]?.cursor
                    )
                  }
                  hasMore={
                    portfolio.pageInfo?.hasNextPage && selectedTag === null
                      ? true
                      : false
                  }
                  loader={<h4 className="loading_portfolio">Loading...</h4>}
                  endMessage={
                    <div className="mx-auto d-table d-100-sm center">
                      <h3>
                        Like what you see? The next project here could be yours.
                      </h3>
                      <Link href="/contact" className="btn center btn-yellow">
                        <span>Reach Out</span>
                      </Link>
                    </div>
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
                              <Link
                                href={`/portfolio/${item.node.slug}`}
                                className="explore_btn"
                              >
                                <span>
                                  Explore <img src="images/down-right.png" />
                                </span>
                              </Link>

                              <div className="gradient_box">
                                {item.node.title && <h3>{item.node.title}</h3>}
                                <span className="fake_button">
                                  {item?.node?.portfolioCategories?.nodes
                                    ?.length && (
                                    <span className="fake_button_1">
                                      {item.node.portfolioCategories?.nodes
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
                  ? activeTabPortfolio?.edges[
                      activeTabPortfolio?.edges.length - 1
                    ]?.cursor
                  : item.portfolios?.edges[item.portfolios.edges.length - 1]
                      ?.cursor;
                return (
                  <div
                    key={`nav-tab-content-${index}`}
                    className={
                      item.slug === selectedCat
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
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
                      next={() => handleInfiniteScroll(item.slug, cursor)}
                      hasMore={
                        (activeTabPortfolio &&
                          activeTabPortfolio?.pageInfo?.hasNextPage &&
                          selectedTag === null) ||
                        (activeTabPortfolio === null &&
                          item?.portfolios?.pageInfo?.hasNextPage &&
                          selectedTag === null)
                          ? true
                          : false
                      }
                      loader={<h4 className="loading_portfolio">Loading...</h4>}
                      endMessage={
                        <div className="mx-auto d-table d-100-sm">
                          <h3>
                            Like what you see? The next project here could be
                            yours.
                          </h3>
                          <Link
                            href="/contact"
                            className="btn center btn-yellow"
                          >
                            <span>Reach Out</span>
                          </Link>
                        </div>
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
                                      <Link
                                        href={`/portfolio/${item.node.slug}`}
                                        className="explore_btn"
                                      >
                                        <span>
                                          Explore
                                          <img src="images/down-right.png" />
                                        </span>
                                      </Link>

                                      <div className="gradient_box">
                                        {item.node.title && (
                                          <h3>{item.node.title}</h3>
                                        )}
                                        {item?.node?.portfolioCategories?.nodes
                                          ?.length && (
                                          <span className="fake_button">
                                            {item.node.portfolioCategories?.nodes
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
                                      <Link
                                        href={`/portfolio/${item.node.slug}`}
                                        className="explore_btn"
                                      >
                                        <span>
                                          Explore
                                          <img src="images/down-right.png" />
                                        </span>
                                      </Link>

                                      <div className="gradient_box">
                                        {item.node.title && (
                                          <h3>{item.node.title}</h3>
                                        )}
                                        {item?.node?.portfolioCategories?.nodes
                                          ?.length && (
                                          <span className="fake_button">
                                            {item.node.portfolioCategories?.nodes
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
