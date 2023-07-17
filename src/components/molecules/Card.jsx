import { useState } from "react";
import { star_rate } from "../../assets";
import { useEffect } from "react";

const Card = ({ src, title, desc, genre, counts }) => {
  const [listGenres, setListGenre] = useState([]);
  useEffect(() => {
    setListGenre(genre);
  }, []);
  return (
    <div className="card card-compact w-[13rem] bg-base-200 rounded-sm group ">
      <figure>
        <img
          src={src}
          alt="Shoes"
          className="w-full h-[100%] group-hover:scale-125 group-hover:rotate-6 transition ease-out duration-300 aspect-[3/4] object-cover object-center"
        />
      </figure>
      <div className="py-2 px-[2px] justify-start w-full ">
        <h2 className="card-title truncate ">{title}</h2>
        <div className="text-neutral-500 flex justify-start gap-2">
          <img
            src={star_rate}
            alt="rate"
            className="w-[20px] h-[20px] bg-warning rounded-sm"
          />{" "}
          <p> {`${desc}/5 ${counts}`}</p>
        </div>
        <div className="card-actions  items-end pt-1 ">
          {listGenres.map((data, i) => (
            <div className="badge badge-outline" key={i}>
              {data.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
