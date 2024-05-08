import { useEffect, useState } from "react";
import { fetchArticleById } from "../utils/api";
import UserDetails from "./UserDetails";
import { Link } from "react-router-dom";
import Byline from "./Byline";
import Votes from "./Votes";

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
            <Byline
                username={articleData.author}
                date={articleData.created_at}
                topic={articleData.topic}
            />
            <Link to={`/articles/${article_id}`}>
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
                {console.log(articleData.votes)}
            </Link>
            <Votes
                id={articleData.article_id}
                votes={articleData.votes}
            ></Votes>
        </section>
    );
};

export default ArticleCard;
