import GraphAPI from "../services/graphQL";
import { useEffect, useState } from "react";
const WebsiteMaintenance = () => {
  const [stripeScriptLoaded, setStripeScriptLoaded] = useState(false);
  useEffect(() => {
    const loadStripeScript = async () => {
      const stripeScript = document.createElement("script");
      stripeScript.src = "https://js.stripe.com/v3/pricing-table.js";
      stripeScript.async = true;
      stripeScript.onload = () => {
        setStripeScriptLoaded(true);
      };
      document.body.appendChild(stripeScript);
    };

    loadStripeScript();

    return () => {
      // Clean up: remove the Stripe script when the component unmounts
      const stripeScript = document.querySelector(
        'script[src="https://js.stripe.com/v3/pricing-table.js"]'
      );
      if (stripeScript) {
        document.body.removeChild(stripeScript);
      }
    };
  }, []);
  return (
    <>
      <main className="wesite_maintenance position-relative zindex-2">
        <section className="companyBanner questionnaireBanner pb-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-lg-5">
                <h1 className="mb-3 text-center">Website Maintenance Plans</h1>
                <div className="demo-container">
                  <div className="progress-bar">
                    <div className="progress-bar-value"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="maintenance-table">
          <div className="container">
            {stripeScriptLoaded ? (
              <stripe-pricing-table
                pricing-table-id="prctbl_1OHxJWJWYUGeMyAR9deBXLLT"
                publishable-key="pk_live_cnlOmSdLR4yX7Wp8N2RKj4yk"
              ></stripe-pricing-table>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default WebsiteMaintenance;
