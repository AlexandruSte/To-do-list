import redux_constants from "./redux_constants";

const initialState = {
    ids: [],
    tasks: {}
};

const getNextId = ids => {
    if (Math.max.apply(null, ids) == null || Math.max.apply(null, ids) < 0)
        return 1;
    return Math.max.apply(null, ids) + 1;
};

const getUndeletedTasks = (tasks, id) => {
    const {[id]: deletedKey, ...undeletedTasks} = tasks;
    return undeletedTasks;
};

export default function (state = initialState, action) {
    switch (action.type) {
        case redux_constants.ADD_TASK: {
            const {name} = action.payload;
            const id = getNextId(state.ids);
            console.log(id);
            return {
                ids: [...state.ids, id],
                tasks: {
                    ...state.tasks,
                    [id]: {
                        id,
                        name,
                        completed: 'N'
                    }
                }
            };
        }
        case redux_constants.REMOVE_TASK: {
            const {id} = action.payload;
            const undeletedTasks = getUndeletedTasks(state.tasks, id);
            return {
                ids: state.ids.filter(idd => idd !== id),
                tasks: undeletedTasks
            };
        }
        case redux_constants.CHANGE_TASK: {
            const {id, name} = action.payload;
            return {
                ids: state.ids,
                tasks: {
                    ...state.tasks,
                    [id]: {
                        id,
                        name,
                        completed: 'Y'
                    }
                }
            };
        }
        default:
            return state;
    }
}