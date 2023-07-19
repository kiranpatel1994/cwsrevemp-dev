import Link from "next/link";

export default function CompanyDetails({ details, list }) {
  const first_row = list.slice(0, 7);
  const second_row = list.slice(7, 13);
  const third_row = list.slice(13, 20);

  return (
    <>
      <main className="position-relative zindex-2">
        <section className="companyBanner">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 text-center">
                <h1>
                  <em>Built </em> by you. <em>Boosted </em> by us.
                  <img src="/images/preview-22.png" />
                </h1>
                <p
                  className="companysubTitle"
                  dangerouslySetInnerHTML={{
                    __html: details.companySettings.companyTitle,
                  }}
                ></p>
                <p
                  className="banner-information"
                  dangerouslySetInnerHTML={{
                    __html: details.companySettings.companySubtitle,
                  }}
                ></p>
                <div class="demo-container">
                  <div class="progress-bar">
                    <div class="progress-bar-value"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stickyArea">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12">
                  <img
                    className="w-100 img-fluid opacity-50"
                    src="/images/meeting-new.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {details.companySettings.founderBlock && (
          <section className="founderArea">
            <div className="container-xl p-0">
              <div className="row g-36">
                {details.companySettings.founderBlock.map((item, index) => {
                  var adjustMb = "mb-" + (index + 1);

                  return (
                    <div
                      className="col-12 col-md-4 founder-col"
                      key={`founderblock${index}`}
                    >
                      <div className="shapeBox">
                        {item.blockIcon.sourceUrl && (
                          <figure>
                            <img src={item.blockIcon.sourceUrl} />
                          </figure>
                        )}
                        <div className="limboTitle">
                          {item.blockTitle && (
                            <h4 className="mb-1">{item.blockTitle}</h4>
                          )}
                          {item.blockDescription && (
                            <p className={adjustMb}>{item.blockDescription}</p>
                          )}
                          <div className="dhareBoxArrow">
                            <img src="images/downArrow.svg" alt="" />
                          </div>
                          {item.blockTagline && (
                            <em
                              dangerouslySetInnerHTML={{
                                __html: item.blockTagline,
                              }}
                            ></em>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        
        {details.companySettings.aboutFounder && (
          <section className="aboutFounder position-relative zindex-2">
            <div className="container-xl p-0">
              <div className="row g-36">
                <div className="col-12 col-md-4 position-relative pt-5">
                  <div className="founderInfo">
                    <h3>About the Founder </h3>
                  </div>
                </div>
                <div className="col-12 col-md-8 position-relative userContainer pt-4 mt-2">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="headLine"
                        dangerouslySetInnerHTML={{
                          __html: details.companySettings.aboutFounder,
                        }}
                      ></div>
                    </div>
                    <div
                      className="col-lg-12 column-count-2"
                      dangerouslySetInnerHTML={{
                        __html: details.companySettings.founderDescription,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {list && (
          <section className="ourTeam">
            <div className="container-xl">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <h4 className="mb-lg-0">Our team </h4>
                </div>
                <div className="col-lg-8">
                  <div className="subTitle">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: details.companySettings.teamDescription,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row team-section">
                <div className="col-12">
                  <ul className="teamList">
                    {list.map((item, index) => {
                      return (
                        <li key={item.index}>
                          <h2>{item.node.title}</h2>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                item.node.memberSettings.memberDesignation,
                            }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                  {/* first_row && (
                    <ul className="list-inline first-team-row">
                      {first_row.map((item, index) => {
                        return (
                          <li
                            className="list-inline-item"
                            key={`firstRow${index}`}
                          >
                            <div className="col-box av-1 flex-column">
                              <img
                                className="avatar"
                                src={item.node.featuredImage.node.sourceUrl}
                              />
                              <h2>{item.node.title}</h2>
                              <p
                                className="text-black"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    item.node.memberSettings.memberDesignation,
                                }}
                              />
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {second_row && (
                    <ul className="list-inline sec-team-row text-center">
                      {second_row.map((item, index) => {
                        return (
                          <li
                            className="list-inline-item"
                            key={`secondRow${index}`}
                          >
                            <div className="col-box av-1">
                              <img
                                className="avatar"
                                src={item.node.featuredImage.node.sourceUrl}
                              />
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {third_row && (
                    <ul className="list-inline third-team-row">
                      {third_row.map((item, index) => {
                        return (
                          <li
                            className="list-inline-item"
                            key={`thirdRow${index}`}
                          >
                            <div className="col-box av-1">
                              <img
                                className="avatar"
                                src={item.node.featuredImage.node.sourceUrl}
                              />
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    ) */}
                </div>
              </div>
            </div>
          </section>
        )}
        <div className="sngl-title companySnglTitle handAnimation">
          <div className="container-xl h-100">
            <div className="row h-100">
              <div className="col-12 text-center">
                <h3>
                  {/* <span>Ready to supercharge your business? </span> */}
                  <span>
                    Reach out to us at&nbsp;
                    <Link
                      className="text-decoration-none text-black"
                      href="tel:201-212-6367"
                    >
                      201-212-6367
                    </Link>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
