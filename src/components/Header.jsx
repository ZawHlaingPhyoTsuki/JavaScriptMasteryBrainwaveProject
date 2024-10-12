import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave, tsukuyomi } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";

const Header = () => {
  const location = useLocation();
  const isSignInPage =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // const handleClick = () => {
  //   if (!openNavigation) return;

  //   enablePageScroll();
  //   setOpenNavigation(false);
  // };
  const handleClick = () => {
    // Close navigation if it's open
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed top-0 right-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link
          to={"/"}
          onClick={handleClick}
          className="block w-[12rem] xl:mr-8"
        >
          <img src={tsukuyomi} width={190} height={40} alt="TSUKUYOMI" />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) =>
              item.onlyMobile ? (
                <Link
                  key={item.id} // Key directly on the Link element, it for mobile sign in
                  to={`/sign-in`}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </Link>
              ) : (
                // !isSignInPage && (
                <a
                  key={item.id} // Key directly on the a element, both pc and mobile nav tabs
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile || isSignInPage ? "lg:invisible" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === location.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
                // )
              )
            )}
          </div>

          <HamburgerMenu />
        </nav>

        <Link
          to={"/sign-up"}
          className={`button hidden mr-8  text-n-1/50 transition-colors  lg:block  ${
            location.pathname === "/sign-up" ? "text-color-1" : "hover:text-n-1"
          } `}
        >
          New account
        </Link>

        <Link to={"/sign-in"}>
          <Button
            location={location.pathname}
            className={`hidden lg:flex ${
              location.pathname === "/sign-in" ? "text-color-1" : ""
            }`}
            // {...(location.pathname === "/sign-in" && { white: true })}
          >
            {/* {...(isSignInPage && { white: true })}
             ...(isSignInPage && { white: true }): Conditionally spreads the white prop with a value of true when isSignInPage is true.
{ isSignInPage && white }: This syntax would work if white were a variable, but it's not passing the prop white as expected. */}
            Sign in
          </Button>
        </Link>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
