export const getNewsApi = (onSuccess, onError) => ({
    type: "GET_NEWS_API",
    onSuccess,
    onError
})

export const getJsonApi = (path, onSuccess, onError) => ({
    type: "GET_JSON_API",
    path,
    onSuccess,
    onError
})

export const postJsonApi = (path, body, onSuccess, onError) => ({
    type: "POST_JSON_API",
    path,
    body,
    onSuccess,
    onError
})