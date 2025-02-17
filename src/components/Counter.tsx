import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
		<div>
			<h2>Counter: {count}</h2>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
		</div>
	);
}

export default Counter;
