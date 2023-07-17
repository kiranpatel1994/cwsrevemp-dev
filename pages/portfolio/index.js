function Portfolio() {
  return (
    <main>
      <section className="am_project">
        <div className="container-xl p-0">
          <div className="row g-0">
            <div className="col-12 text-center">
              <h1>Take a look at our amazing <em>projects</em>. </h1>
            </div>
          </div>

          <div className="nav_mixitup">
            <div className="allProject_box">
              <ul className="list-inline text-center mb-0">
                <li className="list-inline-item active"><a href="#"><span>All projects </span></a> </li>
                <li className="list-inline-item"><a href="#"><span>Website Design & Development </span></a> </li>
                <li className="list-inline-item"><a href="#"><span>Logo Design & Branding </span></a> </li>
                <li className="list-inline-item"><a href="#"><span>UI/UX Design & Web Applications Development </span></a> </li>
                <li className="list-inline-item"><a href="#"><span>Ecommerce </span></a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-contaner overflow-hidden">
          <div className="container-fluid">
            <div className="row g-15">
              <div className="col-12 col-md-6 col-lg-4">
                <a href="#" className="gif_placer">
                  <div className="gif_box">
                    <img className="img-fluid w-100" src="images/placeholder.png" />
                  </div>
                  <div className="">

                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <a href="#" className="gif_placer">
                  <img className="img-fluid w-100" src="images/placeholder.png" />
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <a href="#" className="gif_placer">
                  <img className="img-fluid w-100" src="images/placeholder.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    );
}

export default Portfolio;
