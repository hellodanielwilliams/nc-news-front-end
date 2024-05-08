import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-dw.onrender.com/api"
})

export const fetchArticles = (topic_name) => {
    const params = {}
    if(topic_name){
        params.topic = topic_name
    }
    return newsApi.get(`/articles`, {params})
}

export const fetchArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
}

export const fetchUserByUsername = (username) => {
    return newsApi.get(`/users/${username}`)
}

export const fetchCommentsByArticleId = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
}

export const patchVotesByArticleId = (article_id, inc) => {
    return newsApi.patch(`/articles/${article_id}`, inc)
}

export const patchVotesByCommentId = (comment_id, inc) => {
    return newsApi.patch(`/comments/${comment_id}`, inc)
}

export const postCommentByArticleId = (article_id, req) => {
    return newsApi.post(`/articles/${article_id}/comments`, req)
}

export const deleteCommentByCommentId = (comment_id) => {
    return newsApi.delete(`/comments/${comment_id}`)
}