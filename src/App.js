import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { requestAllData } from './store/actions/isFetching'
import AppRouter from './routers/AppRouter'


function App(props) {

  useEffect(() => {
    console.log("first effect");   
    props.dispatch(requestAllData)    
  }, []);

  return (

      <div>
        <AppRouter />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    data: state.allData,
  };
};

export default connect(mapStateToProps)(App);
