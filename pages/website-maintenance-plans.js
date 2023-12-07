import GraphAPI from "../services/graphQL";
const WebsiteMaintenance = () => {
  return (
    <>
      <main className="wesite_maintenance">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-3 text-center">Website Maintenance Plans</h1>
            </div>
          </div>
        </div>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table
          pricing-table-id="prctbl_1OHxJWJWYUGeMyAR9deBXLLT"
          publishable-key="pk_live_cnlOmSdLR4yX7Wp8N2RKj4yk"
        ></stripe-pricing-table>
      </main>
    </>
  );
};

export default WebsiteMaintenance;
