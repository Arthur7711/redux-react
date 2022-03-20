import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "../../app/actions";

export default function Todo() {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todo);

  function addingItems() {
    dispatch(AddTodo(state));
    setState("");
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={addingItems}>add</button>
      </div>
      <div>
        {todoItems.map((el, i) => (
          <p key={i}>{el}</p>
        ))}
      </div>
    </div>
  );
}
