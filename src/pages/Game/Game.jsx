import MainGame from '../../features/MainGame/MainGame';
import lightBackground from '../../assets/backgrounds/light-background.png';
import nightBackground from '../../assets/backgrounds/night-background.jpg';
import { useSelector } from 'react-redux';

export default function Game() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-y-25"
      style={
        theme === 'light'
          ? { backgroundImage: `url(${lightBackground})` }
          : { backgroundImage: `url(${nightBackground})` }
      }>
      <MainGame />
    </div>
  );
}
