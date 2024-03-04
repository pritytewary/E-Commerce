import Image from "next/image";

export default function Vendor() {
  const ven = [
    { id: 1, img: "/vendor-3.jpg" },
    { id: 2, img: "/vendor-4.jpg" },
    { id: 3, img: "/vendor-5.jpg" },
    { id: 4, img: "/vendor-6.jpg" },
    { id: 5, img: "/vendor-7.jpg" },
    { id: 6, img: "/vendor-8.jpg" },
  ];
  return (
    <div className="mt-14 flex gap-10 mx-16">
      {ven.map((item, index) => (
        <div
          className="w-[200px] border border-gray-200 px-2 py-2"
          key={item.id}
        >
          <Image src={item.img} height={200} width={200} />
        </div>
      ))}
    </div>
  );
}
