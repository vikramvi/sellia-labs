import React from 'react';
import Text from 'reusecore/src/elements/Text';
import {
  ListViewWrapper,
  ImageWrapper,
  Image,
  ContentWrap,
  AddressBox,
  TextGroup,
  IconWrapper,
  AddressAndDate,
} from './listView.style';
import Icon from '../Icon';
import Tag, { TagGroup, LabelTag } from '../TagGroup';
import PlaceholderImage from 'core/static/images/thumb-grid-placeholder.svg';

const ListView = props => {
  return (
    <ListViewWrapper>
      <ImageWrapper>
        <Tag
          tagContent={props.condition ? 'New' : 'Used'}
          bgColor={props.condition ? '#00b6ff' : '#30C56D'}
          style={{
            position: 'absolute',
            color: '#fff',
            margin: 5,
            fontSize: 14,
            fontFamily: 'Lato',
            fontWeight: 700,
          }}
        />
        <Image
          src={[props.source, props.fallbackSource]}
          alt={props.title}
          loader={<img src={PlaceholderImage} />}
          unloader={<img src={PlaceholderImage} />}
        />
      </ImageWrapper>

      <ContentWrap>
        <div>
          <Text
            content={props.title}
            as="h3"
            fontSize={18}
            fontWeight={600}
            color="#333333"
          />
          <TagGroup>
            <LabelTag tagContent={`${props.currency} ${props.price}`} />
            {props.negotiable && (
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
        </div>
        <AddressAndDate>
          <AddressBox>
            <IconWrapper>
              <Icon name={props.icon} mr={15} color="#8c8c8c" />
            </IconWrapper>
            <TextGroup>
              {props.location && (
                <Text
                  content={props.location}
                  as="span"
                  fontSize={12}
                  fontWeight={400}
                  lineHeight={1.4}
                  color="#333333"
                  mb="0px"
                />
              )}
              {props.distance && (
                <Text
                  content={props.distance}
                  as="span"
                  fontSize={12}
                  fontWeight={400}
                  color="#8C8C8C"
                  mt="5px"
                />
              )}
            </TextGroup>
          </AddressBox>

          <Text
            content={props.postedTime || 'No Posted Time Found'}
            as="span"
            fontSize={12}
            fontWeight={400}
            color="#8C8C8C"
            mb={0}
            ml={30}
            style={{ flexShrink: 0 }}
          />
        </AddressAndDate>
      </ContentWrap>
    </ListViewWrapper>
  );
};

export default ListView;
