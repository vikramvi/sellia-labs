import React from "react";
import Logo from "../Logo";
import Box from "reusecore/src/elements/Box";
import Heading from "reusecore/src/elements/Heading";
import Text from "reusecore/src/elements/Text";

import logoImage from "core/static/images/headless-logo.svg";

const AuthHeader = ({ image, title, description, ...props }) => (
  <Box {...props}>
    {image && <Logo {...image} />}
    {title && (
      <Heading
        {...title}
        style={{
          marginTop: 20,
          textAlign: "center",
          fontWeight: 600,
        }}
      />
    )}
    {description && (
      <Text
        {...description}
        style={{
          textAlign: "center",
          lineHeight: "1.5",
        }}
      />
    )}
  </Box>
);

AuthHeader.defaultProps = {
  mb: "50px",
  image: {
    logoSrc: logoImage,
    title: "Headless Logo",
    auto: true,
  },
  title: {
    content: "Welcome to Sellia",
  },
  description: {
    content:
      "World’s largest advertising platform. Advertising was never been so easy.",
  },
};
export default AuthHeader;
