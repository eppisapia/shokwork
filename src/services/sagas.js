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
 * Function to consume Get service from jsonplaceholder.typicode.com/
 * @param {*} action Redux action to perform
 */

function* getJsonApi(action) {
    try {
        const data = yield call(myServices.getjsonApi, action.path)
        action.onSuccess(data)
    } catch (error) {
        action.onError(error)
    }
}

/**
 * Function to put listener to the action GET_JSON_API
 */
function* watchGetJsonApi() {
    yield takeLatest("GET_JSON_API", getJsonApi)
}

/**
 * Insert listener into Redux-Saga
 */
function* allSagas() {
    yield all([
        watchGetNewsApi(),
        watchGetJsonApi()
    ])
}

export default allSagas;