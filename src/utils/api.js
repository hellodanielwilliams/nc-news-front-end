import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-dw.onrender.com/api"
})

export const fetchArticles = () => {
    return newsApi.get(`/articles`)
}