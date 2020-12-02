import Card from "reusecore/src/elements/Card";
import Box from "reusecore/src/elements/Box";
import IsAuthenticated from "../hoc/isAuthenticated";
import SignUpVerificationForm from "../containers/SignUpVerificationForm";
import PageMeta from "../components/PageMeta";
import { withApollo } from "../helpers/apollo";
function SignUpVerification({ history }) {
  return (
    <>
      <PageMeta title="Sign Up" description="Sign Up" />
      <Box flexBox justifyContent="center" alignItems="center">
        <Card
          width={470}
          m={["20px 10px", "40px 20px"]}
          p={["40px 15px", "40px 80px"]}
          boxShadow="0px 0px 35px rgba(0, 0, 0, 0.05)"
        >
          <SignUpVerificationForm history={history} />
        </Card>
      </Box>
    </>
  );
}

export default withApollo(IsAuthenticated(SignUpVerification));
