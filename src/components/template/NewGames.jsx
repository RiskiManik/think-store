import GameSlider from "../organisms/GameSlider";
import { grid, menu } from "../../assets";
import styles from "../../style";

const NewGames = () => {
  return (
    <div className={"w-full h-full " + styles.paddingX}>
      <div className="flex justify-between items-center py-2">
        <h2>List Game</h2>
        <div className="flex gap-2">
          <img src={grid} alt="grid" className="w-[20px] opacity-70" />
          <img src={menu} alt="menu" />
        </div>
      </div>
      <GameSlider />
      <GameSlider page={2} />
      <GameSlider page={3} />
    </div>
  );
};

export default NewGames;
