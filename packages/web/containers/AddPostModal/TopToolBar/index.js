import React from "react";
import Icon from "react-icons-kit";
import { androidClose } from "react-icons-kit/ionicons/androidClose";
import Button from "reusecore/src/elements/Button";
import Heading from "reusecore/src/elements/Heading";
import Box from "reusecore/src/elements/Box";

const TopToolBar = ({ onClose }) => (
  <>
    <Box
      style={{ backgroundColor: "blue", height: "70px" }}
      flexBox
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading
        content="I am looking.."
        mb={0}
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: "#FFFFFF",
          marginLeft: "20px",
        }}
      />

      <Button
        icon={<Icon icon={androidClose} size={24} color="#FFFFFF" />}
        variant="textButton"
        onClick={onClose}
        style={{
          color: "#FFFFFF",
        }}
      />
    </Box>
  </>
);

export default TopToolBar;
