import Card from 'reusecore/src/elements/Card';
import Box from 'reusecore/src/elements/Box';
import IsAuthenticated from '../hoc/isAuthenticated';
import SignUpForm from '../containers/SignUpForm';
import PageMeta from '../components/PageMeta';
import { withApollo } from '../helpers/apollo';
function SignUp({ history }) {
  return (
    <>
      <PageMeta title="Sign Up" description="Sign Up" />
      <Box flexBox justifyContent="center" alignItems="center">
        <Card
          width={470}
          m={['20px 10px', '40px 20px']}
          p={['40px 15px', '40px 80px']}
          boxShadow="0px 0px 35px rgba(0, 0, 0, 0.05)"
        >
          <SignUpForm history={history} />
        </Card>
      </Box>
    </>
  );
}

export default withApollo(IsAuthenticated(SignUp));
