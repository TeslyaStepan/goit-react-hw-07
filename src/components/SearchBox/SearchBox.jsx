import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
