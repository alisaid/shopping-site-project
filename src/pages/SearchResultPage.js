import React from "react";
import { connect } from "react-redux";
import ItemsContainer from "../components/ItemsContainer";

const SearchResultPage = props => {
  return (
    <div className="section-b">
      <div className="container">
        <ItemsContainer products={props.search.searchResults} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps)(SearchResultPage);
