import React, { useEffect } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { connect } from 'react-redux'
import { requestAllData } from './store/actions/allData'
import AppRouter from './routers/AppRouter'
import { history } from './store/ConfigureStore'


function App(props) {

  useEffect(() => {
    console.log("first effect");   
    props.dispatch(requestAllData)    
  }, []);

  return (

      <ConnectedRouter history={history}>
        <AppRouter />
      </ConnectedRouter>
    );
}

const mapStateToProps = (state) => {
  return {
    data: state.allData,
  };
};

export default connect(mapStateToProps)(App);
