import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

export default function JustArrived() {
  const cart = [
    {
      id: 1,
      img: "/product-1.jpg",
      dress: "Stylish dress",
      price: "$123.00",
      price2: "$123.00",
      button1: <FaEye className="text-pink-400" size={20} />,
      button2: "View Detail",
      button3: <IoMdCart className="text-pink-400" size={20} />,
      button4: " Add To Cart",
    },
    {
      id: 2,
      img: "/product-2.jpg",
      dress: "Colourful stylish shirt",
      price: "$129.00",
      price2: "$129.00",
      button1: <FaEye className="text-pink-400" size={20} />,
      button2: "View Detail",
      button3: <IoMdCart className="text-pink-400" size={20} />,
      button4: " Add To Cart",
    },
    {
      id: 3,
      img: "/product-3.jpg",
      dress: "Colourful stylish Jacket",
      price: "$200.00",
      price2: "$200.00",
      button1: <FaEye className="text-pink-400" size={20} />,
      button2: "View Detail",
      button3: <IoMdCart className="text-pink-400" size={20} />,
      button4: " Add To Cart",
    },
    {
      id: 4,
      img: "/product-4.jpg",
      dress: "One Piece",
      price: "$150.00",
      price2: "$150.00",
      button1: <FaEye className="text-pink-400" size={20} />,
      button2: "View Detail",
      button3: <IoMdCart className="text-pink-400" size={20} />,
      button4: " Add To Cart",
    },
  ];

  const cart2 = [
    {
      id: 1,
      img: "/product-5.jpg",
      dress: "Printed t-shirt",
      price: "$127.00",
      price2: "$127.00",
      button1: <FaEye className="text-pink-400" size={20} />,
      button2: "View Detail",
      button3: <IoMdCart className="text-pink-400" size={20} />,
      button4: " Add To Cart",
    },
    {
      id: 2,
      img: "/product-6.jpg",
      dress: "Blazer",
      price: "$213.00",
      price2: "$213.00",
      button1: <FaEye className="text-pink-400" size={20} />,
      button2: "View Detail",
      button3: <IoMdCart className="text-pink-400" size={20} />,
      button4: " Add To Cart",
    },
    {
      id: 3,
      img: "/product-7.jpg",
      dress: " full Gown",
      price: "$180.00",
      price2: "$180.00",
      button1: <FaEye className="text-pink-400" size={20} />,
      button2: "View Detail",
      button3: <IoMdCart className="text-pink-400" size={20} />,
      button4: " Add To Cart",
    },
    {
      id: 4,
      img: "/product-8.jpg",
      dress: " kid's shirt",
      price: "$110.00",
      price2: "$110.00",
      button1: <FaEye className="text-pink-400" size={20} />,
      button2: "View Detail",
      button3: <IoMdCart className="text-pink-400" size={20} />,
      button4: " Add To Cart",
    },
  ];

  return (
    <div className="mt-14  ">
      <div className=" flex flex-col">
        <h1 className="text-4xl text-center font-bold">___Just Arrived___</h1>
        <div className="mt-10 mx-16 gap-10 flex    ">
          {cart.map((item, index) => (
            <div
              className="flex flex-col border border-gray-200 w-[400px]"
              key={item.id}
            >
              <Image
                src={item.img}
                width={450}
                height={200}
                className="border-gray-200 border-b px-4 py-2 h-[360px] w[400px] hover:scale-110 duration-200"
              />
              <div className="flex flex-col items-center gap-2 mt-3">
                <p className="text-lg">{item.dress}</p>
                <p className="font-semibold gap-2 flex">
                  {item.price}
                  <span className="text-gray-500 line-through	">
                    {item.price2}
                  </span>{" "}
                </p>
              </div>
              <div className=" flex justify-between px-4 border-t border-gray-200 py-3 mt-3 items-center  text-sm font-semibold text-gray-500">
                <div className="flex gap-2 items-center ">
                  {item.button1}
                  <p>{item.button2}</p>
                </div>
                <div className=" flex items-center space-x-2">
                  {item.button3}
                  <p>{item.button4}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 mx-16 gap-10 flex    ">
          {cart2.map((item, index) => (
            <div
              className="flex flex-col border border-gray-200 w-[400px]"
              key={item.id}
            >
              <Image
                src={item.img}
                width={450}
                height={200}
                className="border-gray-200 border-b px-4 py-2 h-[360px] w[400px] hover:scale-110 duration-200"
              />
              <div className="flex flex-col items-center gap-2 mt-3">
                <p className="text-lg">{item.dress}</p>
                <p className="font-semibold gap-2 flex">
                  {item.price}
                  <span className="text-gray-500 line-through	">
                    {item.price2}
                  </span>{" "}
                </p>
              </div>
              <div className=" flex justify-between px-4 border-t border-gray-200 py-3 mt-3 items-center  text-sm font-semibold text-gray-500">
                <div className="flex gap-2 items-center ">
                  {item.button1}
                  <p>{item.button2}</p>
                </div>
                <div className=" flex items-center space-x-2">
                  {item.button3}
                  <p>{item.button4}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
