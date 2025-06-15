export default function Difficulty() {
  return (
    <div>
      <p className="font-semibold text-xl text-center mb-4">
        Current Difficulty: Easy
      </p>
      <div className="flex gap-x-5 justify-center items-center">
        <button className="p-3 bg-green-700 text-white font-semibold rounded-lg cursor-pointer hover:opacity-70">
          Easy
        </button>
        <button className="p-3 bg-yellow-700 text-white font-semibold rounded-lg cursor-pointer hover:opacity-70">
          Medium
        </button>
        <button className="p-3 bg-red-700 text-white font-semibold rounded-lg cursor-pointer hover:opacity-70">
          Hard
        </button>
      </div>
    </div>
  );
}
