import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteCount, resetCount, setText } from "./counterSlice";
import { useState } from "react";
import { countSelector } from "./counterSlice";
export default function App() {
  const [filed, setField] = useState("");
  const dispatch = useDispatch();
  const countValues = useSelector(countSelector);
  console.log(countValues);
  const handleAdd = () => {
    dispatch(addCount());
  };
  const handleDelete = () => {
    dispatch(deleteCount());
  };
  const handleReset = () => {
    dispatch(resetCount());
  };
  const handleInput = (e) => {
    dispatch(setText(e.target.value));
  };
  return (
    <div className="App">
      <h2>Count {countValues.count}</h2>
      <button onClick={handleAdd}>+</button>{" "}
      <button onClick={handleDelete}>-</button>
      <button onClick={handleReset}>C</button>
      {/* <input type="text" value={countValues.text} onChange={handleInput} /> */}
    </div>
  );
}
