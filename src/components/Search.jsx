import { FaSearch } from "react-icons/fa";
export const Search = ({handleSearch}) => {
    return ( 
        <>
          <div className="search">
             <FaSearch className="search-icon" size='1.2em' />
             <input onChange={(event)=> handleSearch(event.target.value)} type="text" placeholder="search you note"/>
          </div>
        </>
     );
}