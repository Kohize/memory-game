import MainGame from '../../features/MainGame/MainGame';
import GameHeader from '../../features/MainGame/ui/GameHeader/GameHeader';
import lightBackground from '../../assets/backgrounds/light-background.png';

export default function Game() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-y-25"
      style={{ backgroundImage: `url(${lightBackground})` }}>
      <GameHeader />
      <MainGame />
    </div>
  );
}
