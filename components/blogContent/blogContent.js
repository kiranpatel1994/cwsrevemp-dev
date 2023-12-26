/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GraphAPI from "../../services/graphQL";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function BlogContent({ blogData, blogDetail }) {
  const [blogs, setBlogs] = useState(blogData);
  const [keyword, setKeyword] = useState(null);
  const [searchBlogs, setSearchBlogs] = useState(null);
  const [searchFlag, setSearchFlag] = useState(false);
  const handleLoaderMore = async () => {
    const lastItemCursor = blogs.edges[blogs.edges.length - 1];
    const blogPagination = await GraphAPI.blogPagination(
      process.env.NEXT_PUBLIC_BLOG_LIMIT,
      lastItemCursor.cursor
    );

    const updatedEdges = [
      ...blogs.edges,
      ...blogPagination.data.data?.posts.edges,
    ];
    const updatedPageInfo = blogPagination.data.data?.posts.pageInfo;

    const updatedBlogData = {
      ...blogs,
      edges: updatedEdges,
      pageInfo: updatedPageInfo,
    };
    setBlogs(updatedBlogData);
  };
  const handleInputChange = (event) => {
    if (event.target.value !== "") {
      setKeyword(event.target.value);
      setSearchFlag(true);
    } else {
      setSearchFlag(false);
    }
  };
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (searchFlag) {
      const blogSearch = (await GraphAPI.searchByBlog(keyword)).data.data;
      setSearchBlogs(blogSearch);
    } else {
      setSearchBlogs(null);
    }
  };

  return (
    <main
      className="position-relative prpertyManagement blogMain zindex-2 overflow-hidden"
      id="main"
    >
      <div className="banner_content position-relative">
        <div className="container-xl p-0">
          <div className="row g-0">
            <div className="col-12 col-md-6 ecom__info position-relative">
              <div className="banner_content_detail">
                {blogDetail.blogTitle && <h1>{blogDetail.blogTitle}</h1>}
                {blogDetail.blogSubtitle && (
                  <div className="moji_ttl">
                    <h3>{blogDetail.blogSubtitle}</h3>
                  </div>
                )}
                {blogDetail.blogDescription && (
                  <div className="position-relative">
                    <p>{blogDetail.blogDescription}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="center__bild">
                <img
                  src="../images/fp_profession_copywriting.png"
                  alt="blogBnr"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="demo-container">
        <div className="progress-bar">
          <div className="progress-bar-value"></div>
        </div>
      </div>
      <div className="d-md-none bild-mob">
        <img src="../images/mask_1.png" alt="blogBnr1" />
      </div>

      <div className="article__center">
        <div className="container-xl">
          <div className="row">
            {blogDetail.blogArticle && (
              <div className="col-12 text-center">
                <h2>{blogDetail.blogArticle}</h2>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <form onSubmit={handleSearchSubmit} method="post">
                <div className="input_search">
                  <span>
                    <img
                      src="../images/search-interface-symbol.svg"
                      alt="search"
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {searchBlogs ? (
        <div className="artical__card position-relative">
          <div className="container-xl p-0">
            <div className="row g-xxl-5 g-90">
              {searchBlogs.posts.edges.length ? (
                searchBlogs.posts.edges.map((item, index) => {
                  const date = new Date(item.node.date);
                  const options = {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  };
                  const formattedDate = date.toLocaleDateString(
                    "en-US",
                    options
                  );

                  return (
                    <div
                      className="col-12 col-md-6 col-lg-4 artical__card-col"
                      key={`blog-${index}`}
                    >
                      <Link className="h-100" href={`/blog/${item.node.slug}`}>
                        <div className="card_max_width h-100">
                          <figure className="h-100">
                            <div className="card_max_width_fig h-100">
                              <img
                                className="img-fluid w-100"
                                src={
                                  item.node.postSettings.blogGridImage !== null
                                    ? item.node.postSettings.blogGridImage
                                        .sourceUrl
                                    : "../images/placeholder-1.svg"
                                }
                                alt="blogTemp"
                              />
                            </div>
                            <figcaption>
                              {/* <ul className="list-inline blogs__tag mb-0">
                                {item.node.categories.nodes.length > 0 && (
                                  <li className="list-inline-item">
                                    <span className="special__tag">
                                      <em className="fst-normal">
                                        {item.node.categories.nodes
                                          .map((node) => node.name)
                                          .join(",")}
                                      </em>
                                    </span>
                                  </li>
                                )}
                                {item.node.tags.nodes.length > 0 && (
                                  <li className="list-inline-item">
                                    <span className="normal__tag">
                                      <em className="fst-normal">
                                        {item.node.tags.nodes
                                          .map((node) => node.name)
                                          .join(",")}
                                      </em>
                                    </span>
                                  </li>
                                )}
                              </ul> */}
                              {item.node.title && <h3>{item.node.title}</h3>}
                              <span className="rdmore_btn">Read More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg> </span>
                              {item.node.excerpt && (
                                <div className="d-none" 
                                  dangerouslySetInnerHTML={{
                                    __html: item.node.excerpt,
                                  }}
                                ></div>
                              )}
                              {item.node.postSettings.authorName && (
                                <div className="media__box d-flex align-items-center">
                                  <img
                                    src={
                                      item.node.postSettings.authorImage !==
                                      null
                                        ? item.node.postSettings.authorImage
                                            .sourceUrl
                                        : "../images/logo_icon.png"
                                    }
                                    alt="Media bild"
                                  />
                                  <div className="blog_user">
                                    {item.node.postSettings.authorName}
                                    {/* <span className="d-block w-100">
                                      {formattedDate}
                                    </span> */}
                                  </div>
                                </div>
                              )}
                            </figcaption>
                          </figure>
                        </div>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <p className="not-found">
                  {blogDetail.postNotFoundText
                    ? blogDetail.postNotFoundText
                    : "Posts Not Found!"}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="artical__card position-relative">
          <div className="container-xl p-0">
            <div className="row g-xxl-5 g-90">
              {blogs.edges.map((item, index) => {
                const date = new Date(item.node.date);
                const options = {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                };
                const formattedDate = date.toLocaleDateString("en-US", options);
                return (
                  <div
                    className="col-12 col-md-6 col-lg-4 artical__card-col"
                    key={`blog-${index}`}
                  >
                    <Link className="h-100" href={`/blog/${item.node.slug}`}>
                      <div className="card_max_width h-100">
                        <figure className="h-100">
                          <div className="card_max_width_fig">
                            <img
                              className="img-fluid w-100"
                              src={
                                item.node.postSettings.blogGridImage !== null
                                  ? item.node.postSettings.blogGridImage
                                      .sourceUrl
                                  : "../images/placeholder-1.svg"
                              }
                              alt="blogTemp"
                            />
                          </div>
                          <figcaption>
                            {/* <ul className="list-inline blogs__tag mb-0">
                              {item.node.categories.nodes.length > 0 && (
                                <li className="list-inline-item">
                                  <span className="special__tag">
                                    <em className="fst-normal">
                                      {item.node.categories.nodes
                                        .map((node) => node.name)
                                        .join(",")}
                                    </em>
                                  </span>
                                </li>
                              )}
                              {item.node.tags.nodes.length > 0 && (
                                <li className="list-inline-item">
                                  <span className="normal__tag">
                                    <em className="fst-normal">
                                      {item.node.tags.nodes
                                        .map((node) => node.name)
                                        .join(",")}
                                    </em>
                                  </span>
                                </li>
                              )}
                            </ul> */}
                            {item.node.title && <h3>{item.node.title}</h3>}
                            <span className="rdmore_btn">Read More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg> </span>
                            {item.node.excerpt && (
                              <div className="d-none"
                                dangerouslySetInnerHTML={{
                                  __html: item.node.excerpt,
                                }}
                              ></div>
                            )}
                            {item.node.postSettings.authorName && (
                              <div className="media__box d-flex align-items-center">
                                <img
                                  src={
                                    item.node.postSettings.authorImage !== null
                                      ? item.node.postSettings.authorImage
                                          .sourceUrl
                                      : "../images/logo_icon.png"
                                  }
                                  alt="Media bild"
                                />
                                <div className="blog_user">
                                  {item.node.postSettings.authorName}
                                  {/* <span className="d-block w-100">
                                    {formattedDate}
                                  </span> */}
                                </div>
                              </div>
                            )}
                          </figcaption>
                        </figure>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          {blogs.pageInfo?.hasNextPage && (
            <div className="text-center load__center">
              <button
                className="load__more d-table ms-auto me-auto"
                type="button"
                onClick={handleLoaderMore}
              >
                <span className="rotating">
                  <img src="../images/loaderr.png" alt="loader" />
                </span>
                <h6>Load More </h6>
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
