import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setSearchText, getSearchResult } from "../store/actions/search";

const Search = props => {
  const searchSubmit = e => {
    e.preventDefault();
    props.dispatch(getSearchResult);
  };

  useEffect(() => {
    if (props.search.searchResults.length !== 0) {
      props.history.push(`/search/${props.search.text}`);
    } else {
      props.history.push("/");
    }
  }, [props.search.searchResults]);

  const render = () => {
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

  return render();
};

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps)(Search);
