import React,{useState} from 'react';
import { AiOutlineCaretDown } from "react-icons/ai";
import {TiTick} from "react-icons/ti"

const DropDown = ({toggle}) => {
    if(!toggle){
        return null;
    }
    return (
        <div class=" d-flex justify-content-end " >
        <ul className=" border dropdown p-0" style={{width:"250px",cursor:"pointer"}}>
            <li className="dropdown-item d-flex justify-content-between"><a herf="#">Name </a><TiTick /></li>
            <li className="dropdown-item d-flex justify-content-between"><a herf="#">Apt Date </a><TiTick /></li>
            <li className="dropdown-item d-flex justify-content-between"><a herf="#">Time </a><TiTick /></li>
            <li className="dropdown-item d-flex justify-content-between"><a herf="#">Birthday </a><TiTick /></li>
            <li className="dropdown-divider"></li>
            <li className="dropdown-item d-flex justify-content-between"><a herf="#">Desc </a><TiTick /></li>
        </ul>
        </div>
      )
}

const Search = ({query, onQueryChange}) => {
    const [toggleSearch, setToggleSearch] = useState(false);
    return (
        <>
            <div className="container">
            <form className="form-group ">
            <div className="input-group">
                <label className="sr-only" />
                <input
                value={query}
                    onChange={(event)=>{onQueryChange(event.target.value)}}
                    type="text" className="form-control" id="searchapp" placeholder="Search for"
                 />
                <div className="input-group-append">
                <div className="form-control-label">
                    <button
                    onClick={() => {setToggleSearch(!toggleSearch);}}
                    className="btn btn-primary " type="button"  >
                    Sort by
                    <AiOutlineCaretDown />
                    </button>
                </div>
                </div>
            </div>
                <DropDown toggle={toggleSearch}/>
             {/* <DropDown /> */}

            </form>
            </div>
        </>

    )
}

export default Search;