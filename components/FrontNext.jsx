import { ImCheckmark } from "react-icons/im";
import { FaShippingFast } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import Image from "next/image";

export default function FrontNext() {
  const cards = [
    {
      id: 1,
      icon: <ImCheckmark size={40} />,
      para: "Quality Product",
    },
    {
      id: 2,
      icon: <FaShippingFast size={40} />,
      para: "Free Shipping",
    },
    {
      id: 3,
      icon: <TbArrowsRightLeft size={40} />,
      para: "14-Day Return",
    },
    {
      id: 4,
      icon: <MdWifiCalling3 size={40} />,
      para: "24/7 Hours Support",
    },
  ];

  const carts = [
    {
      id: 1,
      heading: "15 Products",
      img: "/cat-1.jpg",
      para: "Men's Dresses",
    },
    {
      id: 2,
      heading: "15 Products",
      img: "/cat-2.jpg",
      para: "Women's Dresses",
    },
    {
      id: 3,
      heading: "15 Products",
      img: "/cat-3.jpg",
      para: "Baby's Dresses",
    },
  ];

  const carts2 = [
    {
      id: 1,
      heading: "15 Products",
      img: "/cat-4.jpg",
      para: "Accesseries",
    },
    {
      id: 2,
      heading: "15 Products",
      img: "/cat-5.jpg",
      para: "Bags",
    },
    {
      id: 3,
      heading: "15 Products",
      img: "/cat-6.jpg",
      para: "Shoes",
    },
  ];

  const carts3 = [
    {
      id: 1,
      img: "/offer-1.png",
      para: "20% OFF THE ALL ORDER",
      heading: "Spring Collectoin",
      button: "Shop Now",
    },
    {
      id: 2,
      img: "/offer-2.png",
      para: "20% OFF THE ALL ORDER",
      heading: " Winter Collectoin",
      button: "Shop Now",
    },
  ];

  return (
    <div>
      <div className="mt-24 ml-10 flex gap-6">
        {cards.map((item, index) => (
          <div
            className="flex gap-4 border border-gray-300 w-[340px] px-6 py-6 items-center "
            key={item.id}
          >
            <div className="text-rose-800">{item.icon}</div>
            <p className="text-2xl font-bold text-gray-800"> {item.para}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 mx-20 mb-3 flex gap-6">
        {carts.map((item, index) => (
          <div
            className="flex flex-col border border-gray-300 w-[440px] py-6 px-8"
            key={item.id}
          >
            <p className=" text-right">{item.heading}</p>
            <div className="px-4 py-2">
              <Image
                src={item.img}
                width={600}
                height={1000}
                className="h-[300px] w-[600px] hover:scale-110 duration-200"
              />
            </div>
            <h1 className="font-bold text-xl">{item.para}</h1>
          </div>
        ))}
      </div>
      <div className="mt-10 mx-20 mb-3 flex gap-6">
        {carts2.map((item, index) => (
          <div
            className="flex flex-col border border-gray-300 w-[440px] py-6 px-8"
            key={item.id}
          >
            <p className=" text-right">{item.heading}</p>
            <div className="px-4 py-2">
              <Image
                src={item.img}
                width={600}
                height={1000}
                className="h-[300px] w-[600px] hover:scale-110 duration-200"
              />
            </div>
            <h1 className="font-bold text-xl">{item.para}</h1>
          </div>
        ))}
      </div>
      <div
        className="flex gap-6 px-16 mt-20
      "
      >
        {carts3.map((item, index) => (
          <div
            className="flex justify-between items-center bg-indigo-100 w-[690px] pr-10 "
            key={item.id}
          >
            <div>
              <Image
                src={item.img}
                width={500}
                height={500}
                className="h-[200px] w-[150px] pt-4 hover:scale-110 duration-200"
              />
            </div>
            <div className="flex flex-col gap-4 items-center">
              <p className="text-xl text-pink-700 ">{item.para}</p>
              <h1 className="text-4xl font-bold"> {item.heading}</h1>
              <button className="border border-pink-600 text-pink-700 w-[100px]  py-1 hover:bg-rose-800 hover:text-white">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
