import React from "react";
import { useRouter } from "next/router";
import ProfilePage from "../../containers/Profile";
import withLayout from "../../hoc/withLayout";
import PageMeta from "../../components/PageMeta";
import { withApollo } from "../../helpers/apollo";
import { ProfileProvider } from "../../contexts/ProfileContext";
import Container from "../../components/UiElements/Container/Container";
import Box from "reusecore/src/elements/Box";

export default withApollo(
  withLayout((props) => {
    const {
      query: { username },
    } = useRouter();
    return (
      <>
        <PageMeta title="Profile Page" description="Profile Page" />
        <ProfileProvider>
          <Container>
            <Box flexBox as="main" pt={40} pb={0} pl={0} pr={0}>
              <ProfilePage {...props} username={username} />
            </Box>
          </Container>
        </ProfileProvider>
      </>
    );
  })
);
