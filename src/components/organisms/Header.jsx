import style from "../../style";
import { searchGame } from "../../services/games.service";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (q) => {
    if (q.length > 3) {
      const results = await searchGame(q);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="container">
      <div
        className={`flex flex-wrap justify-between font-poppins ${style.paddingX}`}
      >
        <div
          className={
            " flex flex-col justify-start items-center border-b border-base-100  py-4 ss:w-1/4 w-full"
          }
        >
          <span className="block self-start pb-1 text-sm text-neutral-700">
            Platform Saya
          </span>
          <ul className="flex gap-5  self-start ">
            <li className="hover:bg-base-100 pr-2 py-1 ">Windows</li>
            <li className="hover:bg-base-100 pr-2 py-1">Xbox</li>
            <li className="hover:bg-base-100 pr-2 py-1">PS4</li>
          </ul>
        </div>
        <div className=" flex flex-col justify-start  items-center border-b border-base-100  py-4  ss:w-1/3 w-full">
          <span className="block self-start pb-1 text-sm text-neutral-700 ">
            by Category
          </span>
          <ul className="flex gap-5 self-start">
            <li className="hover:bg-base-100 pr-2 py-1">New</li>
            <li className="hover:bg-base-100 pr-2 py-1">Preorder</li>
            <li className="hover:bg-base-100 pr-1 py-1">Discount</li>
            <li className="hover:bg-base-100  py-1  ">Sales From</li>
          </ul>
        </div>
        <div className="flex-none   border-b border-base-100 ss:w-1/3 w-full ">
          <div className="form-control  relative">
            <label className="label ">
              <span className="label-text self-start text-neutral-700 ">
                Search here...
              </span>
            </label>
            <input
              type="text"
              placeholder="Battlefield V "
              onChange={({ target }) => handleSearch(target.value)}
              className="input  bg-transparent px-1 placeholder:text-neutral-700 focus:outline-none  w-full max-w-xs"
            />
            {searchResults.length > 0 && (
              <div className="overflow-x-auto h-96 absolute top-24 z-20 bg-neutral scrl">
                <table className="table table-pin-rows">
                  <tbody>
                    {searchResults.map((result) => (
                      <tr key={result.id}>
                        <Link to={`/detail/${result.id}`}>
                          <div className="flex items-center space-x-3 py-1 px-2">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={result.background_image}
                                  alt={result.name}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{result.name}</div>
                              <div className="text-sm opacity-50 text-warning">
                                {result.rating}/5
                              </div>
                            </div>
                          </div>
                        </Link>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
