import { useEffect, useState } from "react";
import { fetchArticleById } from "../utils/api";
import UserDetails from "./UserDetails";

const ArticleCard = ({ article_id }) => {
    const [articleData, setArticleData] = useState({});

    useEffect(() => {
        if (article_id) {
            fetchArticleById(article_id)
                .then(({ data: { article } }) => {
                    setArticleData(article);
                })
                .catch((err) => {
                    console.error(err.response.data);
                });
        }
    }, [article_id]);

    return (
        <section className="ArticleCard">
            <div className="ArticleCard__byline">
                <div className="ArticleCard__byline-left">
                    <UserDetails username={articleData.author} />
                    <p>
                        {new Date(articleData.created_at).toLocaleDateString()}
                    </p>
                </div>
                <div className="ArticleCard__byline-right">
                    <div className="ArticleCard__topic">
                        <p>{articleData.topic}</p>
                    </div>
                </div>
            </div>
            <div className="ArticleCard__title">
                <h3>{articleData.title}</h3>
            </div>
            <div className="ArticleCard__body">
                <div className="ArticleCard__bodyText">
                    <p>{articleData.body?.slice(0, 100)}... </p>
                </div>
                <div className="ArticleCard__thumbnail">
                    <img src={articleData.article_img_url}></img>
                </div>
            </div>
        </section>
    );
};

export default ArticleCard;
