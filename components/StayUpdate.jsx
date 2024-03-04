export default function StayUpdate() {
  return (
    <div className="mt-20">
      <div className="bg-sky-100 flex items-center justify-center flex-col pt-16 pb-24 gap-4 ">
        <h1 className="text-4xl font-bold">___Stay Update___</h1>
        <div className="flex text-center mb-4 text-gray-500 font-semibold">
          <p>
            Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
            labore at justo
          </p>
          <p>ipsum eirmod duo labore labore.</p>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Email Goes here"
            className=" w-[540px] rounded-none px-4 py-2 bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none "
          />
          <button className=" bg-rose-800 text-white  px-3 py-2 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
