import { useEffect, useState } from "react";
import { fetchArticleById } from "../utils/api";
import UserDetails from "./UserDetails";

const ArticleCard = ({ article_id }) => {
    const [articleData, setArticleData] = useState({});

    useEffect(() => {
        fetchArticleById(article_id).then(({ data: { article } }) => {
            setArticleData(article);
        });
    }, []);

    return (
        <>
            <h3>{articleData.title}</h3>
            <p>{articleData.body.slice(0, 100)}</p>
            <img width="100px" src={articleData.article_img_url}></img>
            <p>{articleData.created_at}</p>
            <p>{articleData.topic}</p>

            <UserDetails />
        </>
    );
};

export default ArticleCard;
