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
        <>
            <h3>{articleData.title}</h3>
            <p>{articleData.body?.slice(0, 100)}</p>
            <img width="100px" src={articleData.article_img_url}></img>
            <p>{articleData.created_at}</p>
            <p>{articleData.topic}</p>

            <UserDetails username={articleData.author} />
        </>
    );
};

export default ArticleCard;
