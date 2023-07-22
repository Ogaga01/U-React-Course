import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) return;
    navigate(`/order/${searchValue}`);
    setSearchValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={searchValue}
        onChange={handleSearchValue}
      />
    </form>
  );
};

export default SearchOrder;
