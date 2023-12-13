import GraphAPI from "../services/graphQL";
const WebsiteMaintenance = () => {
  return (
    <>
      <main className="wesite_maintenance position-relative zindex-2">
        <section className="companyBanner questionnaireBanner pb-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-lg-5">
                <h1 className="mb-3 text-center">Website Maintenance Plans</h1>
                <div class="demo-container">
                  <div class="progress-bar">
                    <div class="progress-bar-value"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="maintenance-table">
          <div className="container">
            <script
              async
              src="https://js.stripe.com/v3/pricing-table.js"
            ></script>
            <stripe-pricing-table
              pricing-table-id="prctbl_1OHxJWJWYUGeMyAR9deBXLLT"
              publishable-key="pk_live_cnlOmSdLR4yX7Wp8N2RKj4yk"
            ></stripe-pricing-table>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebsiteMaintenance;
