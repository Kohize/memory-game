export default function Rules() {
  return (
    <div>
      <h3 className="font-semibold text-3xl text-center mb-3">How to play</h3>
      <ul className="grid grid-cols-4 gap-5 px-5">
        <li className="flex justify-center items-center bg-indigo-200 rounded-md p-5 gap-x-5 col-start-1 col-end-3 max-h-[100px]">
          <span className="text-indigo-400 text-lg">01</span>
          <p className="text-xs font-semibold max-w-[140px] text-zinc-700">
            Click pokemon you haven't clicked before
          </p>
        </li>
        <li className="flex justify-center items-center bg-indigo-200 rounded-md p-5 gap-x-5 col-start-3 col-end-5 max-h-[100px]">
          <span className="text-indigo-400 text-lg ">02</span>
          <p className="text-xs font-semibold max-w-[140px] text-zinc-700">
            Cards shuffle after every click
          </p>
        </li>
        <li className="flex justify-center items-center bg-indigo-200 rounded-md p-5 gap-x-5 col-start-1 col-end-5 max-h-[100px]">
          <span className="text-indigo-400 text-lg">03</span>
          <p className="text-xs font-semibold max-w-52 text-zinc-700">
            Game OVER 💀 if you click same pokemon twice
          </p>
        </li>
      </ul>
    </div>
  );
}
