export default function TodoReducer(state = [], action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
}
