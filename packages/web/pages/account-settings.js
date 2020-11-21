import Router, { useRouter } from 'next/router';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Box from 'reusecore/src/elements/Box';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import SecretPage from '../hoc/secretPage';
import withLayout from '../hoc/withLayout';
import PageMeta from '../components/PageMeta';

import { GET_AUTHOR } from 'core/graphql/Author';

import Sidebar from '../containers/AccountSetting/Sidebar';

import EditProfile from '../containers/AccountSetting/EditProfile';

import ChangePassword from '../containers/AccountSetting/ChangePassword';

import AddMobileNumber from '../containers/AccountSetting/AddMobileNumber';
import { withApollo } from '../helpers/apollo';

const AccountSettings = withLayout(({ userId }) => {
  const { data, loading, error } = useQuery(GET_AUTHOR, {
    variables: { id: userId },
  });

  const {
    query: { view },
  } = useRouter();
  if (error) return <div>{error.message}</div>;
  const author = data && data.author ? data.author : {};
  const imageUrl = author && author.image ? author.image.url : '';
  const imageLargeUrl = author && author.image ? author.image.largeUrl : '';
  const handleTabToggle = newTabState => {
    const href = `/account-settings?view=${newTabState}`;
    const as = `/account-settings?view=${newTabState}`;
    Router.push(href, as, { shallow: true });
  };

  return (
    <>
      <PageMeta
        title={
          (view === 'edit-profile' && 'Edit Profile') ||
          (view === 'change-password' && 'Change Password') ||
          (view === 'add-mobile-number' && 'Add mobile number')
        }
        description="Account Settings"
      />
      <Grid style={{ paddingTop: '80px', paddingBottom: '50px' }}>
        <Row>
          <Col xs={12} mdOffset={1} md={10}>
            <Row>
              <Col xs={12} sm={5} md={4}>
                <Sidebar
                  onToggleClick={handleTabToggle}
                  image={[imageUrl, imageLargeUrl]}
                />
              </Col>
              <Col xs={12} sm={7} md={8}>
                <Box
                  pl={[20, 95]}
                  pr={[20, 95]}
                  pb={32}
                  pt={32}
                  borderRadius="3px"
                  border="1px solid #e2e2e2"
                >
                  {view === 'edit-profile' && (
                    <EditProfile
                      author={author}
                      loading={loading}
                      error={error}
                    />
                  )}
                  {view === 'change-password' && <ChangePassword />}
                  {view === 'add-mobile-number' && (
                    <AddMobileNumber
                      author={author}
                      loading={loading}
                      error={error}
                    />
                  )}
                </Box>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>

      <Modal />
    </>
  );
});

export default withApollo(SecretPage(AccountSettings));
