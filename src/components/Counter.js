import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.increment} >increment</button>
      <span>{props.count}</span>
      <button onClick={props.decrement}>decrement</button>
    </div>
  )
};
const mapStateToProps = (state) => {
  return { count: state.count };
};
export default connect(mapStateToProps, { increment, decrement })(Counter);