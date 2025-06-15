import StartingScreen from '../../features/StartingScreen/StartingScreen';

export default function Menu() {
  return (
    <div className="flex justify-center items-center h-screen">
      <section className="flex flex-col items-center justify-center">
        <div className="flex p-20 flex-col gap-y-15 bg-white rounded-xl border-1 border-cyan-800">
          <StartingScreen />
        </div>
      </section>
    </div>
  );
}
