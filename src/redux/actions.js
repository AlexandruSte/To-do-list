export const addTask = name => ({
    type: "ADD_TASK",
    payload: {
        name
    }
});

export const removeTask = id => ({
    type: "REMOVE_TASK",
    payload: {
        id
    }
});

export const changeTask = (id, name) => ({
    type: "CHANGE_TASK",
    payload: {
        id,
        name
    }
});