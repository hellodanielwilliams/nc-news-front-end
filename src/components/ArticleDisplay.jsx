import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import UserDetails from "./UserDetails";

const ArticleDisplay = () => {
    const { article_id } = useParams();
    const [articleData, setArticleData] = useState({});

    useEffect(() => {
        fetchArticleById(article_id).then(({ data: { article } }) => {
            setArticleData(article);
        });
    }, []);

    return (
        <article className="ArticleDisplay">
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
            <div className="ArticleDisplay__title">
                <h2>{articleData.title}</h2>
            </div>
            <div className="ArticleDisplay__image">
                <img src={articleData.article_img_url}></img>
            </div>
            <div className="ArticleDisplay__body">
                <p>{articleData.body}</p>
            </div>
        </article>
    );
};

export default ArticleDisplay;
