import React from "react";
import styled from "styled-components";
import PortablePic from "../../ultilitys/PortablePic";
import BasicEditor from "../../ultilitys/BasicEditor";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div``;
const CustomerReviewWrapper = styled.div`
  /* keep this */
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.font ? `${props.customtheme.font.mobile}px` : "inherit"};
  color: ${(props) =>
    props.customtheme.font ? props.customtheme.font.fontColor.hex : "inherit"};
  /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? props.customtheme.backgroundColor.hex
      : "inherit"};
  /*Hover Color */
  &:hover {
    background-color: ${(props) =>
      props.customtheme.hoverTheme
        ? props.customtheme.hoverTheme.hoverBackground.hex
        : "inherit"};
    color: ${(props) =>
      props.customtheme.hoverTheme
        ? props.customtheme.hoverTheme.fontHover.hex
        : "inherit"};
  }

  /* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : "inherit"};

  /* Tablet */
  @media only screen and (min-width: 600px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.tablet}px`
        : "inherit"};
  }
  /* Desktop */
  @media only screen and (min-width: 900px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.desktop}px`
        : "inherit"};
  }
`;
const PersonName = styled.h3``;
const PicWrapper = styled.div``;
const Location = styled.p``;
function CustomerReviewAlt({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityCustomerReviewAltTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper>
      {data.testimonialArray.map((customerReviewAlt, i) => {
        return (
          <CustomerReviewWrapper
            customtheme={
              sanity.sanityCustomerReviewAltTheme
                ? sanity.sanityCustomerReviewAltTheme._rawTheme
                : "inherit"
            }
            key={i}
          >
            <PersonName>{customerReviewAlt.personsName}</PersonName>
            <PicWrapper>
              <PortablePic data={customerReviewAlt.pic} />
            </PicWrapper>
            <BasicEditor data={customerReviewAlt.textEditor} />
            <Location>{customerReviewAlt.location}</Location>
          </CustomerReviewWrapper>
        );
      })}
    </Wrapper>
  );
}

export default CustomerReviewAlt;
