import { useDispatch, useSelector } from "react-redux";
import { selectorFilter } from "../../redux/filters/selectors";
import { filterContacts } from "../../redux/filters/slice";

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
