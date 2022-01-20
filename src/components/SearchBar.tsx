interface SearchBarProps {
        filterText: string;
        onFilterTextChange: (e: string) => void;
}

function SearchBar(props: SearchBarProps) {

    function FilterUserChange(e: any) {
        props.onFilterTextChange(e.target.value);
    }
  
    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={props.filterText}
                onChange={FilterUserChange}
            />
        </form>
    );
  };

  export default SearchBar;