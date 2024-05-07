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