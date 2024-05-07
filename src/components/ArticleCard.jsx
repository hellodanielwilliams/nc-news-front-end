import UserDetails from "./UserDetails";

const ArticleCard = ({ article_id }) => {
    return (
        <>
            <h3>Article {article_id}</h3>
            <UserDetails />
        </>
    );
};

export default ArticleCard;
