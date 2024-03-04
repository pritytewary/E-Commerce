import Bottom from "@/components/Bootom";
import Front from "@/components/Front";
import FrontNext from "@/components/FrontNext";
import CartItem from "@/components/CartItem";
import StayUpdate from "@/components/StayUpdate";
import JustArrived from "@/components/JustArrived";
import Vendor from "@/components/Vendor";

import Image from "next/image";
import Last from "@/components/Last";

export default function Home() {
  return (
    <div className="">
      <Front />
      <FrontNext />
      <CartItem />
      <StayUpdate />
      <JustArrived />
      <Vendor />
      <Bottom />
      <Last />
    </div>
  );
}
