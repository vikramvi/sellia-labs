import Box from 'reusecore/src/elements/Box';
import Card from 'reusecore/src/elements/Card';
import IsAuthenticated from '../hoc/isAuthenticated';
import PageMeta from '../components/PageMeta';
import ForgetPasswordForm from '../containers/ForgetPasswordForm';
import { withApollo } from '../helpers/apollo';
export default withApollo(
  IsAuthenticated(props => (
    <>
      <PageMeta
        title="Forget Your Password?"
        description="Forget Your Password?"
      />
      <Box flexBox justifyContent="center" alignItems="center">
        <Card
          width={470}
          m={['20px 10px', '40px 20px']}
          p={['40px 15px', '40px 80px']}
          boxShadow="0px 0px 35px rgba(0, 0, 0, 0.05)"
        >
          <ForgetPasswordForm history={props.history} />
        </Card>
      </Box>
    </>
  ))
);
