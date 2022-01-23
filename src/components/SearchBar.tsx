import TextField from "@mui/material/TextField";

interface SearchBarProps {
  filterText: string;
  onFilterTextChange: (e: string) => void;
}

function SearchBar(props: SearchBarProps) {
  function FilterUserChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onFilterTextChange(e.target.value);
  }

  return (
    <form>
      <TextField
        id="st-b"
        label="Search..."
        variant="standard"
        value={props.filterText}
        onChange={FilterUserChange}
      />
    </form>
  );
}

export default SearchBar;
