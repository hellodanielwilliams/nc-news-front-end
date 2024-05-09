import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../utils/api";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import TopicBar from "./TopicBar";
import Sort from "./Sort";

const ArticlesList = () => {
    const [articlesData, setArticlesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { topic_name } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");

    useEffect(() => {
        fetchArticles(topic_name, sort_by, order)
            .then(({ data: { articles } }) => {
                setArticlesData(articles);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err.response.data);
            });
    }, [topic_name, searchParams]);

    return (
        <>
            <TopicBar topic_name={topic_name} />
            {isLoading && <h3>Loading articles...</h3>}
            <Sort />
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
