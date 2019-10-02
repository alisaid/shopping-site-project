import React, { useState, useEffect } from "react";
import Category from "./Category";
import axios from "axios";
import { connect } from 'react-redux'
import IsFetching from './IsFetching';
import { requestProducts, recieveProducts } from '../actions/isFetching';

const CategoryContainer = (props) => {
  
  useEffect(() => {
    console.log("first effect");
    props.dispatch(requestProducts())
    async function fetchData() {
      try {
        const results = await axios.get("https://products-data.herokuapp.com/api/allProducts");        
        console.log(results);
        setCards(results.data)
        setTimeout(() => {     
            props.dispatch(recieveProducts())
            }, 1500)
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  
  const [cards, setCards] = useState([])

  return (
    <div>
      {props.isLoading ? <IsFetching /> :
        <div>
          <section className="section-b">
            <Category cards={cards} />
          </section>
        </div>}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    isLoading: state.isFetching,
  };
};

export default connect(mapStateToProps)(CategoryContainer);
