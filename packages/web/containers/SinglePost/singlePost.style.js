import styled from 'styled-components';
import { palette } from 'styled-theme';
import { Carousel as RRCarousel } from 'react-responsive-carousel';
import Text from 'reusecore/src/elements/Text';

const Carousel = styled(RRCarousel)`
  .carousel.carousel-slider .slider-wrapper ul.slider {
    min-height: 590px;
    @media only screen and (max-width: 1200px) {
      min-height: 470px;
    }
    @media only screen and (max-width: 1023px) {
      min-height: 297px;
    }
    @media only screen and (max-width: 480px) {
      min-height: 237px;
    }
  }
  .carousel.carousel-slider .slider-wrapper ul.slider .slide {
    background-color: #e2e2e2;
  }
  .carousel.carousel-slider .control-arrow {
    width: 40px;
    height: 60px;
    top: 50%;
    margin-top: -30px;
    opacity: 0.9;
    background-color: #ffffff;
    border-radius: 3px;
    font-size: 22px;
    padding: 0;

    &.control-prev {
      left: 10px;

      &:before {
        border-right-color: #e2e2e2;
      }
    }

    &.control-next {
      right: 10px;

      &:before {
        border-left-color: #e2e2e2;
      }
    }
  }

  .carousel .thumbs-wrapper {
    margin: 15px 0 0;

    .thumbs {
      padding: 0;
      margin: 0;

      .thumb {
        width: calc(20% - 8px);
        height: 100px;
        box-sizing: border-box;
        padding: 0;
        overflow: hidden;
        border: 0;
        margin-right: 10px;

        @media screen and (min-width: 768px) and (max-width: 1023px) {
          width: calc(33.333% - 6px);
        }

        @media screen and (max-width: 580px) {
          width: calc(33.333% - 6px);
        }

        &.selected {
          border: 0;
          padding: 0;
          border-bottom: 3px solid #30c56d;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .control-next {
      &.control-arrow {
        right: 0;
        width: 40px;
        height: calc(100% - 3px);
        top: 0;
        margin-top: 0;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 0;
      }
    }

    .control-prev {
      &.control-arrow {
        left: 0;
        width: 40px;
        height: calc(100% - 3px);
        top: 0;
        margin-top: 0;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 0;
      }
    }
  }
`;

const DescriptionWrapper = styled('div')`
  padding: 20px 35px;
`;

const InfoBoxWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;
  ${'' /* padding: 20px 35px; */};
`;
const PricingSection = styled('div')`
  background-color: #f8f8f8;
  padding: 10px 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const AlignCenterWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const PriceTag = styled('div')`
  padding: 10px;
  background-color: #ffedd6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
`;

const TagName = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  color: ${palette('text', 0)};
`;

const TagBullet = styled('div')`
  width: 10px;
  height: 10px;
  display: flex;
  border-radius: 10px;
  background-color: #f2a43e;
  flex-shrink: 0;
  margin-right: 10px;
`;

const GridPostsHolder = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -8px;
  padding: 0 35px;
`;

const SectionWrapper = styled('div')`
  padding: 50px 0;
`;

export {
  DescriptionWrapper,
  AlignCenterWrapper,
  PriceTag,
  TagName,
  TagBullet,
  PricingSection,
  InfoBoxWrapper,
  GridPostsHolder,
  Carousel,
  SectionWrapper,
};
