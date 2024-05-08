import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-dw.onrender.com/api"
})

export const fetchArticles = () => {
    return newsApi.get(`/articles`)
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