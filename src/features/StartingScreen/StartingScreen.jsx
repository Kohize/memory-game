import Difficulty from './ui/Difficulty';
import Rules from './ui/Rules';

export default function StartingScreen() {
  return (
    <section className="flex flex-col gap-y-5">
      <div className="flex flex-col item-center justify-center">
        <span className="animate-bounce text-4xl text-center">🧠</span>
        <h1 className="text-5xl text-center">MemoryGame</h1>
        <p className="text-center text-2xl text-lime-400">Personal best: 10</p>
      </div>
      <Rules />
      <Difficulty />
    </section>
  );
}
