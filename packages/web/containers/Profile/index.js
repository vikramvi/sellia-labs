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
import UserListing from "./userListing";
import FavouriteListing from "./userFavourite";
import UserDraftPost from "./userDraft";
import UserSoldPost from "./userSold";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import ProfileView from "../Profile/EditProfile";
import { GET_AUTHOR } from "core/graphql/Author";

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

  console.log("data sold ->", data && data.author.sold);

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
    <Box flexBox flexDirection="row" justifyContent="center">
      <LeftSidebar />

      <Box style={{ width: "50%" }}>
        {/* <div style={{ paddingTop: 70 }}>
          <UserInformation
            source={[imageUrl, imageLargeUrl]}
            imgWidth="120px"
            imgHeight="120px"
            imgRadius={85}
            informationStyle={{
              marginLeft: 30,
              width: "auto",
            }}
            author={id}
            userId={userId}
            authorId={id}
            title={name}
            titleStyle={{
              display: "block",
              color: "#333333",
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: "10px",
              lineHeight: "22px",
              textTransform: "capitalize",
            }}
            addressIcon={<IoIosPin size={21} />}
            address={address}
            websiteIcon={<IoIosGlobe size={20} />}
            website={website}
            phoneIcon={<IoIosCall size={20} />}
            phoneNumber={authorNumber}
          />
        </div> */}

        {/* Profile page tab */}
        {/* <div style={{ paddingTop: 60 }}>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <TabButtons
              menuIcon={
                <span
                  style={{
                    color:
                      tabStates.tabState === "postlist" ? "#333333" : "#8C8C8C",
                    marginRight: 7,
                  }}
                >
                  <IoIosPaper size={18} />
                </span>
              }
              iconPosition="left"
              menuText="Published"
              menuTextColor={
                tabStates.tabState === "postlist" ? "#333333" : "#8C8C8C"
              }
              count={posts && posts.total ? posts.total : 0}
              onClick={handleTabToggle.bind(this, "postlist")}
              style={{
                marginRight: 50,
                display: "inline-flex",
                marginBottom: 15,
              }}
            />

            <TabButtons
              menuIcon={
                <span
                  style={{
                    color:
                      tabStates.tabState === "favorite" ? "#333333" : "#8C8C8C",
                    marginRight: 7,
                  }}
                >
                  <IoIosHeart size={18} />
                </span>
              }
              iconPosition="left"
              menuText="Favourite"
              menuTextColor={
                tabStates.tabState === "favorite" ? "#333333" : "#8C8C8C"
              }
              count={favouritePostCount}
              onClick={handleTabToggle.bind(this, "favorite")}
              style={{
                marginRight: 50,
                display: "inline-flex",
                marginBottom: 15,
              }}
            />

            {userId && userId === id ? (
              <Fragment>
                <TabButtons
                  menuIcon={
                    <span
                      style={{
                        color:
                          tabStates.tabState === "draft"
                            ? "#333333"
                            : "#8C8C8C",
                        marginRight: 7,
                      }}
                    >
                      <IoMdArchive size={18} />
                    </span>
                  }
                  iconPosition="left"
                  menuText="Drafts"
                  menuTextColor={
                    tabStates.tabState === "draft" ? "#333333" : "#8C8C8C"
                  }
                  count={draftPostCount}
                  onClick={handleTabToggle.bind(this, "draft")}
                  style={{
                    marginRight: 50,
                    display: "inline-flex",
                    marginBottom: 15,
                  }}
                />
                <TabButtons
                  menuIcon={
                    <span
                      style={{
                        color:
                          tabStates.tabState === "sold" ? "#333333" : "#8C8C8C",
                        marginRight: 7,
                      }}
                    >
                      <IoMdArchive size={18} />
                    </span>
                  }
                  iconPosition="left"
                  menuText="Sold"
                  menuTextColor={
                    tabStates.tabState === "sold" ? "#333333" : "#8C8C8C"
                  }
                  count={soldPostCount}
                  onClick={handleTabToggle.bind(this, "sold")}
                  style={{
                    marginRight: 50,
                    display: "inline-flex",
                    marginBottom: 15,
                  }}
                />
              </Fragment>
            ) : null}
          </div>
        </div> */}

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

      <RightSidebar />
    </Box>
  );
}

export default Profile;
