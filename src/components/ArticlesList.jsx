import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TopicHeader from "./TopicBar";
import TopicBar from "./TopicBar";

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
            <TopicBar topic_name={topic_name} />
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
