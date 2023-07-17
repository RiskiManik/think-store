import { useState, useEffect } from "react";
import Select from "react-select";
import { searchGame, getGames } from "../../services/games.service";

const UserSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [gameOptions, setGameOptions] = useState([]);

  console.log(gameOptions);
  const formatOptionLabel = ({ image, title }) => (
    <div className="option-label">
      <img src={image} alt={title} className="option-image" />
      <span className="option-title">{title}</span>
    </div>
  );

  return (
    <div className="App">
      <Select
        isSearchable={true}
        onChange={({ target }) => search(target.value)}
        value={selectedOption}
        options={gameOptions}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default UserSelect;
