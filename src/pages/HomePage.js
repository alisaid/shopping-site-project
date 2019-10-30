import React from "react";
import { connect } from "react-redux";
import IsFetching from "../components/IsFetching";
import CategoryContainer from "../components/CategoryContainer";
import CarouselContainer from "../components/CarouselContainer";
import ErrorModal from "../components/ErrorModal";

const HomePage = ({ data }) => {
  return (
    <div>
      {data.loading ? (
        <IsFetching />
      ) : (
        <div>
          <CarouselContainer />
          <CategoryContainer />
          <ErrorModal />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    data: state.allData
  };
};

export default connect(mapStateToProps)(HomePage);
