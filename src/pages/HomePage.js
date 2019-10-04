import React from 'react'
import { connect } from 'react-redux'
import IsFetching from '../components/IsFetching'
import CategoryContainer from '../components/CategoryContainer'
import CarouselContainer from '../components/CarouselContainer'

const HomePage = ({ data }) => {
    return (
        <div>
        {data.loading ? <IsFetching /> :
            <div>
                <CarouselContainer />
                <CategoryContainer />
            </div>
        }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      data: state.allData,
    };
  };

export default connect(mapStateToProps)(HomePage)
