export const Increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const Decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const AddTodo = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};
