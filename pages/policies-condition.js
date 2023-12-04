import GraphAPI from "../services/graphQL";
const PoliciesConditions = ({ policySettings }) => {
  
  return (
    <>
    <main className="p_condition">
      <div className="condition-section">
        <div className="c_page_title">
            <h2 className="mb-4">Terms & Conditions, Terms of Service, <br/> Privacy Policy</h2>
        </div>
      </div>
      <div className="container p-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="privacy-content" dangerouslySetInnerHTML={{ __html: policySettings?.content, }}>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default PoliciesConditions;

export async function getStaticProps() {
  const policyData = await GraphAPI.policySettings();
  return {
    props: {
      policySettings: policyData.data?.data?.pageBy,
    },
  };
}
