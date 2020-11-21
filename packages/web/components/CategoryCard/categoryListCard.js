import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import PlaceholderImage from 'core/static/images/categoryPlaceholder.svg';

const GridWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
  flex-shrink: 0;
  cursor: pointer;
  padding: 10px 15px 10px 25px;
  // background-color: ${props => props.selected && 'rgba(226,226,226,0.2)'};
  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }
  &:hover {
    background-color: rgba(226, 226, 226, 0.15);
  }
`;

const ImageWrapper = styled('div')`
  width: 50px;
  height: 50px;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  border-radius: 25px;
`;

const GridData = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  overflow: hidden;
`;

const CategoryListCard = ({
  title,
  postNumber,
  source,
  imageStyle,
  selected,
  titleStyle,
  postNumberStyle,
  handleClick,
  ...props
}) => {
  const imgSrc = source ? source : PlaceholderImage;
  const selectedBg =
    selected === true ? 'rgba(226,226,226,0.5)' : 'transparent';
  return (
    <GridWrapper {...props} style={{ backgroundColor: selectedBg }}>
      {imgSrc && (
        <ImageWrapper {...imageStyle}>
          <Image
            src={imgSrc}
            alt={title}
            width="100%"
            height="100%"
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
      )}

      <GridData onClick={handleClick}>
        {title && (
          <Heading
            content={title}
            color="#595959"
            fontSize={16}
            {...titleStyle}
          />
        )}
        {postNumber && (
          <Text
            content={postNumber}
            color="#8C8C8C"
            fontSize={12}
            style={{ margin: 0 }}
            {...postNumberStyle}
          />
        )}
      </GridData>
    </GridWrapper>
  );
};

CategoryListCard.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string,
  postNumber: PropTypes.string,
  imageStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  postNumberStyle: PropTypes.object,
};

CategoryListCard.defaultProps = {
  titleStyle: {
    fontSize: '16px',
    fontWeight: 'normal',
    mb: '0',
    color: '#333333',
  },
};

export default CategoryListCard;
