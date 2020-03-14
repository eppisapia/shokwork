import { combineReducers } from 'redux';

const newsApiReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const jsonApiReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const allReducers = combineReducers({
    newsApi: newsApiReducer,
    jsonApi: jsonApiReducer
})

export default allReducers;