"use client";
import { useState } from "react";

import { signOut, useSession } from "next-auth/react"; // Importing useSession for authentication status

import { BiDownArrow, BiDownArrowAlt, BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";

import { CiUser } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";

export default function () {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const togglepageDropdown = () => {
    setIsPageOpen(!isPageOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleNestedDropdown = () => {
    setIsNestedOpen(!isNestedOpen);
  };

  return (
    <div>
      <div className="flex justify-between px-16 items-center h-10 bg-sky-100">
        <div className="flex gap-1">
          <a href="">FAQs |</a>
          <a href="">Help |</a>
          <a href="">Support</a>
        </div>
        <div className="flex gap-2">
          <a href="">
            <BiLogoFacebook size={20} />
          </a>
          <a href="">
            <TiSocialTwitter size={20} />
          </a>
          <a href="">
            <RiLinkedinFill size={20} />
          </a>
          <a href="">
            <IoLogoInstagram size={20} />
          </a>
          <a href="">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
      <div className=" flex justify-between px-16 mt-4 h-216 items-center border-b border-gray-300 ">
        <div className="flex gap-1 items-center ">
          <button className="text-4xl border px-3 py-2 font-extrabold text-rose-800 mb-2 ">
            E
          </button>
          <Link href="/" className="text-4xl font-bold">
            Shopper
          </Link>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className=" w-[640px] rounded-none px-4 py-1.5 bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none "
            placeholder="Search for products"
          />
          <button className="  border-y border-r border-gray-300  text-rose-800 rounded-none px-3 py-2.5 ">
            <FaSearch />
          </button>
        </div>
        <div className="flex gap-2">
          <button className="border border-gray-300 text-rose-800 px-3 py-1 h-8 flex items-center space-x-2">
            <FaHeart />
            <span className="text-gray-400 font-bold text-sm">0</span>
          </button>

          <button className="border border-gray-300 text-rose-800 px-3 py-1 h-8 flex items-center space-x-2">
            <FaShoppingCart />
            <span className="text-gray-400 font-bold text-sm">0</span>
          </button>
        </div>
      </div>
      <div className="px-16 flex justify-between items-center ">
        <div className="flex space-x-8 items-center ">
          <div className="relative">
            <div className="bg-rose-800 w-[340px] h-16 px-4 items-center flex justify-between text-white">
              <button onClick={toggleDropdown}>Categories</button>
              <FaAngleDown
                onClick={toggleDropdown}
                className="cursor-pointer"
              />
            </div>
            {isOpen && (
              <div className="absolute mt-1 w-[340px] bg-white border border-gray-300">
                <ul className="cursor-pointer ">
                  <li
                    className="py-2 px-4 border-b border-gray-300 flex justify-between hover:text-pink-500"
                    onClick={toggleNestedDropdown}
                  >
                    Dresses <FaAngleDown className="cursor-pointer" />
                    {isNestedOpen && (
                      <ul className="bg-sky-50">
                        <li className="pl-6 py-2 px-4">Men's Dress</li>
                        <li className="pl-6 py-2 px-4">Women's Dress</li>
                        <li className="pl-6 py-2 px-4">Kids Dress</li>
                      </ul>
                    )}
                  </li>
                  <li className="py-2 px-4 border-b border-gray-300 hover:text-pink-500">
                    Shirts
                  </li>
                  <li className="py-2 px-4 border-b border-gray-300 hover:text-pink-500">
                    Jeans
                  </li>
                  <li className="py-2 px-4 border-b border-gray-300 hover:text-pink-500">
                    Swimwear
                  </li>
                  <li className="py-2 px-4 border-b border-gray-300 hover:text-pink-500">
                    Sleepwear
                  </li>
                  <li className="py-2 px-4 border-b border-gray-300 hover:text-pink-500">
                    Sportswear
                  </li>
                  <li className="py-2 px-4 border-b border-gray-300 hover:text-pink-500">
                    Jumpsuits
                  </li>
                  <li className="py-2 px-4 border-b border-gray-300 hover:text-pink-500">
                    Blazers
                  </li>
                  <li className="py-2 px-4 border-b border-gray-300 hover:text-pink-500">
                    Jackets
                  </li>
                  <li className="py-2 px-4 hover:text-pink-500">Shoes</li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex space-x-5 ">
            <Link href="/" className="text-rose-800">
              Home
            </Link>
            <Link href="" className="hover:text-pink-500">
              Shop
            </Link>
            <Link href="" className="hover:text-pink-500">
              Shop Detail
            </Link>
            <div className="relative z-50">
              <div className="flex items-center hover:text-pink-500">
                Pages
                <FaCaretDown
                  onClick={togglepageDropdown}
                  className="cursor-pointer ml-1"
                />
              </div>
              {isPageOpen && (
                <ul className="absolute bg-white border border-gray-300 rounded-md top-full mt-1">
                  <li className="border-b border-gray-300 hover:text-pink-500 px-4 py-2">
                    Shopping Cart
                  </li>
                  <li className="hover:text-pink-500 px-4 py-2">CheckOut</li>
                </ul>
              )}
            </div>

            <a href="" className="hover:text-pink-500">
              Contact
            </a>
          </div>
        </div>
        <div className="flex gap-2">
          {session ? (
            <>
              <span className="text-gray-800 font-semibold">
                {session.user.name}
              </span>
              <div className="relative z-50">
                <FaUserCircle
                  size={24}
                  className="text-rose-800"
                  onClick={toggleProfileDropdown}
                />
                {isProfileOpen && (
                  <ul className="absolute bg-white border border-gray-300 rounded-md top-full mt-1">
                    <li className="border-b border-gray-300 hover:text-pink-500 px-4 py-2 flex items-center gap-2">
                      <MdEventNote /> Order
                    </li>
                    <li className="border-b border-gray-300 hover:text-pink-500 px-4 py-2 flex items-center gap-2">
                      <CiUser /> Profile
                    </li>
                    <li className="border-b border-gray-300 hover:text-pink-500 px-4 py-2 flex items-center gap-2">
                      <FaHeart /> wishlist
                    </li>
                    <li className="border-b border-gray-300 hover:text-pink-500 px-4 py-2 flex items-center gap-2">
                      <BiLogOutCircle className="rotate-90	" /> logout
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-pink-400">
                Login
              </Link>
              <Link href="/register" className="hover:text-pink-400">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
