import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../utils/api";
import { useState } from "react";

const ArticlesList = () => {
    const [articlesData, setArticlesData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchArticles()
            .then(({ data: { articles } }) => {
                setArticlesData(articles);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err.response.data);
            });
    }, []);

    if (loading) return <h2>Loading articles...</h2>;

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
