/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useState } from "react";
import GraphAPI, { replaceImgUrls } from "../../services/graphQL";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import Image from "next/image";

function PortfolioGallery({
  data,
  portfolios,
  tags,
  allPortfolio,
  justPortfolios,
  themeOptions,
}) {
  const router = useRouter();
  tags.sort((a, b) => a.name.localeCompare(b.name));
  justPortfolios.sort((a, b) => {
    const yearA = parseInt(a?.node?.portfolioSettings?.launchedYear || "0");
    const yearB = parseInt(b?.node?.portfolioSettings?.launchedYear || "0");
    return yearB - yearA;
  });
  allPortfolio.sort((a, b) => {
    const yearA = parseInt(a?.node?.portfolioSettings?.launchedYear || "0");
    const yearB = parseInt(b?.node?.portfolioSettings?.launchedYear || "0");
    return yearB - yearA;
  });
  portfolios?.edges?.sort((a, b) => {
    const yearA = parseInt(a?.node?.portfolioSettings?.launchedYear || "0");
    const yearB = parseInt(b?.node?.portfolioSettings?.launchedYear || "0");
    return yearB - yearA;
  });

  const [tag, setTag] = useState(tags);
  const [portfolio, setPortfolio] = useState(null);
  const [portfolioCat, setPortfolioCat] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [activeTabPortfolio, setActiveTabPortfolio] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [matchingCategory, setMatchingCategory] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [emptyResult, setEmptyResult] = useState(null);
  const limit = process.env.NEXT_PUBLIC_PORTFOLIO_LIMIT;

  const searchPortfolio = (
    searchVal,
    portfolioList,
    defaultPortfolios,
    portfolioType
  ) => {
    var searchData = [];
    if (searchVal && searchVal.length >= 3) {
      searchData = portfolioList.filter((portfolio) => {
        const portfolioTitle = portfolio.node.title.toLowerCase();
        return portfolioTitle.search(searchVal) != -1;
      });

      searchData.sort((a, b) => {
        const yearA = parseInt(a?.node?.portfolioSettings?.launchedYear || "0");
        const yearB = parseInt(b?.node?.portfolioSettings?.launchedYear || "0");
        return yearB - yearA;
      });
      if (searchData.length > 0) {
        setEmptyResult(false);
        if (portfolioType === "all") {
          setPortfolio({
            ...portfolio,
            edges: replaceImgUrls(searchData),
          });
        } else {
          setActiveTabPortfolio({
            ...activeTabPortfolio,
            edges: replaceImgUrls(searchData),
          });
        }
      } else {
        setEmptyResult(true);
      }
    } else {
      if (portfolioType === "all") {
        setPortfolio({ ...portfolio, edges: defaultPortfolios });
      } else {
        setActiveTabPortfolio({
          ...activeTabPortfolio,
          edges: defaultPortfolios,
        });
      }
    }
  };

  const handlesearch = (e) => {
    const searchVal = e.target.value.replace(/^\s+/g, "");
    setSearchText(searchVal);
    searchPortfolio(searchText, justPortfolios, portfolios?.edges, "all");
  };

  const handleAllPortfolio = () => {
    router.push(router.pathname, undefined, { shallow: true });
    setSelectedCat(null);
    const siblingElements = document.querySelectorAll(".tag-li");
    siblingElements.forEach((siblingElement) => {
      siblingElement.classList.remove("active");
    });
    setSelectedTag(null);
    tags.sort((a, b) => a.name.localeCompare(b.name));
    setTag(tags);
    searchPortfolio(searchText, justPortfolios, portfolios?.edges, "all");
  };

  const handleSelectTag = (e) => {
    e.preventDefault();
    document.querySelector(".tab-loader")?.classList.remove("d-none");
    setSelectedTag(e.target.getAttribute("data-slug"));
    const closestElement = e.target.closest(".tag-li");
    if (closestElement) {
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
      const filteredCatPortfolio = justPortfolios?.filter((portfolio) => {
        const portfolioTags = portfolio.node.portfolioTags.nodes;
        const portfolioCat = portfolio.node.portfolioCategories.nodes;

        const tagMatch = portfolioTags.some((tag) => tag.slug === selectedTag);
        const catNodeMatch = portfolioCat.some(
          (catNode) => catNode.slug === selectedCat
        );

        const result = tagMatch && catNodeMatch;
        return result;
      });
      searchPortfolio(
        searchText,
        filteredCatPortfolio,
        filteredCatPortfolio,
        "active"
      );
    } else {
      const filteredAllPortfolio = justPortfolios?.filter((portfolio) => {
        const tags = portfolio.node.portfolioTags.nodes;
        return tags.some((tag) => tag.slug === selectedTag);
      });
      searchPortfolio(
        searchText,
        filteredAllPortfolio,
        filteredAllPortfolio,
        "all"
      );
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
    if (!selectedTag) {
      setSelectedTag(null);
    }
    if (catSlug) {
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
      uniquePortfolioTags.sort((a, b) => a.name.localeCompare(b.name));
      selectedCategoryPortfolios[0].portfolios?.edges?.sort((a, b) => {
        const yearA = parseInt(a?.node?.portfolioSettings?.launchedYear || "0");
        const yearB = parseInt(b?.node?.portfolioSettings?.launchedYear || "0");
        return yearB - yearA;
      });
      setTag(uniquePortfolioTags);
      searchPortfolio(
        searchText,
        selectedCategoryPortfolios[0].portfolios.edges,
        selectedCategoryPortfolios[0].portfolios.edges,
        "active"
      );
    }
  };
  useEffect(() => {
    setPortfolio(portfolios);
  }, [portfolios]);

  useEffect(() => {
    if (selectedCat && selectedTag) {
      updateSelectedTag(selectedTag, selectedCat);
    } else if (selectedCat) {
      updateSelectedCat(selectedCat);
    }
  }, [searchText]);

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
        <div className="row g-0">
          <input
            name="searchBox"
            type="text"
            placeholder="search"
            value={searchText || ""}
            onChange={handlesearch}
          />
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
                if (
                  item?.portfolios?.edges?.length &&
                  item.slug !== "aba-agencies" &&
                  item.slug !== "ecommerce-website-development"
                ) {
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
        <div className="container-fluid position-relative">
          <div className="tab-loader d-none">
            <div className="stage">
              <div className="dot-pulse"></div>
            </div>
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
                {!emptyResult ? (
                  <>
                    <div className="row g-15">
                      {portfolio?.edges?.map((item, index) => {
                        return (
                          <div
                            className="col-12 col-md-6 col-xl-4 project-col"
                            key={`allPortfolio-${index}`}
                          >
                            <div className="gif_placer">
                              <div className="gif_box">
                                <Image
                                  className="img-fluid w-100"
                                  width={630}
                                  height={410}
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
                                  {item.node.title && (
                                    <h3>{item.node.title}</h3>
                                  )}
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

                    <div className="mx-auto d-table d-100-sm st_text center">
                      <h3>
                        Like what you see? The next project here could be yours.
                      </h3>
                      <Link href="/contact" className="btn center btn-yellow">
                        <span>Reach Out</span>
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="st_text">
                    <h3>No Data found for search : {searchText}</h3>
                  </div>
                )}
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
                    {!emptyResult ? (
                      <>
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
                                        <Image
                                          width={630}
                                          height={410}
                                          className="img-fluid w-100"
                                          src={
                                            item.node.featuredImage.node
                                              .sourceUrl
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
                                          {item?.node?.portfolioCategories
                                            ?.nodes?.length && (
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
                                            item.node.featuredImage.node
                                              .sourceUrl
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
                                          {item?.node?.portfolioCategories
                                            ?.nodes?.length && (
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
                        <div className="mx-auto d-table d-100-sm st_text center">
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
                      </>
                    ) : (
                      <div className="st_text">
                        <h3>No Data found for search : {searchText}</h3>
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
