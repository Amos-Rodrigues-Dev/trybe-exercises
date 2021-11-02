import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button value="red" type="button" onClick={(e) => changeSignal(e.target.value)}>Red</button>
        <button value="yellow" type="button" onClick={(e) => changeSignal(e.target.value)}>Yellow</button>
        <button value="green" type="button" onClick={(e) => changeSignal(e.target.value)}>Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.reducerSignalChange.signal.color// Seu código aqui
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (state) => dispatch(changeSignal(state)) // Seu código aqui
});

TrafficSignal.propTypes = {
  signalColor: PropTypes.string.isRequired,
  changeSignal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);