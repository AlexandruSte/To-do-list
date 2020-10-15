import redux_actions from "./redux_constants";

export const addTask = name => ({
    type: redux_actions.ADD_TASK,
    payload: {
        name
    }
});

export const removeTask = id => ({
    type: redux_actions.REMOVE_TASK,
    payload: {
        id
    }
});

export const changeTask = (id, name) => ({
    type: redux_actions.CHANGE_TASK,
    payload: {
        id,
        name
    }
});