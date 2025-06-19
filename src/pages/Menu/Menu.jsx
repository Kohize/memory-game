import StartingScreen from '../../features/StartingScreen/StartingScreen';
import lightMenu from '../../assets/backgrounds/light-mainmenu.jpeg';
import nightMenu from '../../assets/backgrounds/night-mainmenu.jpeg';
import { useSelector } from 'react-redux';

export default function Menu() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={
        theme === 'light'
          ? { backgroundImage: `url(${lightMenu})` }
          : { backgroundImage: `url(${nightMenu})` }
      }>
      <section className="flex flex-col items-center justify-center">
        <div className="flex md:p-20 flex-col gap-y-15 py-5 bg-white rounded-xl border-1 border-cyan-800">
          <StartingScreen />
        </div>
      </section>
    </div>
  );
}
