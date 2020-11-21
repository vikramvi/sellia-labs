import React from 'react';
import styled from 'styled-components';

const TagGroupWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

const Label = styled('span')`
  min-width: 50px;
  height: 33px;
  background-color: #f2a43e;
  border: none;
  border-radius: 5px;
  position: relative;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 32px;
  text-indent: 5px;
  box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.16);
  display: inline-block;
  text-decoration: none;
  transition: background 250ms ease-in-out, transform 150ms ease;
  box-sizing: border-box;
  margin-right: 10px;
  padding-right: 32px;
  padding-left: 10px;
  &:hover,
  &:focus {
    background-color: #ec921d;
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 20px solid #ffffff;
    position: absolute;
    right: -1px;
    top: 0;
    border-radius: 5px 0 0 5px;
  }
`;

const TagWrapper = styled('span')`
  display: inline-block;
  padding: 0 7px;
  height: 22px;
  line-height: 22px;
  border-radius: 3px;
  opacity: 1;
  color: ${props => (props.color ? props.color : '#595959')};
  font-size: ${props => (props.size ? props.size : '12px')};
  background-color: ${props => (props.bg ? props.bg : '#e2e2e2')};
  font-weight: 400;
  cursor: pointer;
`;

const Tag = ({ style, bgColor, size, tagColor, tagContent }) => (
  <TagWrapper style={style} bg={bgColor} size={size} color={tagColor}>
    {tagContent}
  </TagWrapper>
);

export const LabelTag = props => (
  <Label style={props.style}>{props.tagContent}</Label>
);

export const TagGroup = props => (
  <TagGroupWrapper
    marginBottom={props.marginBottom}
    marginTop={props.marginTop}
    style={props.style}
  >
    {props.children}
  </TagGroupWrapper>
);

export default Tag;
