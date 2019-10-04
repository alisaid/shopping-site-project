import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { requestAllData } from './store/actions/isFetching'
import IsFetching from './components/IsFetching';
import CategoryContainer from './components/CategoryContainer';
import CarouselContainer from './components/CarouselContainer'

function App(props) {

  useEffect(() => {
    console.log("first effect");   
    props.dispatch(requestAllData)    
  }, []);

  return (
    <div>
    {props.data.loading ? <IsFetching /> :
      <div>
        <CarouselContainer />
        <CategoryContainer />
      </div>}
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
    data: state.allData,
  };
};

export default connect(mapStateToProps)(App);
