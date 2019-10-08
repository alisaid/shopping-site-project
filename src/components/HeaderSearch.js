import React from "react";
import { connect } from "react-redux";
import { setSearchText, getSearchResult } from "../store/actions/search";

const HeaderSearch = props => {
  
  const searchSubmit = e => {
    e.preventDefault();
    console.log("submitted!");
    props.dispatch(getSearchResult)    
    
  };

  return (
    <div>
    <form
    className="form-inline my-2 my-lg-0 search-form"
    onSubmit={searchSubmit}
    >
        <div className="search-form">
          <span className="form-control-wrap">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.search.text}
              onChange={e => {
                props.dispatch(setSearchText(e.target.value));
              }}
            />
          </span>
          <button className="btn my-2 my-sm-0 " type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps)(HeaderSearch);
