import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ArticlesList = () => {
    const [articlesData, setArticlesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { topic_name } = useParams();

    useEffect(() => {
        fetchArticles(topic_name)
            .then(({ data: { articles } }) => {
                setArticlesData(articles);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err.response.data);
            });
    }, [topic_name]);

    if (loading) return <h2>Loading articles...</h2>;

    return (
        <>
            {topic_name && (
                <h2>{topic_name[0].toUpperCase() + topic_name.slice(1)}</h2>
            )}
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
        </>
    );
};

export default ArticlesList;
