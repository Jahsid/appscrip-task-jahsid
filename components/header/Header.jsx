import React from "react";
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiAtom } from "react-icons/gi";

const Header = () => {
  return (
    <header
      className="w-full bg-white shadow-sm px-4 py-3 flex justify-between items-center"
      role="banner"
    >
      <div className="flex items-center gap-3">
        <RxHamburgerMenu
          size={24}
          className="block md:hidden cursor-pointer"
          aria-label="Menu"
        />
        <GiAtom
          size={26}
          className="hidden md:block text-gray-800 cursor-pointer"
          aria-label="Brand Logo"
        />
      </div>

      <h1 className="text-2xl font-bold tracking-wide" aria-label="Website logo">
        LOGO
      </h1>

      <nav
        className="flex items-center gap-4"
        aria-label="Navigation actions"
      >
        <IoIosSearch
          size={20}
          className="cursor-pointer hover:text-gray-600 transition"
          aria-label="Search"
        />
        <IoIosHeartEmpty
          size={20}
          className="cursor-pointer hover:text-gray-600 transition"
          aria-label="Wishlist"
        />
        <IoBagOutline
          size={20}
          className="cursor-pointer hover:text-gray-600 transition"
          aria-label="Cart"
        />
        <LuUser
          size={20}
          className="cursor-pointer hover:text-gray-600 transition"
          aria-label="User account"
        />
      </nav>
    </header>
  );
};

export default Header;
