import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";

const CarouselContainer = props => {
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
            {props.data.carouselData.map(e => (
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

const mapStateToProps = state => {
  return {
    data: state.allData
  };
};

export default connect(mapStateToProps)(CarouselContainer);
