import Card from 'reusecore/src/elements/Card';
import Box from 'reusecore/src/elements/Box';
import AuthHeader from '../components/AuthHeader';
import MobileSignIn from '../containers/MobileSignIn/mobileSIgnIn';
import IsAuthenticated from '../hoc/isAuthenticated';
import PageMeta from '../components/PageMeta';
import { withApollo } from '../helpers/apollo';
export default withApollo(
  IsAuthenticated(props => (
    <>
      <PageMeta title="Sign in with mobile" description="Sign in with mobile" />
      <Box flexBox justifyContent="center" alignItems="center">
        <Card
          width={470}
          m={['20px 10px', '40px 20px']}
          p={['40px 15px', '40px 80px']}
          boxShadow="0px 0px 35px rgba(0, 0, 0, 0.05)"
        >
          <AuthHeader />

          <MobileSignIn history={props.history} />
        </Card>
      </Box>
    </>
  ))
);
