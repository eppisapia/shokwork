import axios from 'axios';

/**
 * Basic config of the Http Payload
 * b9c715d7b95444f9bf4bfa403d1e890e
 * http://newsapi.org/v2/sources?&apiKey=b9c715d7b95444f9bf4bfa403d1e890e
 */

export const newsApi = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines?country=us&apiKey=b9c715d7b95444f9bf4bfa403d1e890e",
    timeout: 60000
});

export const jsonApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    timeout: 60000
});

export const getNewsApi = (path) => {
    return newsApi.get(path);
}

export const getjsonApi = (path) => {
    return jsonApi.get(path)
}