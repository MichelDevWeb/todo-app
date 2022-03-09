const initState = [
  { id: 1, name: "Buy Crypto", completed: false, priority: "Medium" },
  { id: 2, name: "Learn ReactJS", completed: true, priority: "High" },
  { id: 3, name: "Play Valorant", completed: true, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
    default:
      return state;
  }
};

export default todoListReducer;
