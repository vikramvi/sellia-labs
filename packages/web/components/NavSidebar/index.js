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
          class="nav-bar"
          id="navigation"
          tabindex="0"
          aria-label="Navigation menu"
        >
          <ul class="nav-bar-list">
            <li class="nav-menu-item-li">
              <a
                class="nav-menu-item-link nav-bar-list-item-active"
                href="/news_feed/"
              >
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.529 2.736c-.819 0-1.482.663-1.482 1.482v1.929L1.916 7.453a1.482 1.482 0 00-.49 2.038l1.076 1.756c.271.442.736.692 1.218.707v3.828c0 .819.664 1.482 1.482 1.482h9.602c.819 0 1.482-.663 1.482-1.482v-3.828a1.48 1.48 0 001.212-.707l1.076-1.756a1.482 1.482 0 00-.49-2.038L10.91 3.056A1.478 1.478 0 0010 2.843a1.478 1.478 0 00-.909.213l-.756.463a1.482 1.482 0 00-1.307-.783h-1.5zm-.343 13.053l-.001-.007V9.624l-1.41.864-1.1-1.77 2.836-1.751v-2.75l.001-.006.004-.006.006-.004h1.507a.02.02 0 01.006 0l.006.004a.03.03 0 01.004.006l.001.007v1.808l2.81-1.722 7.472 4.416-.001.003a.025.025 0 01-.002.003l-1.076 1.756-.004.005-.007.003H16.23l-.004-.002-1.403-.86v6.159l-.001.002-.004.006-.006.004H5.202a.02.02 0 01-.006 0l-.006-.004a.031.031 0 01-.004-.006z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Home"
                >
                  Home
                </span>
              </a>
            </li>
            <div
              class="yVnmFve2"
              role="presentation"
              data-testid="menu-box_container"
            ></div>
            <li class="nav-menu-item-li">
              <a class="nav-menu-item-link" href="/neighborhood_feed/">
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.291 9.364c2.068 0 3.774-1.675 3.774-3.704 0-2.012-1.706-3.688-3.774-3.688C3.197 1.972 1.5 3.648 1.5 5.66c0 2.029 1.697 3.704 3.791 3.704zm-.008-1.566c-1.233 0-2.198-.934-2.198-2.13 0-1.195.965-2.163 2.198-2.163 1.232 0 2.197.968 2.197 2.163 0 1.196-.965 2.13-2.197 2.13zM14.726 9.364c2.068 0 3.774-1.675 3.774-3.704 0-2.012-1.706-3.688-3.774-3.688-2.094 0-3.791 1.676-3.791 3.688 0 2.029 1.697 3.704 3.791 3.704zm-.009-1.566c-1.232 0-2.197-.934-2.197-2.13 0-1.195.965-2.163 2.197-2.163 1.233 0 2.198.968 2.198 2.163 0 1.196-.965 2.13-2.198 2.13zM5.291 18.028c2.068 0 3.774-1.667 3.774-3.696 0-2.013-1.706-3.688-3.774-3.688-2.094 0-3.791 1.675-3.791 3.688 0 2.029 1.697 3.696 3.791 3.696zm-.008-1.558c-1.233 0-2.198-.934-2.198-2.138 0-1.187.965-2.156 2.198-2.156 1.232 0 2.197.969 2.197 2.156 0 1.204-.965 2.138-2.197 2.138zM14.726 18.028c2.068 0 3.774-1.667 3.774-3.696 0-2.013-1.706-3.688-3.774-3.688-2.094 0-3.791 1.675-3.791 3.688 0 2.029 1.697 3.696 3.791 3.696zm-.009-1.558c-1.232 0-2.197-.934-2.197-2.138 0-1.187.965-2.156 2.197-2.156 1.233 0 2.198.969 2.198 2.156 0 1.204-.965 2.138-2.198 2.138z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Escuela Parkway"
                >
                  Escuela Parkway
                </span>
              </a>
            </li>
            <li class="nav-menu-item-li">
              <a href="/map/" class="nav-menu-item-link">
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 16.82l4.129-4.105a5.762 5.762 0 000-8.184 5.866 5.866 0 00-8.258 0 5.762 5.762 0 000 8.184L10 16.82zm-.458 1.66l-4.729-4.7a7.262 7.262 0 010-10.313c2.865-2.848 7.51-2.848 10.374 0a7.262 7.262 0 010 10.312l-4.729 4.701a.65.65 0 01-.916 0z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 9.166a.5.5 0 100-1 .5.5 0 000 1zm0 1.5a2 2 0 100-4 2 2 0 000 4z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Map"
                >
                  Map
                </span>
              </a>
            </li>
            <li class="nav-menu-item-li">
              <a class="nav-menu-item-link" href="/digest?s=settings">
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                >
                  <path
                    d="M5.573 19h8.855c1.785 0 2.707-.939 2.707-2.741V3.733c0-1.794-.922-2.733-2.707-2.733H5.573c-1.778 0-2.708.939-2.708 2.733v12.526c0 1.802.93 2.741 2.708 2.741zm.141-1.661c-.797 0-1.196-.416-1.196-1.188V3.84c0-.756.399-1.188 1.204-1.188h8.556c.806 0 1.204.424 1.204 1.188v12.31c0 .772-.398 1.188-1.196 1.188H5.714zM6.977 6.067h6.055c.307 0 .532-.241.532-.54a.511.511 0 00-.532-.515H6.977c-.308 0-.54.224-.54.515 0 .299.232.54.54.54zm0 2.832h6.055c.307 0 .532-.24.532-.54a.511.511 0 00-.532-.515H6.977c-.308 0-.54.225-.54.515 0 .3.232.54.54.54zm0 2.833h2.94c.3 0 .523-.233.523-.523a.518.518 0 00-.523-.532h-2.94a.527.527 0 100 1.055z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Digest"
                >
                  Digest
                </span>
              </a>
            </li>
          </ul>
          <hr class="nav-bar-hr"></hr>
          <div
            class="nav-bar-section-title"
            tabindex="0"
            aria-label="Neighborhood"
          >
            Neighborhood
          </div>
          <ul class="nav-bar-list">
            <li class="nav-menu-item-li">
              <a class="nav-menu-item-link" href="/help_map/?is=nav_bar">
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 16.82l4.129-4.105a5.762 5.762 0 000-8.184 5.866 5.866 0 00-8.258 0 5.762 5.762 0 000 8.184L10 16.82zm-.458 1.66l-4.729-4.7a7.262 7.262 0 010-10.313c2.865-2.848 7.51-2.848 10.374 0a7.262 7.262 0 010 10.312l-4.729 4.701a.65.65 0 01-.916 0z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 9.166a.5.5 0 100-1 .5.5 0 000 1zm0 1.5a2 2 0 100-4 2 2 0 000 4z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Help Map"
                >
                  Help Map
                </span>
                <div class="nd-badge nd-badge-blue">New</div>
              </a>
            </li>
            <li class="nav-menu-item-li nav-item-recommendations">
              <a class="nav-menu-item-link" href="/recommendations?is=nav_bar">
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                >
                  <g clip-path="url(#icon-businesses_svg__clip0)"></g>
                  <defs>
                    <clipPath id="icon-businesses_svg__clip0">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <span
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Businesses"
                >
                  Businesses
                </span>
              </a>
            </li>
            <li class="nav-menu-item-li">
              <a
                class="nav-menu-item-link"
                href="/for_sale_and_free/?init_source=more_menu"
              >
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                ></svg>
                <span
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="For Sale &amp; Free"
                >
                  For Sale &amp; Free
                </span>
              </a>
            </li>
            <li class="nav-menu-item-li">
              <a href="/offers?is=nav_bar" class="nav-menu-item-link">
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                ></svg>
                <span
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Local Deals"
                >
                  Local Deals
                </span>
                <div class="nd-badge nd-badge-blue">New</div>
              </a>
            </li>

            <li class="nav-menu-item-li">
              <a class="nav-menu-item-link" href="/real-estate?is=sidebar">
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#000000"
                  role="img"
                ></svg>
                <span
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Real Estate"
                >
                  Real Estate
                </span>
              </a>
            </li>
          </ul>
          <div class="nav-bar-section-title" tabindex="0" aria-label="Groups">
            Groups
          </div>
          <ul class="nav-bar-list">
            <li class="nav-menu-item-li">
              <a href="/groups/?is=nav_menu" class="nav-menu-item-link ">
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  color="#006344"
                  role="img"
                ></svg>
                <span
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="All Groups"
                >
                  All Groups
                </span>
              </a>
            </li>
          </ul>
          <div>
            <div class="nav-bar-section-title" tabindex="0" aria-label="Topics">
              Topics
            </div>
            <ul class="nav-bar-list">
              <li class="nav-menu-item-li nav-item-all-interests">
                <a href="/channels/?is=nav_menu" class="nav-menu-item-link">
                  <svg
                    class="nav-menu-item-icon css-ec7kfw"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    color="#000000"
                    role="img"
                  ></svg>
                  <span
                    class="nav-menu-item-label-refresh css-1y777s2"
                    data-testid="All Topics"
                  >
                    All Topics
                  </span>
                  <div class="nd-badge nd-badge-blue">New</div>
                </a>
              </li>
            </ul>
          </div>
          <div
            class="nav-bar-section-title"
            tabindex="0"
            aria-label="Directories"
          >
            Directories
          </div>
          <ul class="nav-bar-list">
            <li class="nav-menu-item-li">
              <a class="nav-menu-item-link" href="/directory/">
                <svg
                  class="nav-menu-item-icon css-ec7kfw"
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
                  class="nav-menu-item-label-refresh css-1y777s2"
                  data-testid="Neighbors"
                >
                  Neighbors
                </span>
              </a>
            </li>
          </ul>
          <div class="nav-bar-list_global_footer">
            <a class="nav-bar-inline-list" href="/privacy_policy/">
              Privacy
            </a>
            <a class="nav-bar-inline-list" href="/member_agreement/">
              Terms
            </a>
            <a
              href="/do_not_sell/"
              target="_blank"
              class="_5Ebo_Fl7 nav-bar-inline-list"
            >
              Do not sell my personal information
            </a>
          </div>
          <footer class="nav-bar-bottom-nav" tabindex="0" aria-label="Footer">
            <ul class="nav-bar-inline-list">
              <li>
                <a
                  class="nav-bar-inline-list-link"
                  href="/help/"
                  target="_blank"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  class="nav-bar-inline-list-link"
                  href="/neighborhood_guidelines/#guidelines"
                >
                  Guidelines
                </a>
              </li>
              <li>
                <a class="nav-bar-inline-list-link" href="/privacy_policy/">
                  Privacy
                </a>
              </li>
            </ul>
            <ul class="nav-bar-inline-list">
              <li>
                <a class="nav-bar-inline-list-link" href="/about_us/">
                  About
                </a>
              </li>
              <li>
                <a class="nav-bar-inline-list-link" href="/jobs/">
                  Jobs
                </a>
              </li>
              <li>
                <a class="nav-bar-inline-list-link" href="/press/">
                  Press
                </a>
              </li>
              <li>
                <a
                  class="nav-bar-inline-list-link"
                  href="https://blog.nextdoor.com"
                >
                  Blog
                </a>
              </li>
            </ul>
            <ul class="nav-bar-inline-list">
              <li>
                <a
                  href="/do_not_sell/"
                  target="_blank"
                  class="_5Ebo_Fl7 nav-bar-inline-list-link"
                >
                  Do not sell my personal information
                </a>
              </li>
            </ul>
            <div class="nav-bar-copyright">© 2021 Nextdoor</div>
          </footer>
        </section>
      </div>
    </NavSidebarWrapper>
  );
};

export default NavSidebar;
