import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../utils/api";
import { useState } from "react";

const ArticlesList = () => {
    const [articlesData, setArticlesData] = useState([]);
    useEffect(() => {
        fetchArticles()
            .then(({ data: { articles } }) => setArticlesData(articles))
            .catch((err) => {
                console.error(err.response.data);
            });
    }, []);

    return (
        <section className="ArticlesList">
            {articlesData.map((article) => {
                return (
                    <ArticleCard
                        key={article.article_id}
                        article_id={article.article_id}
                    />
                );
            })}
        </section>
    );
};

export default ArticlesList;
