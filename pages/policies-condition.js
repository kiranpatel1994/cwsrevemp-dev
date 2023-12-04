import GraphAPI from "../services/graphQL";
const PoliciesConditions = ({ policySettings }) => {
  return (
    <>
      <h1>Terms & Conditions, Terms of Service, Privacy Policy</h1>
      <div className="privacy-content">{policySettings?.content}</div>
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
