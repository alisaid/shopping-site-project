import React from "react";
import Category from "./Category";
import { connect } from 'react-redux'

const CategoryContainer = (props) => {

  return (
    <div>      
        <div>
          <section className="section-b">
            <Category cards={props.data.products} />
          </section>
        </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    data: state.allData,
  };
};

export default connect(mapStateToProps)(CategoryContainer);
