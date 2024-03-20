"use client";

import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import { CiUser } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { data } from "autoprefixer";

export default function Profile({ addresses, user }) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="h-screen bg-gradient-to-b from-pink-100 to-slate-200 ">
      <div className="flex items-center gap-1 pl-44 pt-5">
        <Link className="flex items-center" href={"/"}>
          Home <MdKeyboardArrowRight size={20} />{" "}
        </Link>
        <Link href={"/profile"}>My Profile</Link>
      </div>
      <div className=" h-screen ">
        <div className=" flex pl-44 mt-4 ">
          <div className="flex flex-col bg-white border border-gray-400 w-[220px] h-[180px] shadow-2xl shadow-pink-200 ">
            <ul className="">
              <Link
                className="flex items-center gap-4 bg-white text-gray-600 font-semibold text-sm hover:text-pink-400 px-4 border-b border-gray-300 py-3 "
                href={""}
              >
                {" "}
                <CiUser size={20} /> My Profile
              </Link>
              <Link
                className="flex items-center gap-4 bg-white text-gray-600 font-semibold text-sm hover:text-pink-400 px-4 border-b border-gray-300 py-3"
                href={""}
              >
                {" "}
                <MdEventNote size={20} /> My Orders
              </Link>
              <Link
                className="flex items-center gap-4 bg-white text-gray-600 font-semibold text-sm hover:text-pink-400 px-4 border-b border-gray-300 py-3"
                href={""}
              >
                {" "}
                <FaHeart size={20} /> My Wishlist
              </Link>
              <Link
                className="flex items-center gap-4 bg-white text-gray-600 font-semibold text-sm hover:text-pink-400 px-4  border-gray-300 py-3"
                href={""}
                onClick={() => signOut()}
              >
                {" "}
                <BiLogOutCircle size={20} className="rotate-90" /> Log out
              </Link>
            </ul>
          </div>
          <div className="ml-10">
            <div className="bg-gray-300 w-[800px] h-[240px] flex justify-center  ">
              {" "}
              <div className="bg-white w-[440px] flex h-[200px] gap-7 px-10 mt-5 items-center">
                {session ? (
                  <>
                    <Image
                      src={"/default_avatar.svg"}
                      width={100}
                      height={100}
                    />
                    <div className="flex gap-1 flex-col">
                      <p>Name: {session.user.name}</p>
                      <p>Email: {session.user.email}</p>
                      <p>Date of Birth: {user.dateOfBirth}</p>
                    </div>
                  </>
                ) : (
                  <p>Please log in to view your profile.</p>
                )}
              </div>
            </div>
            <div className="bg-white w-[800px] h-[400px] flex px-10 pt-24 flex-col ">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-5 flex items-center gap-3 font-sans text-gray-900">
                  {" "}
                  <FaHome /> My Address
                </h1>

                <Link
                  className="flex items-center gap-2 text-gray-800"
                  href={"/address"}
                >
                  {" "}
                  <MdModeEditOutline size={20} /> Add New Address{" "}
                </Link>
              </div>
              <div className="bg-zinc-200 shadow-2xl shadow-zinc-100  w-[400px] flex  h-[200px] gap-7 px-10   items-center   rounded-lg border border-gr">
                {" "}
                <div className="flex gap-2 flex-col">
                  {addresses.map((address) => (
                    <div key={address._id}>
                      <h1 className="text-xl font-semibold ">
                        {" "}
                        {address.country}
                      </h1>
                      <p className=""> {address.name}</p>
                      <p> {address.mobileNumber}</p>
                      <p> {address.postalCode}</p>
                      <p> {address.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
