import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

const CarouselContainer = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const categoryData = await axios.get(
          "https://products-data.herokuapp.com/api/getCategoryList"
        );
        setCarouselData(categoryData.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const [carouselData, setCarouselData] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div>
      <section className="section-a">
        <div className="container">
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
          >
            {carouselData.map(e => (
              <Carousel.Item key={e.id}>
                <img
                  className="d-block w-100"
                  src={e.image}
                  alt={e.description}
                />
                <Carousel.Caption>
                  <h3>{e.description}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default CarouselContainer;
