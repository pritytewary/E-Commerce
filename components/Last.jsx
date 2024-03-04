import Image from "next/image";

export default function Last() {
  return (
    <div className="mt-0.5 bg-sky-100 flex justify-between px-16 py-4 items-center">
      <div className="flex flex-col">
        <div>
          <a className="font-bold hover:underline">© Your Site Name.</a> All
          Rights Reserved. Designed by{" "}
          <a className="font-bold hover:underline">Next js and Tailwind css</a>
        </div>
        <div>
          Distributed By <a className="text-pink-400"> Prity Tewary</a>
        </div>
      </div>
      <div>
        <Image src="/payments.png" width={300} height={150} />
      </div>
    </div>
  );
}
