import { combineReducers } from 'redux';

const newsApiReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const allReducers = combineReducers({
    newsApi: newsApiReducer
})

export default allReducers;