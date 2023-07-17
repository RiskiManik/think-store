import { useEffect, useState } from "react";
import { CardCarousel } from "../index";
import { getDetailsGame } from "../../services/games.service";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [detailGames, setDetailGames] = useState([]);

  useEffect(() => {
    getDetailsGame().then((data) => {
      setDetailGames(data.map((item) => item.data));
    });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
  };
  return (
    <Slider {...settings}>
      {detailGames.map((game, i) => (
        <Link key={i} to={`/detail/${game.id}`}>
          <CardCarousel
            src={game.background_image_additional}
            desc={game.description_raw}
            title={game.name_original}
          />
        </Link>
      ))}
    </Slider>
  );
};

export default Carousel;
