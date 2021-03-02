import React, { Fragment, useState, useContext } from "react";
import Error from "next/error";
import { Grid, Row } from "react-styled-flexboxgrid";
import Box from "reusecore/src/elements/Box";

import {
  IoIosPaper,
  IoIosHeart,
  IoMdArchive,
  IoIosCall,
  IoIosPin,
  IoIosGlobe,
} from "react-icons/io";
import { ProfileAvatarLoader } from "../../components/Placeholder";
import { useQuery } from "@apollo/react-hooks";
import { GET_PROFILE_INFO } from "core/graphql/Profile.query";

import UserInformation from "../../components/UserInfoBox";
import TabButtons from "../../components/TabView";
import Container from "../../components/UiElements/Container/Container";

import UserListing from "./userListing";
import FavouriteListing from "./userFavourite";
import UserDraftPost from "./userDraft";
import UserSoldPost from "./userSold";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import ProfileView from "../Profile/EditProfile";
import { GET_AUTHOR } from "core/graphql/Author";
import { CategoriesWrapper, Holder, Col, SideDrawerInner } from "./style";

import { ProfileContext } from "../../contexts/ProfileContext";

function Profile({ username, userId }) {
  if (!username) {
    return <Error statusCode="404" />;
  }

  console.log("Profile ..");

  const { state, dispatch } = useContext(ProfileContext);

  console.log("state.feedFilter.categorySlug", state.feedFilter.categorySlug);

  const [tabStates, setTabState] = useState({
    tabState: "postlist",
  });

  const handleTabToggle = (tabState) => {
    setTabState({
      tabState: tabState,
    });
  };

  const QUERY_VARIABLES = {
    USERNAME: username,
    limit: 12,
  };

  const { data: authorData } = useQuery(GET_AUTHOR, {
    variables: { id: userId },
  });
  const author = authorData && authorData.author ? authorData.author : {};

  const { data, loading, error, fetchMore } = useQuery(GET_PROFILE_INFO, {
    variables: QUERY_VARIABLES,
  });

  if (error) return <p>{error.message}</p>;
  if (loading)
    return (
      <div style={{ height: "170px", width: "400px" }}>
        <ProfileAvatarLoader />
      </div>
    );

  const soldPostCount =
    data && data.author && data.author.sold ? data.author.sold.total : 0;

  const favouritePostCount =
    data && data.author && data.author.favourite
      ? data.author.favourite.total
      : 0;

  const draftPostCount =
    data && data.author && data.author.draft ? data.author.draft.total : 0;

  const authorNumber =
    data && data.author && data.author.mobile && data.author.mobile[0]
      ? data.author.mobile[0].number
      : "";
  const imageUrl =
    data && data.author && data.author.image ? data.author.image.url : "";
  const imageLargeUrl =
    data && data.author && data.author.image ? data.author.image.largeUrl : "";
  const { id, name, posts, address, website } = data.author;
  return (
    <Grid>
      <Row>
        <Col xs={0} sm={5} md={2}>
          <LeftSidebar />
        </Col>

        <Col xs={12} sm={12} md={6}>
          <Box>
            <div style={{ paddingBottom: 80, paddingTop: 10 }}>
              <Row>
                {/* Tab conetnt */}
                {state.feedFilter.categorySlug === "profile" ? (
                  <ProfileView author={author} />
                ) : null}
                {state.feedFilter.categorySlug === "postlist" ? (
                  <UserListing userId={userId} />
                ) : null}
                {state.feedFilter.categorySlug === "favorite" ? (
                  <FavouriteListing userId={userId} />
                ) : null}
                {state.feedFilter.categorySlug === "draft" && userId === id ? (
                  <UserDraftPost userId={userId} />
                ) : null}

                {state.feedFilter.categorySlug === "sold" && userId === id ? (
                  <UserSoldPost userId={userId} />
                ) : null}
              </Row>
            </div>
          </Box>
        </Col>

        <Col xs={0} sm={5} md={2}>
          <RightSidebar />
        </Col>
      </Row>
    </Grid>
  );
}

export default Profile;
