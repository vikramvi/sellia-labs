import React from "react";
import Icon from "react-icons-kit";
import { androidLock } from "react-icons-kit/ionicons/androidLock";
import { iosArrowForward } from "react-icons-kit/ionicons/iosArrowForward";
import { iosTelephone } from "react-icons-kit/ionicons/iosTelephone";
import Box from "reusecore/src/elements/Box";
import ProfileSettingInfo from "../../../components/ProfileSettingInfo";

export default ({ image, name, onToggleClick }) => (
  <Box
    pb={10}
    pt={10}
    borderRadius="3px"
    border="1px solid #e2e2e2"
    style={{ width: "295px", position: "fixed", right: 25 }}
  >
    {/* Change password section */}
    <ProfileSettingInfo
      title="Change Password"
      avatarIcon={<Icon icon={androidLock} size={18} />}
      // onClick={() => onToggleClick("change-password")}
      style={{
        backgroundColor: "#3093FF",
        color: "#fff",
        borderRadius: "3px",
      }}
    />

    {/* Email Notification section */}
    <ProfileSettingInfo
      title="Mobile Numbers"
      borderBottom="none"
      avatarIcon={<Icon icon={iosTelephone} size={21} />}
      // onClick={() => onToggleClick("add-mobile-number")}
      style={{
        backgroundColor: "#FF7946",
        color: "#fff",
        borderRadius: "3px",
      }}
    />
    {/* Deleted Account section */}
  </Box>
);
