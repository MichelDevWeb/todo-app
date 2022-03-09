import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const searchTextSelector = (state) => state.filters.search;

// If not using createSelector (reselect)
// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filter.search);
//   });

//   return todosRemaining;
// };

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return (
          todo.name.includes(searchText) &&
          (priorities.length ? priorities.includes(todo.priority) : true)
        );
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
