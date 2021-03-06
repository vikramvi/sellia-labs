import React from "react";
import { Grid } from "react-styled-flexboxgrid";
import styled from "styled-components";
import Box from "reusecore/src/elements/Box";
import Card from "reusecore/src/elements/Card";
import InfoBlocks from "../components/InfoBlock";
import TextSearch from "../containers/Home/TextSearch";
import Feed from "../containers/Home/Feed";
import NearestPost from "../containers/Home/NearestPost";
import CategoryPost from "../containers/Home/Categories";
import withLayout from "../hoc/withLayout";
import PageMeta from "../components/PageMeta";
import { withApollo } from "../helpers/apollo";
import SecretPage from "../hoc/secretPage";
import { FeedProvider } from "../contexts/FeedContext";
import { useRouter } from "next/router";
import Container from "../components/UiElements/Container/Container";
import { Block } from "baseui/block";

// Static Images
import BannerImage from "core/static/images/banner.png";

const InfoBlock = styled(InfoBlocks)`
  @media only screen and (max-width: 767px) {
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 15px;
    }
  }
`;

const bannerStyle = {
  pt: [60, 80],
  pb: [95, 180],
  bg: "#f3f3f3",
  backgroundImage: `url(${BannerImage})`,
  backgroundRepeat: "repeat-x",
  backgroundPosition: "bottom center",
};

const FeedPage = withLayout(({ location, ...props }) => {
  return (
    <>
      <PageMeta
        title="Sellia - Marketplace"
        description="Place where you can buy &amp; sell products"
      />
      <FeedProvider>
        <Container>
          <Box flexBox as="main" pt={40} pb={0} pl={0} pr={0}>
            <Feed {...props} />
          </Box>
        </Container>
      </FeedProvider>
    </>
  );
});

export default withApollo(SecretPage(FeedPage));
