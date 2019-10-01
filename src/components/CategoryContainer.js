import React, { useState, useEffect } from "react";
import Category from "./Category";
import axios from "axios";

const CategoryContainer = () => {
  
  useEffect(() => {
    console.log("first effect");

    async function fetchData() {
      try {
        const results = await axios.get("https://products-data.herokuapp.com/api/allProducts");
        const data = await results.json()
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  const [cards, setCards] = useState([]);

  return (
    <section className="section-b">
      <Category cards={cards} />
    </section>
  );
};

export default CategoryContainer;
