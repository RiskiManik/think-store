import { Header, NewGames, Carousel } from "../index";
import styles from "../../style";

const Hero = () => {
  return (
    <div className={`${styles.paddingX}`}>
      <Header></Header>

      <div className={`${styles.paddingY} ${styles.paddingX}`}>
        <Carousel />
      </div>
      <NewGames />
    </div>
  );
};

export default Hero;
