import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Tag, { TagGroup, LabelTag } from '../../../components/TagGroup';
import { openModal } from '@redq/reuse-modal';
import ShareModal from '../../ModalContainer/ShareModal';
import LoginModal from '../../ModalContainer/LoginModal';
import ContactInfoModal from '../../ModalContainer/ContactInfoModal';
import { CURRENCY } from '../../../Config';
import { useMutation } from '@apollo/react-hooks';
import { HANDLE_FAV } from 'core/graphql/Mutations';
import AuthHelper from '../../../helpers/authHelper';
import AddressBox from '../../../components/AddressBox';
import Text from 'reusecore/src/elements/Text';
import Icon from '../../../components/Icon';
import Button from 'reusecore/src/elements/Button';
import InfoBox from '../../../components/UserInfoBox';
import ReadMore from '../../../components/Truncate';

import { ADD_POST, SINGLE_CATEGORY_PAGE } from 'core/navigation/constant';

import {
  DescriptionBlock,
  AlignCenterWrapper,
  InfoBoxWrapper,
  ButtonWrapper,
} from './description.style';

const timeFormatAMPM = date => {
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};
const Description = ({ postData, isLoggedIn, userId }) => {
  let userFavList = [];
  let userNewFavList = [];
  let publishTime = '';
  const [btnLoading, setBtnLoading] = useState(false);
  const favouritedBy =
    postData && postData.favouritedBy ? postData.favouritedBy : [];
  const contactNumber =
    postData && postData.contactNumber ? postData.contactNumber : '';
  const authorImage =
    postData.author && postData.author.image && postData.author.image.url
      ? postData.author.image.url
      : null;
  const authorFallbackImage =
    postData.author && postData.author.image && postData.author.image.largeUrl
      ? postData.author.image.largeUrl
      : null;

  if (favouritedBy.includes(userId)) {
    userFavList.push({ id: postData.id });
  }
  const [userFav, setUserfav] = useState(userFavList);
  const isFavourite = (id, favList) => {
    const favItem = favList.filter(item => item.id === id);
    if (favItem.length) {
      return true;
    }
    return false;
  };
  const isFav = isFavourite(postData.id, userFav);

  const handleFavMutation = useMutation(HANDLE_FAV, {
    variables: {
      fav: {
        id: userId,
        postId: postData.id,
      },
    },
  });
  const handleFavourite = async () => {
    setBtnLoading(true);
    if (isLoggedIn) {
      await AuthHelper.refreshToken();
    }
    if (isLoggedIn) {
      try {
        const { data } = await handleFavMutation();
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
        setBtnLoading(false);
      } catch (error) {
        setBtnLoading(false);
      }
    } else {
      setBtnLoading(false);
      // SHOW MODAL
      openModal({
        config: {
          disableDragging: false,
          minHeight: 'auto',
          width: 'auto',
          height: 'auto',
          enableResizing: false,
          disableDragging: true,
          transition: {
            tension: 150,
          },
        },
        springStyle: {
          backgroundColor: '#ffffff',
          overflowY: 'auto',
        },
        modalClass: 'customModal',
        closeOnClickOutside: true,
        component: LoginModal,
        componentProps: {},
      });
    }
  };
  if (postData && postData.createdAt && postData.createdAt.seconds) {
    const timeCalculation = new Date(postData.createdAt.seconds * 1000);
    publishTime = timeFormatAMPM(timeCalculation);
  } else if (postData && postData.createdAt && postData.createdAt._seconds) {
    const timeCalculation = new Date(postData.createdAt._seconds * 1000);
    publishTime = timeFormatAMPM(timeCalculation);
  }
  const adsCategory = (category, index) => {
    return (
      <Link
        key={index}
        href={{
          pathname: `${SINGLE_CATEGORY_PAGE}/${category.slug}`,
          state: {
            termId: category.id,
          },
        }}
      >
        <a>
          <Tag tagContent={category.name} style={{ marginRight: 10 }} />
        </a>
      </Link>
    );
  };
  return (
    <Fragment>
      <Text
        content={postData.title}
        as="span"
        fontSize={18}
        fontWeight={600}
        color="#333333"
      />
      <TagGroup marginBottom="25px" style={{ marginTop: 25, width: '100%' }}>
        <LabelTag tagContent={`${CURRENCY} ${postData.price}`} />
        {postData.isNegotiable && (
          <Text
            content="Negotiable"
            as="span"
            fontSize={14}
            fontWeight={400}
            color="#595959"
            mb={0}
          />
        )}
      </TagGroup>
      {postData && postData.distance ? (
        <AddressBox
          distance={
            postData.distance
              ? `Approximately ${Math.floor(postData.distance)} km away`
              : ''
          }
          location={
            postData.formattedLocation
              ? postData.formattedLocation.formattedAddress
              : ''
          }
          style={{ marginBottom: '20px' }}
        />
      ) : (
        <p />
        // <p>Please Enable your location to get distance</p>
      )}

      <Button
        iconPosition="left"
        title="Show Contact"
        bg="#30C56D"
        style={{ marginBottom: 38, width: '100%' }}
        icon={<Icon name="ios-call" fontSize={19} color="#fff" mr={10} />}
        onClick={() =>
          openModal({
            config: {
              disableDragging: false,
              className: 'contactModal',
              width: 'auto',
              height: 'auto',
              enableResizing: false,
              disableDragging: true,
              transition: {
                tension: 150,
              },
            },
            closeOnClickOutside: true,
            component: ContactInfoModal,
            componentProps: {
              data: {
                contactNumber: contactNumber,
              },
            },
          })
        }
      />
      <InfoBoxWrapper>
        <InfoBox
          imgWidth="45px"
          imgHeight="45px"
          imgRadius={30}
          source={[authorImage, authorFallbackImage]}
          title={
            postData && postData.author && postData.author.name
              ? postData.author.name
              : ''
          }
          author={postData.authorId}
          postedTime={publishTime !== '' ? `Ad posted at ${publishTime}` : ''}
          style={{
            flexGrow: 1,
          }}
        />

        <ButtonWrapper style={{ flexGrow: 0 }}>
          <Button
            variant="outlined"
            icon={<Icon name="ios-share-alt" fontSize={18} color="#8C8C8C" />}
            height={40}
            width={40}
            className="outlineButton"
            style={{
              marginRight: 10,
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#e2e2e2',
              minHeight: 'auto',
              minWidth: 'auto',
            }}
            onClick={() =>
              openModal({
                config: {
                  disableDragging: false,
                  className: 'shareModal',
                  width: 'auto',
                  height: 'auto',
                  enableResizing: false,
                  disableDragging: true,
                  transition: {
                    tension: 150,
                  },
                },
                withRnd: false,
                closeOnClickOutside: true,
                component: ShareModal,
                componentProps: {
                  data: {
                    author: postData.author.name,
                    link: process.browser ? window.location.href : null,
                    title: postData.title,
                  },
                },
              })
            }
          />

          <Button
            variant="outlined"
            className="outlineButton"
            isLoading={btnLoading}
            icon={
              <Icon
                name="ios-heart"
                fontSize={18}
                color={isFav ? '#30C56D' : '#8C8C8C'}
              />
            }
            height={40}
            width={40}
            style={{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: isFav ? '#30C56D' : '#e2e2e2',
              minHeight: 'auto',
              minWidth: 'auto',
              padding: 0,
            }}
            onClick={handleFavourite}
          />
        </ButtonWrapper>
      </InfoBoxWrapper>
      <Text
        content="Description"
        fontSize={16}
        fontFamily="Poppins"
        fontWeight={600}
        color="#333333"
        mb={15}
        style={{ display: 'inline-block' }}
      />
      {postData && (
        <Tag
          bgColor={postData.condition ? '#00b6ff' : '#30C56D'}
          tagContent={postData.condition ? 'New' : 'Used'}
          size="14px"
          tagColor="#ffffff"
          style={{
            marginLeft: 15,
            fontWeight: 700,
          }}
        />
      )}
      <AlignCenterWrapper style={{ marginBottom: 15 }}>
        <DescriptionBlock>
          <ReadMore character={150}>{postData.content}</ReadMore>
        </DescriptionBlock>
      </AlignCenterWrapper>
      <AlignCenterWrapper style={{ marginTop: 25, marginBottom: 25 }}>
        {postData.categories && postData.categories.length
          ? postData.categories.map(adsCategory)
          : null}
      </AlignCenterWrapper>

      {isLoggedIn && postData.authorId && userId === postData.authorId ? (
        <Button
          title="Edit"
          variant="textButton"
          style={{
            minHeight: 'auto',
            minWidth: 'auto',
          }}
          onClick={() => Router.push(`${ADD_POST}/${postData.id}`)}
        />
      ) : null}
    </Fragment>
  );
};

export default Description;
