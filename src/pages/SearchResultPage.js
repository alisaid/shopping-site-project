import React from "react";
import { connect } from "react-redux";
import ItemsContainer from "../components/ItemsContainer";

const SearchResultPage = props => {
  return (
    <div>
      <ItemsContainer products={props.data.searchResults} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.search
  };
};

export default connect(mapStateToProps)(SearchResultPage);
