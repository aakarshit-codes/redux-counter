import { useSelector, useDispatch } from "react-redux";


function App() {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();

	return (
		<div className="p-6 text-center">
			<h1 className="text-3xl mb-4">Counter: {count}</h1>
			<button
				onClick={() => dispatch({ type: "INCREMENT" })}
				className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
			>
				+1
			</button>
			<button
				onClick={() => dispatch({ type: "DECREMENT" })}
				className="bg-red-500 text-white px-4 py-2 rounded mr-2"
			>
				-1
			</button>
			<button
				onClick={() => dispatch({ type: "RESET" })}
				className="bg-orange-500 text-white px-4 py-2 rounded mt-4"
			>
				Reset
			</button>
		</div>
	);
}

export default App
