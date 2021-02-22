import isAuthorized from "../../../hoc/isAuthorized";
import { useMutation } from "@apollo/react-hooks";
import { HANDLE_FAV } from "core/graphql/Mutations";
import AuthHelper from "../../../helpers/authHelper";
import DropdownMenu from "../../DropdownMenu";
import { more } from "react-icons-kit/ionicons/more";
import Button from "reusecore/src/elements/Button";
import Icon from "react-icons-kit";
import NotAuthorizeModal from "../NotAuthorizeModal";

const FeedPostCardAction = (props) => {
  const { isVerified } = props;

  const [handleFavMutation] = useMutation(HANDLE_FAV);

  const handleFavourite = async (postID) => {
    console.log("postID -", postID, userId);

    // setBtnLoading(true);
    const isLoggedIn = true;
    if (isLoggedIn) {
      await AuthHelper.refreshToken();
    }
    console.log("handleFav IN 1");
    if (isLoggedIn) {
      try {
        console.log("handleFav IN 2");
        const { data } = await handleFavMutation({
          variables: {
            fav: {
              id: userId,
              postId: postID,
            },
          },
        });
        console.log("handleFav IN 3");
        userNewFavList =
          data &&
          data.handleFav &&
          data.handleFav.data &&
          data.handleFav.data.length
            ? data.handleFav.data
            : [];
        if (userFav.length !== userNewFavList.length) {
          setUserfav(userNewFavList);
        }
        // setBtnLoading(false);
      } catch (error) {
        // setBtnLoading(false);
      }
    } else {
      // setBtnLoading(false);
      // SHOW MODAL
      openModal({
        config: {
          disableDragging: false,
          minHeight: "auto",
          width: "auto",
          height: "auto",
          enableResizing: false,
          disableDragging: true,
          transition: {
            tension: 150,
          },
        },
        springStyle: {
          backgroundColor: "#ffffff",
          overflowY: "auto",
        },
        modalClass: "customModal",
        closeOnClickOutside: true,
        component: LoginModal,
        componentProps: {},
      });
    }
  };

  const dropDownOptions = () => {
    let options = [];

    {
      props.isLoggedIn &&
        props.authorId &&
        props.userId === props.authorId &&
        props.postStatus === "publish" &&
        options.push(
          <Button
            title="Edit Listing"
            iconPosition="left"
            variant="textButton"
            style={{
              float: "right",
            }}
            // onClick={() => Router.push(`${ADD_POST}/${postData.id}`)}
            onClick={() => handleEditPost(id)}
          />
        );
    }

    {
      props.postStatus === "publish" &&
        options.push(
          <Button
            title="Mark Favourite"
            iconPosition="left"
            variant="textButton"
            style={{
              float: "right",
            }}
            // onClick={() => Router.push(`${ADD_POST}/${postData.id}`)}
            onClick={() =>
              isVerified ? handleFavourite(id) : NotAuthorizeModal()
            }
          />
        );
    }

    options.push(
      <Button
        title="Report Spam"
        iconPosition="left"
        variant="textButton"
        style={{
          float: "right",
        }}
        // onClick={() => Router.push(`${ADD_POST}/${postData.id}`)}
        // onClick={() => handleEditPost(id)}
      />
    );

    return options;
  };

  return (
    <DropdownMenu
      content={<Icon icon={more} size={30} color="#595959" />}
      dropdownDirection="right"
      dropdownItems={dropDownOptions()}
    />
  );
};

export default isAuthorized(FeedPostCardAction);
