import { MdLocationOn } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";

export default function Bottom() {
  const links = [
    { id: 1, icon: <FaAngleRight />, head: "Home" },
    { id: 2, icon: <FaAngleRight />, head: "Our Shop" },
    { id: 3, icon: <FaAngleRight />, head: "Shop Detail" },
    { id: 4, icon: <FaAngleRight />, head: "Shopping Cart" },
    { id: 5, icon: <FaAngleRight />, head: "CheckOut" },
    { id: 6, icon: <FaAngleRight />, head: "Contact Us" },
  ];

  const links2 = [
    { id: 7, icon: <FaAngleRight />, head: "Terms and Conditions" },
    { id: 8, icon: <FaAngleRight />, head: "Privacy Policy" },
    { id: 9, icon: <FaAngleRight />, head: "Shipping Information" },
    { id: 10, icon: <FaAngleRight />, head: "Returns & Refunds" },
    { id: 11, icon: <FaAngleRight />, head: "FAQs" },
    { id: 12, icon: <FaAngleRight />, head: "Support" },
  ];

  return (
    <div className="bg-sky-100 px-16 flex justify-between gap-8 py-20 mt-20">
      <div className="flex flex-col  max-w-[400px] ">
        <div className="flex gap-1 items-center">
          <button className="text-4xl border border-white px-3 py-2 font-extrabold text-rose-800 mb-2">
            E
          </button>
          <a href="" className="text-4xl font-bold">
            Shopper
          </a>
        </div>
        <div className="mt-3">
          Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
          sit erat lorem et magna ipsum dolore amet erat.
        </div>
        <div className="flex gap-1 mt-3 flex-col">
          <div className="flex items-center gap-3">
            <MdLocationOn className="text-pink-400" />
            <a href="">123 Street, New York, USA</a>
          </div>
          <div className="flex items-center gap-3">
            <IoMailSharp className="text-pink-400" />
            <a href="">info@example.com</a>
          </div>
          <div className="flex gap-3 items-center">
            <IoIosCall className="text-pink-400" />
            <a href="">+012 345 67890</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Quick Links</h1>
        <div className="flex flex-col gap-3 mt-4">
          {links.map((item) => (
            <div className="flex gap-1 items-center" key={item.id}>
              {item.icon}
              <a className="hover:underline" href="#">
                {item.head}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Additional Links</h1>
        <div className="flex flex-col gap-3 mt-4">
          {links2.map((item) => (
            <div className="flex gap-1 items-center" key={item.id}>
              {item.icon}
              <a className="hover:underline" href="#">
                {item.head}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold ">NewsLetter</h1>
        <div className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-[280px] bg-white  h-[50px] placeholder:text-gray-400 placeholder:font-semibold px-3"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            className="w-[280px] bg-white  h-[50px] placeholder:text-gray-400 placeholder:font-semibold px-3"
          />
          <button className="bg-rose-800 text-white px-3 py-3">
            SubsCribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
