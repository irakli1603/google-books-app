import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchField() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div>
      <input
        placeholder="Type book name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleClick} disabled={!searchQuery}>
        Search
      </button>
    </div>
  );
}

export default SearchField;
