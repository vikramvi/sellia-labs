import React from "react";
import { Grid } from "react-styled-flexboxgrid";
import styled from "styled-components";
import Box from "reusecore/src/elements/Box";
import Card from "reusecore/src/elements/Card";
import InfoBlocks from "../components/InfoBlock";
import TextSearch from "../containers/Home/TextSearch";
import RecentPost from "../containers/Home/RecentPost";
import NearestPost from "../containers/Home/NearestPost";
import CategoryPost from "../containers/Home/Categories";
import withLayout from "../hoc/withLayout";
import PageMeta from "../components/PageMeta";
import { withApollo } from "../helpers/apollo";
import SecretPage from "../hoc/secretPage";

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
      <Card as="section" {...bannerStyle}>
        <Grid style={{ padding: 0 }}>
          <InfoBlock
            className="banner-infoblock"
            title="Sellia - Market place for Professionals"
            description="Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more around the world. Easily post your Ad and share the Ad in any social media. 🎁"
            textAlign="center"
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
          />
          {/* <TextSearch /> */}
          <CategoryPost />
        </Grid>
      </Card>

      <Box as="section" pt={60} pb={0}>
        <Grid>
          <RecentPost />
        </Grid>
      </Box>

      <Box as="section" pt={60} pb={40}>
        <Grid>
          <NearestPost location={location} />
        </Grid>
      </Box>
    </>
  );
});

export default withApollo(SecretPage(FeedPage));
