import { createStore } from 'redux';
// const defaultState = {"task": "Hello world", "completion": true};
const defaultState = {list: []}

const listReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD':
            return {list: state.list.concat([action.item])};
        case 'DELETE':
            return {
                list: state.list.filter(item => {
                        return (item.task !== action.item.task);
                    })
            };
        default:
            return state;
    }
}

const listStore = createStore(listReducer, defaultState);

export default listStore;