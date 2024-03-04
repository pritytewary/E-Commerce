"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function Front() {
  const arr = [
    {
      id: 1,
      img: "/scrollbar1.jpg",
      heading: "10% OFF YOUR FIRST ORDER",
      firstpara: "Fashionable Dress",
      button: "Shop Now",
    },
    {
      id: 2,
      img: "/carousel-2.jpg",
      heading: "10% OFF YOUR FIRST ORDER",
      firstpara: "Reasonable Price",
      button: "Shop Now",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? arr.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === arr.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="">
      <div className=" flex pl-72 ml-10 justify-center ">
        {arr.map((item, index) => (
          <div
            key={item.id}
            className={`relative mx-auto ${
              index !== currentIndex ? "hidden" : ""
            }`}
          >
            <div className="absolute left-72 top-28 flex flex-col justify-center items-center text-center gap-4 ">
              <h2 className="text-2xl font-bold mb-2 text-white ">
                {item.heading}
              </h2>
              <p className="text-5xl font-extrabold mb-4 text-white">
                {item.firstpara}
              </p>
              <button className="bg-white text-black px-4 py-2 rounded hover:text-white hover:bg-black hover:border focus:visible ">
                {item.button}
              </button>
            </div>
            <div className="absolute left-14 top-52 transform -translate-y-1/2">
              <FaChevronCircleLeft
                size={40}
                onClick={handlePrev}
                className="text-white"
              />
            </div>
            <div className="absolute right-14 top-52 transform -translate-y-1/2">
              <FaChevronCircleRight
                size={40}
                onClick={handleNext}
                className="text-white"
              />
            </div>
            <div className="flex justify-center ">
              <Image
                src={item.img}
                alt="Your Image"
                width={1000}
                height={400}
                className="h-[400px]  "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
