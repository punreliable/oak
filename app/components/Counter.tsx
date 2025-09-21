'use client';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
	const dispatch = useDispatch();

	const counter = useSelector((state: { counter: number }) => state.counter);

	const toggleCounterHandler = () => {
		console.log('Toggling...');
	};

	const incrementHandler = () => {
		dispatch({ type: 'increment' });
	};
	const decrementHandler = () => {
		dispatch({ type: 'decrement' });
	};

	return (
		<div className='counter'>
			<div className='row' style={{ display: 'block', width: '100%' }}>
				<div className='col-md-12'>Value: {counter}</div>
			</div>
			<div className='row' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: '2rem'}}>

				<div style={{width: '50%', maxWidth: '100%'}}>
					<button onClick={incrementHandler} className={`nes-btn is-success`}>
						Increment
					</button>
				</div>
				<div style={{width: '50%', maxWidth: '100%'}}>
					<button onClick={decrementHandler} className={`nes-btn is-error`}>
						Decrement
					</button>
				</div>
			</div>
			<div style={{width: '100%', maxWidth: '100%', marginTop: '2rem'}}>
					<button onClick={toggleCounterHandler} className={`nes-btn is-warning`}>
						Toggle
					</button>
				</div>
		</div>
	);
};
export default Counter;
