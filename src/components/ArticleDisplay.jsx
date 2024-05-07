import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import UserDetails from "./UserDetails";
import Byline from "./Byline";
import CommentsList from "./CommentsList";

const ArticleDisplay = () => {
    const { article_id } = useParams();
    const [articleData, setArticleData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticleById(article_id).then(({ data: { article } }) => {
            setArticleData(article);
            setLoading(false);
        });
    }, [article_id]);

    if (loading) return <h2>Loading article...</h2>;

    return (
        <>
            <article className="ArticleDisplay">
                <Byline
                    username={articleData.author}
                    date={articleData.created_at}
                    topic={articleData.topic}
                ></Byline>
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
            <section>
                <CommentsList></CommentsList>
            </section>
        </>
    );
};

export default ArticleDisplay;
