import { useDispatch, useSelector } from "react-redux";
import { filterContacts, selectorFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Find contacts!</h2>
      <input
        type="text"
        placeholder="input name..."
        value={filter}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
      />
    </>
  );
};

export default SearchBox;
