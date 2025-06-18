export default function Rules() {
  return (
    <div>
      <h3 className="font-semibold text-3xl text-center mb-3">How to play</h3>
      <ul className="grid grid-cols-2 gap-5">
        <li className="flex justify-center items-center bg-indigo-200 rounded-md p-5 gap-x-5 ">
          <span className="text-indigo-400 text-lg">01</span>
          <p className="text-sm font-semibold max-w-[140px] text-zinc-700">
            Click pokemon you haven't clicked before
          </p>
        </li>
        <li className="flex justify-center items-center bg-indigo-200 rounded-md p-5 gap-x-5 ">
          <span className="text-indigo-400 text-lg ">02</span>
          <p className="text-sm font-semibold max-w-[140px] text-zinc-700">
            Cards shuffle after every click
          </p>
        </li>
        <li className="flex justify-center items-center bg-indigo-200 rounded-md p-5 gap-x-5 ">
          <span className="text-indigo-400 text-lg">03</span>
          <p className="text-sm font-semibold max-w-[140px] text-zinc-700">
            Game OVER 💀 if you click same pokemon twice
          </p>
        </li>
        <li className="flex justify-center items-center bg-indigo-200 rounded-md p-5 gap-x-5 ">
          <span className="text-indigo-400 text-lg">04</span>
          <p className="text-sm font-semibold max-w-[140px] text-zinc-700">
            Perfect round unlocks new emojis
          </p>
        </li>
      </ul>
    </div>
  );
}
