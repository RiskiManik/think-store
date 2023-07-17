import { useEffect, useState } from "react";
import { detailGamePage } from "../services/games.service";
import { useParams, Link } from "react-router-dom";

const DetailGamepage = () => {
  const [detailGames, setDetailGames] = useState([]);
  const { gameId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const results = await detailGamePage(gameId).then((res) =>
        setDetailGames(res.data)
      );
      return results;
    };
    fetch();
  }, [gameId]);

  if (!detailGames) {
    return <div>Loading...</div>;
  }
  console.log(detailGames);

  return (
    <div>
      <div className="card lg:card-side bg-base-200 w-full h-screen shadow-xl  ">
        <figure className="w-1/2  ">
          <img
            src={detailGames.background_image_additional}
            alt={detailGames.name + "1"}
            className="object-contain aspect-video rounded  "
          />
        </figure>
        <div className="card-body w-1/2 my-auto ">
          <h2 className="card-title text-4xl font-bold pb-2 mb-6  border-b-2 border-base-100">
            {detailGames.name}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: detailGames.description }} />
          <div className="card-actions justify-end mt-4">
            <Link to={"/"} className="btn btn-primary">
              Back to Home
            </Link>
            <Link to={detailGames.website} className="btn btn-primary">
              To Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailGamepage;
