import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setSearchText, getSearchResult } from "../store/actions/search";

const HeaderSearch = props => {
  const [redirect, setRedirect] = useState(false);
  console.log(props.search);

  const searchSubmit = e => {
    e.preventDefault();
    props.dispatch(getSearchResult);
    setRedirect(true);
    setTimeout(() => {
      setRedirect(false);
    }, 1000);
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
      {redirect &&
        (props.search.searchResults.length > 0 ? (
          <Redirect to={`/search/${props.search.text}`} />
        ) : (
          <Redirect to="/404" />
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps)(HeaderSearch);
