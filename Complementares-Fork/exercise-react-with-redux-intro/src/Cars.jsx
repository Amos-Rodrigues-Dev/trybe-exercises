import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { moveCar } from './redux/actionCreators';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} type="button">move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue', !blueCar)} type="button">move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow', !yellowCar)} type="button">move</button>
      </div>
    </div>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  redCar: PropTypes.bool.isRequired,
  blueCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  redCar: state.reducerMoveCar.cars.red,
  blueCar: state.reducerMoveCar.cars.blue,
  yellowCar: state.reducerMoveCar.cars.yellow,
});

// const mapDispatchToProps = (dispatch) => ({
//   moveCar: (value) => dispatch(moveCar(value))
// });

const mapDispatchToProps = { moveCar };

export default connect(mapStateToProps, mapDispatchToProps)(Cars);