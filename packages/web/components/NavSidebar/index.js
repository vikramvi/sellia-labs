import React from "react";
import Button from "reusecore/src/elements/Button";
import Logo from "../Logo";
import Search from "../Search";
import Menu from "../Menu";
import { NavSidebarWrapper } from "./style";
import logoImg from "core/static/images/headless-logo.svg";
import { SEARCH_PAGE } from "core/navigation/constant";
import "./style.css";

const NavSidebar = ({
  onToggle,
  userId,
  isLoggedIn,
  logout,
  buttonIcon,
  menuButtonIcon,
  dropdownMenuIcon,
  pathname,
  avatar,
}) => {
  return (
    <NavSidebarWrapper>
      <div>
        <section
          className="nav-bar"
          id="navigation"
          tabIndex="0"
          aria-label="Navigation menu"
        >
          <ul className="nav-bar-list">
            <li className="nav-menu-item-li">
              <a
                className="nav-menu-item-link nav-bar-list-item-active"
                href="/news_feed/"
              >
                <svg
                  className="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M5.529 2.736c-.819 0-1.482.663-1.482 1.482v1.929L1.916 7.453a1.482 1.482 0 00-.49 2.038l1.076 1.756c.271.442.736.692 1.218.707v3.828c0 .819.664 1.482 1.482 1.482h9.602c.819 0 1.482-.663 1.482-1.482v-3.828a1.48 1.48 0 001.212-.707l1.076-1.756a1.482 1.482 0 00-.49-2.038L10.91 3.056A1.478 1.478 0 0010 2.843a1.478 1.478 0 00-.909.213l-.756.463a1.482 1.482 0 00-1.307-.783h-1.5zm-.343 13.053l-.001-.007V9.624l-1.41.864-1.1-1.77 2.836-1.751v-2.75l.001-.006.004-.006.006-.004h1.507a.02.02 0 01.006 0l.006.004a.03.03 0 01.004.006l.001.007v1.808l2.81-1.722 7.472 4.416-.001.003a.025.025 0 01-.002.003l-1.076 1.756-.004.005-.007.003H16.23l-.004-.002-1.403-.86v6.159l-.001.002-.004.006-.006.004H5.202a.02.02 0 01-.006 0l-.006-.004a.031.031 0 01-.004-.006z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span
                  className="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Home"
                >
                  Home
                </span>
              </a>
            </li>
            <div
              className="yVnmFve2"
              role="presentation"
              data-testid="menu-box_container"
            ></div>
          </ul>
          <hr className="nav-bar-hr"></hr>
          <div
            className="nav-bar-section-title"
            tabIndex="0"
            aria-label="Groups"
          >
            Categories
          </div>
          <ul className="nav-bar-list">
            <li className="nav-menu-item-li">
              <a href="/groups/?is=nav_menu" className="nav-menu-item-link ">
                <svg
                  className="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#006344"
                  role="img"
                ></svg>
                <span
                  className="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="All Groups"
                >
                  Motor Cycle
                </span>
              </a>
            </li>

            <li className="nav-menu-item-li">
              <a href="/category/car" className="nav-menu-item-link ">
                <svg
                  className="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#006344"
                  role="img"
                ></svg>
                <span
                  className="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="All Groups"
                >
                  Car
                </span>
              </a>
            </li>
          </ul>

          <div
            className="nav-bar-section-title"
            tabIndex="0"
            aria-label="Neighborhood"
          >
            Neighborhood
          </div>
          <ul className="nav-bar-list">
            <li className="nav-menu-item-li">
              <a
                className="nav-menu-item-link"
                href="/for_sale_and_free/?init_source=more_menu"
              >
                <svg
                  className="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                ></svg>
                <span
                  className="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="For Sale &amp; Free"
                >
                  For Sale &amp; Free
                </span>
              </a>
            </li>

            <li className="nav-menu-item-li">
              <a className="nav-menu-item-link" href="/real-estate?is=sidebar">
                <svg
                  className="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                ></svg>
                <span
                  className="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Real Estate"
                >
                  Real Estate
                </span>
              </a>
            </li>
          </ul>

          <div
            className="nav-bar-section-title"
            tabIndex="0"
            aria-label="Directories"
          >
            Directories
          </div>
          <ul className="nav-bar-list">
            <li className="nav-menu-item-li">
              <a className="nav-menu-item-link" href="/directory/">
                <svg
                  className="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                >
                  <path
                    d="M10.004 10.038c2.039 0 3.69-1.803 3.69-4.01 0-2.174-1.651-3.901-3.69-3.901-2.03 0-3.698 1.752-3.69 3.917.008 2.2 1.651 3.994 3.69 3.994zm0-1.474c-1.162 0-2.148-1.104-2.148-2.52-.009-1.381.977-2.443 2.148-2.443 1.18 0 2.149 1.045 2.149 2.427 0 1.415-.978 2.536-2.149 2.536zm-5.257 9.31h10.506c1.457 0 2.157-.464 2.157-1.458 0-2.317-2.89-5.4-7.406-5.4s-7.414 3.083-7.414 5.4c0 .994.7 1.457 2.157 1.457zm-.261-1.475c-.202 0-.278-.068-.278-.22 0-1.288 2.08-3.69 5.796-3.69 3.707 0 5.788 2.402 5.788 3.69 0 .152-.076.22-.278.22H4.486z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span
                  className="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Neighbors"
                >
                  Neighbors
                </span>
              </a>
            </li>
          </ul>
          <div className="nav-bar-list_global_footer">
            <a className="nav-bar-inline-list" href="/privacy_policy/">
              Privacy
            </a>
            <a className="nav-bar-inline-list" href="/member_agreement/">
              Terms
            </a>
            <a
              href="/do_not_sell/"
              target="_blank"
              className="_5Ebo_Fl7 nav-bar-inline-list"
            >
              Do not sell my personal information
            </a>
          </div>
          <footer
            className="nav-bar-bottom-nav"
            tabIndex="0"
            aria-label="Footer"
          >
            <ul className="nav-bar-inline-list">
              <li>
                <a
                  className="nav-bar-inline-list-link"
                  href="/help/"
                  target="_blank"
                >
                  Help
                </a>
              </li>

              <li>
                <a className="nav-bar-inline-list-link" href="/privacy_policy/">
                  Privacy
                </a>
              </li>
              <li>
                <a className="nav-bar-inline-list-link" href="/about_us/">
                  About
                </a>
              </li>
            </ul>

            <div className="nav-bar-copyright">© 2021 Sellia</div>
          </footer>
        </section>
      </div>
    </NavSidebarWrapper>
  );
};

export default NavSidebar;
