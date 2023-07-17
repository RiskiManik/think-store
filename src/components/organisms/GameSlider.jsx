import Slider from "react-slick";
import { Card } from "../index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { getGames } from "../../services/games.service";
import { Link } from "react-router-dom";
const GameSlider = ({ page }) => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    getGames(page).then((data) => {
      setGameList(data);
    });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {gameList.map((game, i) => (
          <div key={i}>
            <Link key={i} to={`/detail/${game.id}`}>
              <Card
                src={game.background_image}
                title={game.name}
                desc={game.rating}
                genre={game.genres}
                counts={game.reviews_count}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameSlider;
