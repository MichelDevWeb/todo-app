// Action creators => function
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (data) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: data
    }
}

export const searchFilterChange = (data) => {
    return {
        type: 'filters/searchFilterChange',
        payload: data
    }
}

export const statusFilterChange = (data) => {
    return {
        type: 'filters/statusFilterChange',
        payload: data
    }
}

export const prioritiesFilterChange = (data) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: data
    }
}