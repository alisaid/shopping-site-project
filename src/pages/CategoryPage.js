import React from "react";
import { connect } from "react-redux";
import ItemsContainer from "../components/ItemsContainer";

const CategoryPage = props => {
  const category = props.data.products.filter(e => {
    return e.id === parseInt(props.match.params.id);
  });
  return (
    <div className="section-b">
      <div className="container">
        {category.map(e => (
          <ItemsContainer products={e.items} key={e.id}/>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.allData
  };
};
export default connect(mapStateToProps)(CategoryPage);
