import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "../../app/actions";

export default function Counter() {
  const countState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{countState} </p>
      <button onClick={()=>dispatch(Increment())}>+</button>
      <button onClick={()=>dispatch(Decrement())}>-</button>
    </div>
  );
}
