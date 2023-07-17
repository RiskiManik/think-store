const CardCarousel = ({ src, title, desc }) => {
  return (
    <div className="card  lg:card-side bg-base-100 shadow-xl ">
      <figure>
        <img
          src={src}
          alt={title}
          className="w-[720px] aspect-video object-cover animate-wiggle"
        />
      </figure>
      <div className="card-body ss:w-full ">
        <h2 className="card-title text-4xl pb-4 text-white">{title}</h2>
        <p className="overflow-x-auto h-20   scrl  ">{desc}</p>
        <div className="card-actions justify-end items-center">
          <button className="btn btn-ghost btn-active rounded">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
