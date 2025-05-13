import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/counterSlice";


function App() {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	return (
		<div className="p-6 text-center">
			<h1 className="text-3xl mb-4">Count: {count}</h1>
			<div className="flex gap-2 mt-4 justify-center">
				<button 
				onClick={() => dispatch(increment())} 
				className="bg-blue-500 text-white px-4 py-2 rounded">
					Increment
				</button>
				<button 
				onClick={() => dispatch(decrement())} 
				className="bg-red-500 text-white px-4 py-2 rounded">
					Decrement
				</button>
				<button 
				onClick={() => dispatch(reset())} 
				className="bg-orange-500 text-white px-4 py-2 rounded">
					Reset
				</button>
			</div>
		</div>
	);
}

export default App
