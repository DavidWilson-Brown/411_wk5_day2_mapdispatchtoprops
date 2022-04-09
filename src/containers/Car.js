import { connect } from 'react-redux'
import Car from '../components/Car'  //presentation component

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Car)


// connect(suit)(tony stark) =====> IRON MAN
