export const getNewsApi = (path, onSuccess, onError) => ({
    type: "GET_NEWS_API",
    path,
    onSuccess,
    onError
})