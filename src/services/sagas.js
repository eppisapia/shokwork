import * as myServices from './ApiServices';
import { all } from 'redux-saga/effects';
import { call, takeLatest } from 'redux-saga/effects';

/**
 * Function to consume Get service for newsapi.org
 * @param {*} action Redux action to perform
 */

function* getNewsApi(action) {
    try {
        const data = yield call(myServices.getNewsApi)
        action.onSuccess(data)
    } catch (error) {
        action.onError(error)
    }
}

/**
 * Function to put listener to the action GET_NEWS_API
 */

function* watchGetNewsApi() {
    yield takeLatest("GET_NEWS_API", getNewsApi)
}

/**
 * Insert listener into Redux-Saga
 */
function* allSagas() {
    yield all([
        watchGetNewsApi(),
    ])
}

export default allSagas;