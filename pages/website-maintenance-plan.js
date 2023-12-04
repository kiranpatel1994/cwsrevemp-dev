import GraphAPI from "../services/graphQL";
const WebsiteMaintenance = () => {
  return (
    <>
      <h1>Website Maintenance Plans</h1>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1OHxJWJWYUGeMyAR9deBXLLT"
        publishable-key="pk_live_cnlOmSdLR4yX7Wp8N2RKj4yk"
      ></stripe-pricing-table>
    </>
  );
};

export default WebsiteMaintenance;
