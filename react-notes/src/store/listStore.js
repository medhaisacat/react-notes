import { createStore } from 'redux';

const listReducer = (state = {tasks: []}, action) => {
    if(action.type === 'ADD') {
        return {
            list: [
                ...state.tasks,
                {
                    task: action.task,
                    completion: false
                }
            ]
        }
    }
    if(action.type === 'DELETE') {
        return {
            list: [
                state.tasks.filter(task => {
                    return (task.task !== action.task);
                })
            ]
        }
    }

    return {}
}

const listStore = createStore(listReducer);

export default listStore;