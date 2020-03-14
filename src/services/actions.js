export const getNewsApi = (onSuccess, onError) => ({
    type: "GET_NEWS_API",
    onSuccess,
    onError
})

export const getJsonApi = (path, onSuccess, onError) => ({
    type: "GET_JSON_API",
    onSuccess,
    onError
})