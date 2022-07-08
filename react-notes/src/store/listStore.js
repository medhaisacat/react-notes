import { createStore } from 'redux';
const defaultState = {"task": "Hello world", "completion": true};

const listReducer = (state = [defaultState], action) => {
    switch(action.type) {
        case 'ADD':
            return state.concat([action.item]);
        case 'DELETE':
            return [
                state.filter(item => {
                    return (item.task !== action.item.task);
                })
            ];
        default:
            return state;
    }
}

const listStore = createStore(listReducer, [defaultState]);

export default listStore;