import React, { useContext } from "react";
import Icon from "react-icons-kit";
import { androidLock } from "react-icons-kit/ionicons/androidLock";
import { iosArrowForward } from "react-icons-kit/ionicons/iosArrowForward";
import { iosTelephone } from "react-icons-kit/ionicons/iosTelephone";
import Box from "reusecore/src/elements/Box";
import ProfileSettingInfo from "../../../components/ProfileSettingInfo";
import { ProfileContext } from "../../../contexts/ProfileContext";

export default ({ image, name }) => {
  const { state, dispatch } = useContext(ProfileContext);

  const onToggleClick = (itemSlug) => {
    dispatch({
      type: "UPDATE_FEED_FILTER",
      payload: { key: "categorySlug", value: itemSlug },
    });
  };

  return (
    <Box
      pb={10}
      pt={10}
      borderRadius="3px"
      border="1px solid #e2e2e2"
      style={{ width: "295px", position: "fixed", left: 25 }}
    >
      <ProfileSettingInfo
        avatarImage={image}
        title={name || "My Profile"}
        // description="Edit Profile"
        iconRight={<Icon icon={iosArrowForward} size={18} color="#BABABA" />}
        onClick={() => onToggleClick("edit-profile")}
      />

      {/* Change password section */}
      <ProfileSettingInfo
        title="My Active Posts"
        iconRight={<Icon icon={iosArrowForward} size={18} color="#BABABA" />}
        onClick={() => onToggleClick("change-password")}
        style={{
          backgroundColor: "#3093FF",
          color: "#fff",
          borderRadius: "3px",
        }}
      />

      {/* Email Notification section */}
      <ProfileSettingInfo
        title="My In-Active Posts"
        borderBottom="none"
        iconRight={<Icon icon={iosArrowForward} size={18} />}
        onClick={() => onToggleClick("add-mobile-number")}
        style={{
          backgroundColor: "#FF7946",
          color: "#fff",
          borderRadius: "3px",
        }}
      />
      {/* Deleted Account section */}
    </Box>
  );
  // <Box
  //   pb={10}
  //   pt={10}
  //   borderRadius="3px"
  //   border="1px solid #e2e2e2"
  //   style={{ width: "295px", position: "fixed", left: 20 }}
  // >
  //   <div>
  //     <section
  //       className=""
  //       id="navigation"
  //       tabIndex="0"
  //       aria-label="Navigation menu"
  //     >
  //       <ul className="nav-bar-list">
  //         <li
  //           className="nav-menu-item-li"
  //           onClick={() => {
  //             handleClick("");
  //           }}
  //         >
  //           <a className={"nav-menu-item-link "} href="#">
  //             <svg
  //               className="nav-menu-item-icon css-ec7kfw"
  //               width="20"
  //               height="20"
  //               viewBox="0 0 20 20"
  //               fill="none"
  //               color="#000000"
  //               role="img"
  //             >
  //               <path
  //                 fillRule="evenodd"
  //                 clipRule="evenodd"
  //                 d="M5.529 2.736c-.819 0-1.482.663-1.482 1.482v1.929L1.916 7.453a1.482 1.482 0 00-.49 2.038l1.076 1.756c.271.442.736.692 1.218.707v3.828c0 .819.664 1.482 1.482 1.482h9.602c.819 0 1.482-.663 1.482-1.482v-3.828a1.48 1.48 0 001.212-.707l1.076-1.756a1.482 1.482 0 00-.49-2.038L10.91 3.056A1.478 1.478 0 0010 2.843a1.478 1.478 0 00-.909.213l-.756.463a1.482 1.482 0 00-1.307-.783h-1.5zm-.343 13.053l-.001-.007V9.624l-1.41.864-1.1-1.77 2.836-1.751v-2.75l.001-.006.004-.006.006-.004h1.507a.02.02 0 01.006 0l.006.004a.03.03 0 01.004.006l.001.007v1.808l2.81-1.722 7.472 4.416-.001.003a.025.025 0 01-.002.003l-1.076 1.756-.004.005-.007.003H16.23l-.004-.002-1.403-.86v6.159l-.001.002-.004.006-.006.004H5.202a.02.02 0 01-.006 0l-.006-.004a.031.031 0 01-.004-.006z"
  //                 fill="currentColor"
  //               ></path>
  //             </svg>
  //             <span
  //               className="nav-menu-item-label-refresh css-1y777s2"
  //               data-testid="Home"
  //             >
  //               Home
  //             </span>
  //           </a>
  //         </li>
  //         <div
  //           className="yVnmFve2"
  //           role="presentation"
  //           data-testid="menu-box_container"
  //         ></div>
  //       </ul>
  //       <hr className="nav-bar-hr"></hr>
  //       <div className="nav-bar-section-title" tabIndex="0" aria-label="Groups">
  //         Categories
  //       </div>
  //       <ul className="nav-bar-list">
  //         <li
  //           className="nav-menu-item-li"
  //           onClick={() => handleClick(item.slug)}
  //         >
  //           <a href="#" className={"nav-menu-item-link"}>
  //             <svg
  //               className="nav-menu-item-icon css-ec7kfw"
  //               width="20"
  //               height="20"
  //               viewBox="0 0 20 20"
  //               fill="none"
  //               color="#006344"
  //               role="img"
  //             ></svg>
  //             <span
  //               className="nav-menu-item-label-refresh css-1y777s2"
  //               data-testid="All Groups"
  //             >
  //               My Active Posts
  //             </span>
  //           </a>
  //         </li>

  //         <li
  //           className="nav-menu-item-li"
  //           onClick={() => handleClick(item.slug)}
  //         >
  //           <a href="#" className={"nav-menu-item-link"}>
  //             <svg
  //               className="nav-menu-item-icon css-ec7kfw"
  //               width="20"
  //               height="20"
  //               viewBox="0 0 20 20"
  //               fill="none"
  //               color="#006344"
  //               role="img"
  //             ></svg>
  //             <span
  //               className="nav-menu-item-label-refresh css-1y777s2"
  //               data-testid="All Groups"
  //             >
  //               My In-Active Posts
  //             </span>
  //           </a>
  //         </li>

  //         {/* {categories.map((item) => {
  //         return (
  //           <li
  //             className="nav-menu-item-li"
  //             onClick={() => handleClick(item.slug)}
  //           >
  //             <a href="#" className={"nav-menu-item-link"}>
  //               <svg
  //                 className="nav-menu-item-icon css-ec7kfw"
  //                 width="20"
  //                 height="20"
  //                 viewBox="0 0 20 20"
  //                 fill="none"
  //                 color="#006344"
  //                 role="img"
  //               ></svg>
  //               <span
  //                 className="nav-menu-item-label-refresh css-1y777s2"
  //                 data-testid="All Groups"
  //               >
  //                 {item.name}
  //               </span>
  //             </a>
  //           </li>
  //         );
  //       })} */}
  //       </ul>

  //       <div className="nav-bar-list_global_footer">
  //         <a className="nav-bar-inline-list" href="/privacy_policy/">
  //           Privacy
  //         </a>
  //         <a className="nav-bar-inline-list" href="/member_agreement/">
  //           Terms
  //         </a>
  //         <a
  //           href="/do_not_sell/"
  //           target="_blank"
  //           className="_5Ebo_Fl7 nav-bar-inline-list"
  //         >
  //           Do not sell my personal information
  //         </a>
  //       </div>
  //       <footer className="nav-bar-bottom-nav" tabIndex="0" aria-label="Footer">
  //         <ul className="nav-bar-inline-list">
  //           <li>
  //             <a
  //               className="nav-bar-inline-list-link"
  //               href="/help/"
  //               target="_blank"
  //             >
  //               Help
  //             </a>
  //           </li>

  //           <li>
  //             <a className="nav-bar-inline-list-link" href="/privacy_policy/">
  //               Privacy
  //             </a>
  //           </li>
  //           <li>
  //             <a className="nav-bar-inline-list-link" href="/about_us/">
  //               About
  //             </a>
  //           </li>
  //         </ul>

  //         <div className="nav-bar-copyright">© 2021 Sellia</div>
  //       </footer>
  //     </section>
  //   </div>
  // </Box>
};
