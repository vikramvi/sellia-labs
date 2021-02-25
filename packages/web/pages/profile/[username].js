import React from "react";
import { useRouter } from "next/router";
import ProfilePage from "../../containers/Profile";
import withLayout from "../../hoc/withLayout";
import PageMeta from "../../components/PageMeta";
import { withApollo } from "../../helpers/apollo";
import Sidebar from "../../containers/Profile/Sidebar";
import Box from "reusecore/src/elements/Box";

export default withApollo(
  withLayout((props) => {
    const {
      query: { username },
    } = useRouter();
    return (
      <>
        <PageMeta title="Profile Page" description="Profile Page" />

        <ProfilePage {...props} username={username} />
      </>
    );
  })
);
